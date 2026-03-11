/**
 * ConvexLogo — aperture hexagon mark extracted from LOGO_FIN_HOR_white.svg.
 * 6 individually addressable blade <path> elements for Framer Motion animation.
 * Server Component — no interactivity.
 */

export type ConvexLogoProps = React.ComponentProps<'svg'> & {
  /** Height in px — width scales proportionally (mark is ~140×120 viewport units) */
  size?: number
  /** Uniform fill for all blades */
  bladeColor?: string
  /** Per-blade fill override, index 0–5 */
  bladeColors?: string[]
}

/**
 * Six blade paths extracted from the compound `path20` in LOGO_FIN_HOR_white.svg.
 * Relative `m` subpaths converted to absolute coordinates.
 * ViewBox: -2 -2 144 124  (2-unit buffer around the 0 0 140 120 mark bounds)
 */
const BLADES = [
  // Blade 0 — top
  'M 103.90691,0 L 77.926192,0 L 58.007773,34.499766 L 123.82518,34.499904 Z',
  // Blade 1 — top-left
  'M 74.461731,0 L 34.625032,0 L 21.634357,22.500303 L 41.552891,56.999795 Z',
  // Blade 2 — right  (relative m resolved: origin = blade 1 M point)
  'M 125.557010,37.499934 L 85.720753,37.499976 L 118.629330,94.499916 L 138.548010,59.999738 Z',
  // Blade 3 — bottom
  'M 96.978402,62.999956 L 64.069306,120 L 103.90697,120 L 116.89713,97.500161 Z',
  // Blade 4 — left
  'M 19.902674,25.49966 L -0.016010,59.99983 L 12.974285,82.499821 L 52.811693,82.499852 Z',
  // Blade 5 — bottom-left  (relative m resolved: origin = blade 4 M point)
  'M 80.524223,85.499803 L 14.706110,85.499850 L 34.624839,120 L 60.605553,120 Z',
] as const

export function ConvexLogo({
  size = 80,
  bladeColor = '#FFFFFF',
  bladeColors,
  ...props
}: ConvexLogoProps) {
  // Mark is 140×120 viewport units → keep aspect ratio
  const height = size
  const width = Math.round((size * 140) / 120)

  return (
    <svg
      width={width}
      height={height}
      viewBox="-2 -2 144 124"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CONVEX logo mark"
      role="img"
      {...props}
    >
      {BLADES.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={bladeColors?.[i] ?? bladeColor}
          data-blade={i}
        />
      ))}
    </svg>
  )
}
