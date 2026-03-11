# CONVEX — Brand Site

Brand and concept site for **CONVEX**, a compact Micro-ATX PC case venture designed in Riga, Latvia. Pre-product stage — goal is brand establishment and newsletter signups.

Live target: [convexpc.com](https://convexpc.com) &nbsp;·&nbsp; Repo: [github.com/Gincha0/Convex_Brand_site](https://github.com/Gincha0/Convex_Brand_site)

---

## Overview

CONVEX sits between Mini-ITX and full ATX — Micro-ATX form factor with full-size GPU clearance (RTX 5080/5090), cooling-first internal layout, and a geometric aesthetic rooted in Latvian design tradition. The site is a pre-launch brand page built to establish visual identity and capture early interest.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 — App Router |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Font | Chakra Petch — via `next/font/google` |
| Linting | ESLint 8 + TypeScript + React plugins |

---

## Features

- **Loading animation** — aperture hexagon logo with sequential clockwise blade sweep (black → accent → grey → white), synchronized reset, state-machine driven
- **Hero reveal sequence** — logo mark animates from center to lockup, wordmark clips open left-to-right via SVG path + `clipPath`
- **Parallax hero** — background layer moves at 0.5× scroll rate via Framer Motion `useScroll`
- **Floating nav** — centered glass-blur pill, animates in with tagline
- **Content sections** — two-column layout rows with SVG asset placeholders
- **Newsletter signup** — client-side form with validation and success state (UI only, no backend)
- **Footer** — full horizontal logo lockup, location, copyright

---

## Design System

| Token | Value | Role |
|-------|-------|------|
| `background` | `#1A1A1A` | Primary background |
| `accent` | `#862633` | Latvian maroon, CTAs |
| `grey-mid` | `#7F7F7F` | Nav background, secondary |
| `grey-light` | `#A5A5A5` | Subtext, inactive |
| `grey-lightest` | `#CCCCCC` | Borders, subtle elements |

Single font family: **Chakra Petch** (300 / 400 / 600 / 700). Base spacing unit: 6px.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

---

## Project Status

Pre-product. SVG asset slots (case renders, GPU/cooler illustrations) use accent-colour placeholder divs — final assets are a pending design task. Newsletter form is UI-only; backend integration deferred until launch confirmed.

First units targeting end of 2027.

---

## License

Private — all rights reserved. Design and identity assets are proprietary to CONVEX.
