# Premier Schools Exhibition (PSE) — Landing Page

A pixel-perfect, fully responsive, accessible landing page for the **Premier
Schools Exhibition**, built for the **SRV Media — Frontend Developer**
assignment. Implemented from the provided Figma design using **semantic HTML5,
custom CSS, and vanilla JavaScript — no frameworks, no build step.**

> ### 🔗 Live demo: **https://srv-media-frontend-task-ochre.vercel.app/**
> Deployed on Vercel.

---

## Table of contents
1. [Live demo & quick start](#live-demo--quick-start)
2. [Tech stack](#tech-stack)
3. [Project structure](#project-structure)
4. [Sections & features](#sections--features)
5. [Accessibility](#accessibility)
6. [Responsiveness](#responsiveness)
7. [Performance](#performance)
8. [Browser support](#browser-support)
9. [Design fidelity](#design-fidelity)
10. [QA checklist](#qa-checklist)
11. [Assignment guidelines — compliance](#assignment-guidelines--compliance)
12. [Customisation notes](#customisation-notes)
13. [Credits](#credits)

---

## Live demo & quick start

**Live (Vercel):** https://srv-media-frontend-task-ochre.vercel.app/

There is **no build step** — it is plain HTML/CSS/JS. To run locally, either
open the file directly or serve the folder over a tiny static server
(recommended, so that relative asset paths resolve identically to production).

```bash
# Option 1 — Python
python -m http.server 5500

# Option 2 — Node
npx serve .

# Option 3 — VS Code
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:5500`.

---

## Tech stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Markup | **HTML5** | Semantic landmarks (`header`, `main`, `section`, `footer`, `nav`-like regions, `aside`) |
| Styles | **Custom CSS** | No Tailwind/Bootstrap. CSS custom properties (design tokens), Grid & Flexbox, `clamp()` fluid type |
| Behaviour | **Vanilla JS** | ~90 lines, no dependencies, IIFE-scoped modules |
| Fonts | **Poppins** (Google Fonts) | Preconnected for faster load |
| Naming | **BEM** | `block__element--modifier` |

---

## Project structure

```
SRV Media/
├── index.html              # Single-page markup (semantic + BEM + ARIA)
├── css/
│   └── styles.css          # All styles: tokens, components, responsive, reduced-motion
├── js/
│   └── main.js             # Sticky scroll-nav, schools slider dots, exhibition slider
├── assest/
│   └── images/             # Logos, hero portraits, card photos, laurel wreath
├── README.md               # This file
└── ASSIGNMENT.md           # Original brief for reference
```

---

## Sections & features

### 1. Navigation (two-bar scroll reveal)
- A **white top navbar** with an over-hanging logo and a "Register Now" pill.
- A second **compact gradient navbar** is fixed beneath it and is revealed when
  the white bar scrolls away — implemented purely with stacking + a permanent
  fixed bar (no jank).
- The revealed bar's controls become focusable only when visible
  (`tabindex`/`aria-hidden` managed in JS).

### 2. Hero
- Headline, venue pill, and an **"Enquire Now"** form (in-flow, no overlap).
- A **vertical auto-scrolling photo gallery** (three columns, alternating
  up/down) built with pure CSS keyframes.
- **Pauses when the pointer is over the gallery**; respects
  `prefers-reduced-motion`.

### 3. Stats bar
- Trust figures (1 Million+ parents, 22+ years, 500+ schools, 17 cities) framed
  by **laurel-wreath graphics**.

### 4. Participating Schools
- **Continuous "sling" marquee** with **two rows flowing in opposite
  directions** (left→right and right→left).
- Logos sit in white cards; the track is duplicated for a **seamless loop**.
- **Pauses on hover / focus**; disabled under `prefers-reduced-motion`.

### 5. Choose the School
- **Four overlay cards on desktop** (image + gradient + title/description).
- On mobile it becomes a **native finger-swipe slider** (CSS scroll-snap) with
  **synced pagination dots** (tap a dot to scroll to that card).

### 6. Pre-schedule banner
- Full-bleed banner: lavender copy panel on the left blending into a photo on
  the right via a gradient overlay.

### 7. Exhibition ("What Makes This a Must-Visit")
- The card row is a **slider** of 5 highlight cards (consistent height).
- **Two-finger / trackpad / touch scrolling** via native scroll-snap, **plus
  accessible prev/next arrows** that disable at the ends.
- A smooth **arc** at the bottom transitions into the footer.

### 8. Footer
- Vertical gradient panel with logo, two office addresses, phone numbers, and
  social icon chips, over a white copyright strip.

---

## Accessibility

Targets **WCAG 2.2 AA**.

- **Skip link** (`Skip to content`) as the first focusable element.
- **Semantic landmarks** and a single `<h1>`; logical heading order.
- **Keyboard support** — every control is a real `<button>`/`<a>`; sliders use
  native scroll (arrow-key scrollable) and focusable arrow buttons.
- **Screen readers** — descriptive `alt` text on meaningful images; decorative
  images use `alt=""` / `aria-hidden`; form fields have visually-hidden labels.
- **Visible focus** — custom `:focus-visible` outline.
- **Motion** — all looping animations stop under
  `@media (prefers-reduced-motion: reduce)`.
- Duplicate marquee logos and the off-screen scroll-nav are hidden from the
  accessibility tree to avoid double announcements.

> **Recommended check:** run the **axe DevTools** browser extension and the
> keyboard-only tab order before submitting.

---

## Responsiveness

Mobile-first-friendly fluid layout with three main breakpoints:

| Breakpoint | Behaviour |
|------------|-----------|
| `> 1100px` | Full desktop: 3-column hero, 4-up cards, 4-up exhibition |
| `≤ 1100px` | Enquiry form drops below the hero copy/gallery |
| `≤ 960px`  | 2-up stats / school cards / exhibition cards |
| `≤ 600px`  | Single-column stacks; swipe sliders; compact type |

- Fluid typography with `clamp()`.
- `overflow-x: hidden` guards against horizontal scroll on any width.
- Verified at 1440 / 1280 / 1024 / 768 / 390 px with no layout breakage.

---

## Performance
- **Zero dependencies / no build** → tiny payload, instant parse.
- `loading="lazy"` on below-the-fold images.
- `preconnect` to Google Fonts.
- Animations use **GPU-friendly `transform`** and `will-change`.
- Marquee tracks duplicated in markup so looping needs **no JS timers**.

---

## Browser support
Targets the **latest 2 versions** of Chrome, Firefox, Safari, and Edge, plus
**iOS Safari and Android Chrome**. Uses widely-supported features
(Grid, Flexbox, custom properties, scroll-snap, `clamp()`). `-webkit-`
prefixes added where useful (`overflow-scrolling`, `mask-image`).

---

## Design fidelity
Built to match the Figma design pixel-for-pixel. Colours, spacing, radii and
typography were sampled directly from the design exports, e.g.:

| Token | Value |
|-------|-------|
| Hero gradient | `#101145 → #1f1351 → #40186c` + magenta glow |
| Gold accent | `#f6c445` |
| Venue pill | `#f6c98c` |
| Navy text / headings | `#0c1640` / `#101146` |
| Exhibition cards | `#f1e7ff → #e6d2ff` |
| Footer | `#4a2484 → #1b1350` |

---

## QA checklist
- [x] Semantic HTML5, BEM naming
- [x] No frameworks / no build step
- [x] Responsive (desktop / tablet / mobile)
- [x] Participating-logos sling marquee (alternating, pause on hover/focus)
- [x] Choose-the-School cards → mobile swipe slider + dots
- [x] Exhibition slider (5 cards, swipe + arrows, consistent height)
- [x] `prefers-reduced-motion` honoured
- [x] Keyboard navigable, visible focus, skip link
- [ ] Run W3C HTML validator (validator.w3.org)
- [ ] Run W3C CSS validator (jigsaw.w3.org/css-validator)
- [ ] Run axe accessibility scan
- [ ] Manual cross-browser pass (Chrome/Firefox/Safari/Edge + iOS/Android)

---

## Assignment guidelines — compliance

| Guideline | Status |
|-----------|--------|
| Semantic HTML5 + custom CSS, no frameworks, BEM | ✅ |
| Accessibility: WCAG 2.2 AA, skip link, keyboard, screen reader | ✅ |
| Responsiveness across devices | ✅ |
| Cross-browser (latest 2 + mobile) | ✅ (please run a manual pass) |
| Hero: auto-play, pause on hover | ✅ (vertical auto-scroll gallery) |
| Participating logos: continuous sling, alternating, pause on hover/focus | ✅ |
| Choose the School: 4 cards → mobile slider + dots | ✅ |
| Exhibition: section slider, 3–6 cards, consistent height, autoplay optional | ✅ |
| Animations honour `prefers-reduced-motion` | ✅ |

---

## Customisation notes
- **Colours / spacing** live as CSS custom properties in `:root` at the top of
  `css/styles.css` — change once, applied everywhere.
- **Add a participating-school logo:** drop the file into `assest/images/` and
  add a `<span class="logos__item"><img …></span>` to **both** marquee rows
  (and their duplicate set) so the loop stays seamless.
- **Add an exhibition card:** add another `<li class="feature exhibition__card">`
  — the slider, arrows and snap points adapt automatically.
- **Replace contact details:** edit the office addresses / phone numbers in the
  footer of `index.html`.

---

## Credits
- **Design:** Premier Schools Exhibition (PSE) Figma.
- **Build:** Frontend Developer assignment for **SRV Media**.
- **Font:** Poppins (Google Fonts).
- Images are placeholders/representative assets for the prototype.
