---
name: TJ Viola
description: A fluid, glowing blue artist website with elegant uppercase type and original music first.
colors:
  bg: "#020c2a"
  surface: "#07316b"
  ink: "#f1fcff"
  muted: "#b8e6f7"
  accent: "#73f2ff"
  accent-ink: "#03234c"
  light: "#e7f9ff"
  light-ink: "#03234c"
  light-muted: "#41657d"
  logo-white: "#ffffff"
  trail-cyan: "#73e4ff"
  trail-ice: "#a4edff"
  trail-electric: "#42c7ff"
  outline-electric: "#31bfff"
  trail-center: "#e5fcff"
  trail-center-low: "#9eeeff"
typography:
  hero-copy:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "clamp(28px, 3.15vw, 47px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.04em"
  headline:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "clamp(44px, 6.1vw, 88px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.035em"
  title:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "33px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.045em"
  label:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.09em"
  progress-label:
    fontFamily: "TJ Forma, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  circle: "50%"
  control: "0"
  image-frame: "0"
  dialog: "0"
  spotify: "0"
spacing:
  gutter: "clamp(20px, 2.4vw, 40px)"
  mobile-gutter: "20px"
  section: "130px"
  mobile-section: "85px"
  control-gap: "14px"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "18px 29px"
  button-accent-hover:
    backgroundColor: "#c5dffe"
  button-dark:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "18px 29px"
  text-link:
    typography: "{typography.label}"
    padding: "0"
  round-play:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    width: "54px"
    height: "54px"
  filter:
    backgroundColor: "rgba(12,69,158,.48)"
    textColor: "{colors.ink}"
    padding: "12px 20px"
    rounded: "{rounded.control}"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
  service:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "30px 3%"
  record:
    backgroundColor: "#03143b"
    rounded: "{rounded.circle}"
  video:
    backgroundColor: "transparent"
    rounded: "{rounded.image-frame}"
  seek:
    height: "4px"
    width: "100%"
  logo:
    textColor: "{colors.logo-white}"
    width: "min(44vw, 640px)"
  logo-mobile:
    textColor: "{colors.logo-white}"
    width: "min(85vw, 420px)"
  loading-progress:
    backgroundColor: "#123978"
    textColor: "{colors.logo-white}"
    typography: "{typography.progress-label}"
    rounded: "{rounded.control}"
    height: "24px"
    width: "100%"
---

# Design System: TJ Viola

## Overview

**Creative North Star: "A Continuous Blue Soundfield"**

A continuous cobalt/cyan environment connects original music, performance, photography, and booking. The supplied stacked TJ/VIOLA mark provides the geometric letterforms: its white base sits inside continuous visible electric-blue contours, with coordinated thin blue streaks traveling through the letter centers. TJ Forma carries that thin, open character through every title and supporting role.

Real photographs and release artwork remain crisp inside broad, feathered gradient edges. The composition stays level: circular records lift on hover, photographs move vertically, and unboxed services step through the shared light field. The detailed 442-key studio station appears only in the loading scene.

**Key Characteristics:**

- Reference-derived white TJ/VIOLA mark and TJ Forma geometric capitals.
- Electric light-blue logo trails; cobalt/cyan atmosphere with subtle teal highlights.
- Level artwork, feathered image perimeters, circular releases, and unboxed services.
- One synchronized, single-key loading sweep across the 442-key station.

## Colors

The frontmatter mirrors the final stylesheet palette. Midnight grounds the page; deep cobalt supports quiet controls; ice and sky foregrounds carry text; luminous cyan marks actions, filters, focus, and arrows. Light compatibility tokens serve the floating media controls; content sections remain transparent.

The logo base is literal white, with a narrow animated blue centerline above it. A continuous electric-blue outline stays visible while the brighter trail changes shade and brightness within the electric light-blue/cyan family, with a near-white cyan center. The surrounding canvas may use restrained teal highlights while retaining cobalt depth.

**The Blue Light Rule.** Keep the environment blue dominant. Logo trails stay within electric light-blue/cyan shades. The logo base remains white beneath its thin center streak; inline names use dark ink when placed on light cyan sections.

## Typography

TJ Forma (`dist/assets/tj-forma-regular.woff2`) is the single self-hosted family, at weight `400`, with Arial/sans-serif fallback. It is a renamed SIL OFL derivative of Gruppo; T/J/V/I/O/L/A were redrawn to echo the user’s reference. The original screenshot font is not identified. Source and license notices ship beside the font.

The hero and footer names are SVG logos, not viewport-sized font text. The hero logo is `min(44vw, 640px)` on desktop and `min(85vw, 420px)` on mobile; the footer is `min(64vw, 900px)` and `85vw`. Header marks are `106px`/`86px`; loader marks are `91px`/`76px`, with a smaller short-screen fit.

- **Hero copy:** the frontmatter hero-copy role; mobile uses `25px`, `1.3` leading, and `.035em` tracking.
- **Headlines:** the headline role; mobile section headings use `40px`, `1.15`, and `.02em`. About, booking, and social headings use `47px`, `48px`, and `46px` on mobile.
- **Titles:** releases use the title role and `23px` on mobile. Feature titles use `38px`/`27px`; services use `clamp(27px, 3.2vw, 46px)`/`29px`; video titles use `16px`/`13px`.
- **Body:** the body role; About/social prose uses `16px`, `1.8`, `.035em`, changing to `15px`, `1.8`, `.025em` on mobile. Keep prose within the observed `65ch` maximum.
- **Labels:** links/actions use `15px` with `.09em` tracking and smaller responsive variants. Metadata and loader captions remain compact. The centered loading number uses the progress-label role (`13px` on mobile); progress and media timecodes use tabular numerals.

Authored page text is uppercase. Native Spotify and YouTube embeds retain their provider presentation.

**The Reference Letterform Rule.** Use TJ Forma for authored text and the supplied geometric tracing for the stacked logo. Do not restore serif or heavy block lettering.

## Layout

All content chapters share a transparent field and the fluid gutter. Music/booking use `130px` vertical spacing; films have a `100px` top; mobile chapters generally use `85px`. The logo sits above the feathered hero photograph. Only the media wrapper is masked, so the listening action and text stay unclipped. Desktop hero proportions keep that first listening action in the opening viewport.

Four releases form a staggered `1.35fr 1.35fr 1fr 1fr` composition, becoming two columns at `1000px`. Videos move from three columns to two with alternating offsets. Portrait/text layouts become one column at `600px`. Mobile services use a full text column plus a `25px` arrow column. Filters fit a label-weighted four-column grid, switching to two columns below `366px`.

About imagery uses `4/5` on desktop and `.95` on mobile; social imagery uses `1.3` and `1.05`. Automatic image height preserves these authored ratios. Source sizes are hero `3700 × 2467`, portraits `1440 × 1920` and `1600 × 1143`, artwork `1400–3000` square, and 22 video thumbnails `1280 × 720`. Hero, portrait, and artwork assets include `640w`/`1280w` derivatives. Preserve available source detail and credits.

## Elevation & Depth

A cadence-limited canvas paints blue glows and striated currents, influenced by scroll. Screen-blended raster grain uses `.055` desktop and `.035` mobile opacity to retain cleaner material detail. Neither layer receives pointer input. Source image pixels remain sharp: SVG masks create the blurred gradient perimeter (`26` units for hero/film and `28` for portraits in a `1000`-unit viewBox). Circular record masks fade from `59%` to `71%`; player artwork fades from `56%`.

Each logo has seven continuous blue contour paths beneath seven brighter moving paths. The trace uses a `175 825` dash over `5.5s`; gradient stops and inline `.brand-name-trail` text cycle over `15s`. The pure-white core is painted above both external blue layers; an ice-blue laser head with eight progressively fading tail layers is painted above the white core. All logos use the same vector-space outline: `2.305789` units for the base and `3.015263` for the brighter trace, with `vector-effect: none`. At the hero’s maximum `760px` width these render as the established `2.6px` / `3.4px` strokes. Smaller marks and the two transition clones scale the stroke in exact proportion to the white letterforms. The `3`-unit base halo and `6`-unit trace halo scale with the same SVG geometry. The moving clones no longer compensate the outer stroke width, so the glow grows naturally with the logo and lands without a thickness jump. Five placements cover the loader, header, hero, footer wordmark, and footer monument. Reduced motion holds the outlines, trace, and inline glow static.

Artwork and text stay level. Record hover lifts `10px`; round controls scale to `1.06`; desktop portrait motion stays vertical. Reveals rise `30px` over `1.2s` with `cubic-bezier(.16,1,.3,1)`. The single interlude phrase floats upward `12px` over an `8s` alternating motion. Reduced motion removes travel and continuous texture animation while preserving content.

**The Level Field Rule.** Keep content chapters transparent and artwork level. Use feathered edges, vertical movement, and light to define objects without rotating them.

## Shapes

Organic alpha masks define photographs and video; radial alpha fades define circular artwork. Actions, filters, play controls, progress tracks, player panels, and dialogs have square corners. The percentage is bare text, without a visible backing. Circular record artwork and organic image masks remain intact alongside unboxed services. Keep image controls, focus outlines, and hero copy outside masks. Use the established fine line icons.

## Components

- **Logo and inline names:** paint the white SVG base above both external outline layers, then a narrow traveling laser head and dissolving blue tail; preserve the continuously visible external blue outline. A longer, brighter tracing segment follows the actual letter contours in electric light-blue/cyan. Inline artist names use `.brand-name-trail`; all title-like copy uses TJ Forma.
- **Actions/navigation:** angular blue-glass buttons combine translucent dark-blue fill, an ice-blue specular gradient, a fine luminous rim, and white TJ Forma labels. Desktop backdrop blur is 12px and mobile blur is 8px, with an opaque fallback. Hover brightens the glass; press gives a small lift/scale response. Focus uses a 2px ice outline with a 4px offset. Selected filters keep a stronger fill and bottom edge. The sticky glass header has one luminous indicator that slides between desktop links on hover, focus, and section changes. Active destinations expose aria-current. The mobile panel opens in380ms with45ms link staggering and closes in180ms; Escape returns focus, links focus their destination, outside/focusout/desktop-resize dismiss it, and reduced motion skips spatial animation.
- **Releases/video:** four preview controls, real artwork, full-track destinations, and unmasked player controls. Vinyl artwork remains level and has a stage-level focus outline. Video selection is exposed through `aria-pressed`.
- **Services/player/dialogs:** open stepped service rows; a rectangular dark-blue glass floating player with angular glass controls and native seek; square-cornered blue native dialogs with named close controls and an external video destination.
- **Loading station:** middle FANTOM 8 (`88`, bottom) plus D-50 (`61`, top); right JUPITER-8 (`61`, bottom) plus Yamaha DX7 (`61`, top); left dual-manual Hammond B-3 (`61 + 61`). A black upright AX-Synth (`49`) occupies the carpet’s projected upper-right corner, facing the viewer. The Leslie stands left of the Hammond; a MacBook sits directly on it, aligned with the cabinet, showing an illustrative Logic-style session. A pale blue/teal Persian-style raster rug anchors the modeled walnut, grille, metal, and soft shadows.
- **Loading progress:** a slim rectangular translucent blue-glass track and icy glass fill contain the percentage at the full-width center. Fine specular rims and inset depth match the glass buttons. It is `24px` high on desktop, `23px` on mobile, and `22px` on short screens. The `14px`/`13px` number is white over the empty track and black wherever the blue fill passes behind it. An aria-hidden black duplicate is clipped by the same `--load-progress` percentage so individual glyph portions switch accurately. There is no backing, padding, border, or shadowed container. Preserve `#load-percent`, `#load-percent-filled`, `.percent-sign`, and `aria-valuenow`.
- **Loading sweep:** Hammond upper → Hammond lower → D-50 → FANTOM 8 → JUPITER-8 → DX7 → AX-Synth. Hammond/middle rows run left to right. The bottom-right JUPITER-8 keeps its original physical left-to-right direction; the upper DX7 reverses right to left. The keytar finishes top to bottom. The sweep maps all `442` chromatic positions, including `181` black keys, to loading progress. The normal intro is time-paced to finish in about 5.45 seconds when assets are ready; each display frame shows one active note. The longer sequential mode can render every key individually. Future keys are gray; the single active key depresses with a geometry-sized blue face/bloom; passed keys return to natural ivory/black. Replay resets the state. The sweep begins after the first visible scene frame. Timed progress commits only after the selected note renders; 100% follows the final key. The 5.45-second total includes a 750ms instrument pulse and 1350ms dissolve. Slow assets may extend the intro. Skip and WebGL fallback remain available. Desktop rendering targets a 4K-sized buffer when feasible; mobile uses a lighter density.

## Do's and Don'ts

### Do:

- Do preserve the supplied stacked logo’s segmented shapes, preserve its white base beneath the narrow center streak, and keep the external blue tracing visible at final rendered sizes.
- Do keep every site control angular while preserving organic photographic masks and circular record artwork.
- Do use TJ Forma across titles, supporting copy, controls, and inline artist names.
- Do retain crisp source detail and broad gradient fades at image perimeters.
- Do keep hero text/actions and media controls outside image masks.
- Do preserve visible focus, named controls, reduced-motion behavior, and intro skip/replay.
- Do keep the percentage and progress bar synchronized to the visibly rendered loading key.

### Don't:

- Don’t introduce serif or heavy block lettering, or claim the reference font has been identified.
- Don’t add teal, green, or purple hues to the electric light-blue logo trails.
- Don’t rotate text, photographs, record artwork, or media frames.
- Don’t create opaque rectangular section bands or boxed service cards.
- Don’t blur image interiors, enlarge small sources to imply detail, or describe all imagery as 4K.
- Don’t place the studio station outside the loader or let decorative layers capture pointer input.

The normal intro targets 5.45 seconds from startup when assets are ready, including its 750ms completion pulse and 1350ms dissolve. The chromatic sweep is time-paced, so available display frames determine which intermediate notes are visible; only one key is active per frame. The explicit sequential API remains available for a longer every-key sweep. Progress reaches 100% only after the final key renders.

The animated blue environment uses broader, faster flowing currents with luminous crests traveling along each ribbon, drifting light particles, and stronger roaming light pools. Pointer and scroll response preserve the sense of depth. The same field appears behind the loader. Section gradients animate only while visible, resume during the intro-to-hero dissolve, and pause during the loading sweep or when the tab is hidden; reduced motion holds the canvas and gradients still. Canvas density and drawing cadence remain capped.

The document title is TJ VIOLA — ARTIST & PRODUCER. After ten seconds without interaction, the ready page scrolls downward at 45% of the 100 CSS-pixel/second reference speed (45 px/s). Any interaction pauses it and restarts the inactivity delay. It stops at the bottom without looping and adds no controls. Intro, dialogs, menus, Spotify embeds, focused editing/iframe elements, text selection, hidden or unfocused tabs, and reduced-motion preferences suspend automatic movement.

The blue field now uses navy-to-royal-to-azure base gradients, four drifting blue light pools, and pale-ice highlights along the ribbons. These layers remain continuous behind the page and loader.

The page follows a continuous dark-to-light blue progression: midnight hero, deep royal music, cobalt video, azure artist story, ocean-blue interlude, cyan booking, and pale light-cyan After Hours. Adjacent section gradient endpoints match, while drifting color pools and a faint liquid-glass texture keep the boundaries fluid. The footer fades from the same pale cyan back into midnight. Dark navy text is used on the lighter sections; logos and glass-button labels retain their white bases.

The liquid-light background material was generated with the built-in image tool and saved at its native 1672 × 940, with a 1280 × 720 mobile derivative. It is composited at low opacity and gently drifts; no enlargement or native-4K claim is made for the source texture. The procedural canvas renders up to 3840 × 2160 on desktop when the display warrants it and uses a lighter mobile density. Prompt and provenance: background-image-generation.json.

Video filters begin with All Videos, selected by default, followed by Live and Originals. The Selected filter is removed. All Videos starts with six items and Show More reveals six at a time until all23 are visible; category changes reset the visible count.

Navigation is handled by navigation.js/navigation.css: a sticky glass header, a shared animated blue link indicator, luminous hover/focus feedback, and an interruptible mobile-menu reveal with keyboard focus and reduced-motion support.

The internal logo streak uses seven letter skeletons, each with eight nested fading blue tail layers, a compact blue aura, and an ice-blue hot head. All layers remain clipped inside the white letterforms and share the outer trace’s5.5-second period and0.63-second letter stagger. Reduced motion displays a static streak.

The intro hands off through a stationary 1350ms cross-dissolve. The studio recedes gently while the hero photograph settles into focus, the loading logo grows and moves into the hero logo position, and supporting copy follows. Both atmospheric canvases share the same rendered frame during the handoff. Navigation controls and page interaction stay locked until the dissolve completes; reduced motion uses an immediate reveal. Replaying cancels pending exit and pulse timers before resetting the scene.

The loading logo splits into two SVG marks during the 1350ms dissolve. One stays near the corner and settles into the navigation logo position; the other grows into the hero logo. Both destinations are measured at the current viewport size, and neon outline/laser phases remain continuous. The small mark stays visible through the navigation fade before swapping into the header. Navigation links remain hidden until loading completes. Skip uses the same handoff; reduced motion reveals the destination logos directly. At 100% the percentage is white again, and replay restores the normal white-on-empty/black-on-fill behavior.

The logo split and surrounding dissolve run for 1350ms, with the key sweep and 750ms instrument pulse retaining their previous pace. The complete ready intro is approximately 5.45 seconds. A neon-blue trace starts at the carpet’s lower-left corner, travels up its left edge, across the back, down the right, then across the front to close at the same corner at 100%. Its length follows displayed loading progress. At completion, the carpet’s blue and teal woven details and its full border glow, while the Leslie cabinet and MacBook join the instruments in the shared blue-neon pulse. The Logic display brightens with its own screen glow while retaining visible session detail. Replay clears the trace and pulse; reduced motion uses a static completion highlight.
