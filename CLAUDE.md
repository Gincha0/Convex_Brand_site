# CONVEX Brand Site — Claude Instructions

## Skills Library

Skills are located at: `C:\Users\Gints\Documents\ClaudeAdvisor\skills\`

Read the relevant `SKILL.md` before building any component:

| Task | Skill to load |
|------|---------------|
| Building any component | `building-components/SKILL.md` + references/ |
| Writing Next.js code | `next-best-practices/SKILL.md` |
| Writing React code | `react-best-practices/SKILL.md` |
| Component architecture decisions | `composition-patterns/SKILL.md` |
| UI/design review | `web-design-guidelines/SKILL.md` |
| Deploying to Vercel | `deploy-to-vercel/SKILL.md` |

---

## Project Specs

Build plan: `C:\Users\Gints\Documents\ClaudeAdvisor\archive\convex-brand-site\build-plan.md`
Design spec: `C:\Users\Gints\Documents\ClaudeAdvisor\archive\convex-brand-site\graphical-identity.md`

---

## Stack

- Next.js 16, App Router, TypeScript strict
- Tailwind CSS **v3** (tailwind.config.js — NOT v4)
- Framer Motion for all animation
- Chakra Petch via `next/font/google` (already in layout.tsx)

---

## Key Patterns to Apply

### RSC Boundaries (from next-best-practices)
- Animated/interactive components → `'use client'`
- Data fetching → server components only
- Never `async` client components

### Font (already set up)
- Font imported once in `app/layout.tsx` as CSS variable `--font-chakra-petch`
- Tailwind `font-sans` maps to it via `tailwind.config.js`

### Component Types (from building-components)
- Extend `React.ComponentProps<"div">` (or relevant element)
- Export prop types as `<Name>Props`
- Always spread `{...props}` last

### Composition (from composition-patterns)
- No boolean prop proliferation — use explicit variants
- Compound components for complex UI
- React 19: no `forwardRef`, use `ref` prop directly

### Performance (from react-best-practices)
- No barrel file imports — import directly
- Static JSX hoisted outside components
- Animate SVG wrapper div, not the SVG element itself (critical for LoadingScreen)
- Use `useRef` for transient animation values

---

## Design Tokens (Tailwind)

```
bg-background      = #1A1A1A  (primary background)
bg-accent          = #862633  (Latvian maroon, CTA)
text-grey-mid      = #7F7F7F  (nav bg base, secondary)
text-grey-light    = #A5A5A5  (subtext, inactive)
text-grey-lightest = #CCCCCC  (borders, subtle elements)
```

Typography:
- H1: `text-[96px] font-bold`
- H2: `text-5xl font-semibold`
- Body: `text-2xl font-normal`
- Subtext: `text-lg font-light`

Borders:
- Sharp: `border-2 border-grey-lightest rounded-none`
- Rounded: `border-2 border-grey-lightest rounded`

---

## Component Tree

```
app/
├── layout.tsx              ← font, metadata, body bg (done)
├── page.tsx                ← composes all sections
└── components/
    ├── LoadingScreen.tsx   ← 'use client', Framer Motion blade animation
    ├── Nav.tsx             ← 'use client', fixed/floating, fade+translate in
    ├── Hero.tsx            ← 'use client', 100vh, parallax scroll
    ├── content/
    │   ├── RowA.tsx        ← SVG placeholder left, text right
    │   ├── RowB.tsx        ← text left, SVG placeholder right
    │   └── ComponentsRow.tsx
    ├── Footer.tsx          ← newsletter + links
    └── ui/
        ├── ConvexLogo.tsx  ← SVG aperture hexagon mark (static, server ok)
        ├── Button.tsx      ← sharp/rounded variants
        └── SignupForm.tsx  ← 'use client', UI only (no API call)
```

## Animation States (page-level)

Three sequential states: `loading` → `revealing` → `idle`

Managed with `useState` in a client wrapper around `page.tsx` content.
Drive with React context or prop drilling — keep it simple.

## SVG Placeholders

All SVG slots during build = accent-colored divs:
```tsx
<div className="bg-accent w-full aspect-[4/3] flex items-center justify-center text-grey-light text-lg">
  slot-name
</div>
```

## Newsletter

UI only — no API route. `SignupForm` handles local state only (email, submitted, error).
Show success message on submit. No `fetch` call.
