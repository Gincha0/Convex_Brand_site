# CONVEX — Brand Site

Pre-launch brand site for **CONVEX**, a compact PC case being designed in Riga, Latvia. The goal is early interest and newsletter signups before anything ships.

Live target: [convexpc.com](https://convexpc.com) &nbsp;·&nbsp; Repo: [github.com/Gincha0/Convex_Brand_site](https://github.com/Gincha0/Convex_Brand_site)

---

## Overview

Most cases waste space. A standard mid-tower is roughly half air — dead space above the motherboard, empty columns beside the PSU, front panel bays nobody uses. CONVEX will fit Micro-ATX and Mini-ITX boards, full-length GPUs, and real cooling clearance into a chassis that takes up significantly less.

The geometry is rooted in Latvian folk ornament: sharp angles, precise repeating patterns, nothing curved or soft. Flat panels, exact edges, 240mm liquid cooling support, clearance for the largest current-gen GPU sizes.

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

- **Loading animation** — aperture hexagon logo with sequential clockwise blade sweep (black → accent → grey → white), state-machine driven with clean loop reset
- **Hero reveal sequence** — logo mark animates from center to lockup, wordmark clips open left-to-right via SVG path + `clipPath`
- **Parallax hero** — background layer moves at 0.5× scroll rate via Framer Motion `useScroll`
- **Floating nav** — centered glass-blur pill, animates in with tagline, links to Specs and Components sections
- **Content sections** — two-column layout rows with real case silhouette SVGs and component illustrations
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

Pre-product. Newsletter form is UI-only; backend integration deferred until launch is confirmed.

First units targeting end of 2027.

---

## License

Private — all rights reserved. Design and identity assets are proprietary to CONVEX.
