export const LOGO_TRANSITION_MS = 1350;

/** Split the studio's vector mark into a hero title and a persistent navigation mark. */
export function beginLogoTransition({ duration = LOGO_TRANSITION_MS } = {}) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  const source = document.querySelector('.loader-top .brand-logo');
  const hero = document.querySelector('.hero-heading .brand-logo');
  const nav = document.querySelector('.site-header .brand-logo');
  const header = document.querySelector('.site-header');
  if (!source || !hero || !nav || !header) return null;

  const rect = element => {
    const { x, y, width, height } = element.getBoundingClientRect();
    return { x, y, width, height };
  };
  const sourceRect = rect(source);
  document.body.classList.add('logo-handoff');
  const destinations = [
    { name: 'hero', element: hero, laserScale: 1 },
    { name: 'nav', element: nav, laserScale: .5 }
  ];
  if (!sourceRect.width || !sourceRect.height || destinations.some(({ element }) => !rect(element).width)) {
    document.body.classList.remove('logo-handoff');
    return null;
  }

  // CSS animations restart on a clone. Match every path's phase at both swaps.
  function synchronizeAnimations(from, to) {
    const fromNodes = [from, ...from.querySelectorAll('*')];
    const toNodes = [to, ...to.querySelectorAll('*')];
    fromNodes.forEach((node, index) => {
      const incoming = toNodes[index]?.getAnimations() || [];
      for (const animation of node.getAnimations()) {
        const match = incoming.find(item => item.animationName === animation.animationName);
        if (match && animation.currentTime !== null) match.currentTime = animation.currentTime;
      }
    });
  }

  let frame = 0, holdTimer = 0, phase = 'moving';
  let start = 0, deadline = 0;
  const mix = (a, b, amount) => a + (b - a) * amount;
  // Smooth acceleration and deceleration make enlargement feel like a camera move.
  const ease = progress => progress ** 3 * (progress * (progress * 6 - 15) + 10);
  const overallProgress = now => ease(Math.min(1, Math.max(0, (now - start) / duration)));
  const flights = destinations.map(destination => {
    const layer = document.createElement('div');
    layer.className = 'logo-transition';
    layer.dataset.destination = destination.name;
    layer.setAttribute('aria-hidden', 'true');
    layer.inert = true;
    const mark = source.cloneNode(true);
    layer.append(mark);
    document.body.append(layer);
    return {
      ...destination, layer, mark, target: rect(destination.element),
      from: sourceRect, current: sourceRect, segmentStart: start, segmentDuration: duration, closed: false
    };
  });
  const heroFlight = flights[0], navFlight = flights[1];

  function render(flight, box, progress) {
    const scaleX = box.width / flight.target.width;
    const scaleY = box.height / flight.target.height;
    flight.layer.style.width = `${flight.target.width}px`;
    flight.layer.style.height = `${flight.target.height}px`;
    flight.layer.style.transform = `translate3d(${box.x}px,${box.y}px,0) scale(${scaleX},${scaleY})`;
    // Outlines scale with the SVG letterforms. Only the inner laser keeps its optical compensation.
    flight.layer.style.setProperty('--logo-inverse-scale', String(1 / scaleX));
    flight.layer.style.setProperty('--logo-laser-scale', String(mix(.5, flight.laserScale, progress) / scaleX));
  }

  for (const flight of flights) {
    render(flight, sourceRect, 0);
    synchronizeAnimations(source, flight.mark);
  }
  // Cloning and phase alignment finish before the flight clock starts.
  start = performance.now();deadline = start + duration;
  for (const flight of flights) flight.segmentStart = start;
  document.body.classList.add('logo-in-flight', 'logo-nav-in-flight');

  function land(flight) {
    if (flight.closed) return;
    flight.target = rect(flight.element);
    render(flight, flight.target, 1);
    synchronizeAnimations(flight.mark, flight.element);
    flight.layer.remove();
    flight.closed = true;
  }

  function releaseNavigation() {
    if (phase === 'closed') return;
    land(navFlight);
    document.body.classList.remove('logo-nav-in-flight');
    phase = 'closed';
    cancelAnimationFrame(frame);
    clearTimeout(holdTimer);
    window.removeEventListener('resize', retarget);
  }

  function tick(now) {
    if (phase === 'closed') return;
    if (phase === 'holding') {
      // Keep the small mark opaque while the header beneath it fades in.
      navFlight.target = rect(navFlight.element);
      render(navFlight, navFlight.target, 1);
      const style = getComputedStyle(header);
      if (!document.body.classList.contains('intro-active') && style.visibility === 'visible' && Number(style.opacity) >= .999) {
        releaseNavigation();
        return;
      }
    } else {
      for (const flight of flights) {
        const elapsed = Math.min(1, Math.max(0, (now - flight.segmentStart) / flight.segmentDuration));
        const progress = ease(elapsed);
        // Let the hero clear the small mark before its letterforms become large.
        const verticalProgress = flight.name === 'hero' ? 1 - (1 - elapsed) ** 5 : progress;
        flight.current = {
          x: mix(flight.from.x, flight.target.x, progress),
          y: mix(flight.from.y, flight.target.y, verticalProgress),
          width: mix(flight.from.width, flight.target.width, progress),
          height: mix(flight.from.height, flight.target.height, progress)
        };
        render(flight, flight.current, overallProgress(now));
      }
    }
    if (phase === 'holding' || now < deadline) frame = requestAnimationFrame(tick);
  }

  function retarget() {
    if (phase === 'closed') return;
    const now = performance.now();
    for (const flight of flights) {
      if (flight.closed) continue;
      flight.target = rect(flight.element);
      if (phase === 'holding') {
        flight.current = flight.target;
        render(flight, flight.target, 1);
      } else {
        flight.from = flight.current;
        flight.segmentStart = now;
        flight.segmentDuration = Math.max(1, deadline - now);
        render(flight, flight.current, overallProgress(now));
      }
    }
  }

  window.addEventListener('resize', retarget, { passive: true });
  frame = requestAnimationFrame(tick);
  return {
    complete() {
      if (phase !== 'moving') return;
      cancelAnimationFrame(frame);
      land(heroFlight);
      document.body.classList.remove('logo-in-flight');
      navFlight.target = rect(navFlight.element);
      render(navFlight, navFlight.target, 1);
      phase = 'holding';
      // The header begins its 480ms fade after this callback returns.
      frame = requestAnimationFrame(tick);
      holdTimer = setTimeout(releaseNavigation, 750);
    },
    cancel() {
      phase = 'closed';
      cancelAnimationFrame(frame);
      clearTimeout(holdTimer);
      window.removeEventListener('resize', retarget);
      for (const flight of flights) flight.layer.remove();
      document.body.classList.remove('logo-in-flight', 'logo-nav-in-flight', 'logo-handoff');
    }
  };
}
