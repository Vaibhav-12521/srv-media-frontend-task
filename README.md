# Premier Schools Exhibition — Landing Page

Frontend Developer assignment for **SRV Media**. A pixel-perfect, fully
responsive, accessible landing page built from the provided Figma design using
**semantic HTML5 + custom CSS + vanilla JavaScript — no frameworks**.

## Run locally
No build step. Open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python -m http.server 5500
# or Node
npx serve .
```

Then visit `http://localhost:5500`.

## Project structure
```
SRV Media/
├── index.html          # semantic markup, BEM classes, ARIA
├── css/styles.css       # custom CSS, design tokens, responsive + reduced-motion
├── js/main.js           # accessible sliders (vanilla JS)
└── assest/images/       # design assets (logos, photos)
```

## Requirements checklist
- **Stack:** semantic HTML5 + custom CSS, no frameworks, **BEM** naming.
- **Accessibility (WCAG 2.2 AA):** skip-to-content link, ARIA carousel roles
  (`aria-roledescription`, `role="group"`, tablist dots), `inert`/`aria-hidden`
  on off-screen slides, visible focus styles, full keyboard support
  (← / → on the hero), screen-reader-only labels on form fields.
- **Responsiveness:** desktop / tablet / mobile breakpoints (960px, 600px).
- **Hero — dual-axis slider:** horizontal slide track (autoplay, swipe,
  pause on hover/focus, arrows + dots, keyboard) **plus** vertical auto-scrolling
  portrait columns (alternating up/down).
- **Participating school logos:** continuous "sling" marquee with alternating
  left→right / right→left rows; pauses on hover/focus.
- **Choose the School:** four cards on desktop → swipeable slider with
  pagination dots on mobile.
- **Exhibition section:** card slider with accessible prev/next controls and
  consistent card height.
- **Motion:** all animations honor `prefers-reduced-motion: reduce`.

## QA notes
- HTML/CSS written to validate against W3C; test with the
  [Nu HTML Checker](https://validator.w3.org/nu/) and
  [CSS Validator](https://jigsaw.w3.org/css-validator/).
- Accessibility audited with the **axe** DevTools extension.
- Tested in Chrome, Edge, Firefox, and Safari (latest 2 versions) plus
  iOS/Android mobile browsers.
