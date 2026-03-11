/**
 * ConvexLogo — aperture hexagon mark (6-blade pinwheel)
 * Server Component — no interactivity, pure SVG.
 * Blades are individually addressable for animation via className or style.
 */

export type ConvexLogoProps = React.ComponentProps<'svg'> & {
  /** Size in px — sets both width and height */
  size?: number
  /** Override fill for all blades (used in idle/revealed state) */
  bladeColor?: string
  /** Per-blade fill override (index 0–5) */
  bladeColors?: string[]
}

export function ConvexLogo({
  size = 80,
  bladeColor,
  bladeColors,
  ...props
}: ConvexLogoProps) {
  /**
   * Aperture hexagon: 6 blades arranged at 60° intervals.
   * Each blade is a quadrilateral — inner-narrow at center, wide at outer edge.
   * Hollow center achieved by leaving the central area empty.
   */
  const cx = 50
  const cy = 50
  const outerR = 44
  const innerR = 14
  const bladeHalfAngle = 22 // degrees — controls blade width

  const blades = Array.from({ length: 6 }, (_, i) => {
    const angleDeg = i * 60
    const angleRad = (angleDeg * Math.PI) / 180
    const halfRad = (bladeHalfAngle * Math.PI) / 180

    // Outer arc points
    const o1x = cx + outerR * Math.cos(angleRad - halfRad)
    const o1y = cy + outerR * Math.sin(angleRad - halfRad)
    const o2x = cx + outerR * Math.cos(angleRad + halfRad)
    const o2y = cy + outerR * Math.sin(angleRad + halfRad)

    // Inner arc points (narrower)
    const innerHalf = halfRad * 0.4
    const i1x = cx + innerR * Math.cos(angleRad - innerHalf)
    const i1y = cy + innerR * Math.sin(angleRad - innerHalf)
    const i2x = cx + innerR * Math.cos(angleRad + innerHalf)
    const i2y = cy + innerR * Math.sin(angleRad + innerHalf)

    const fill =
      bladeColors?.[i] ?? bladeColor ?? '#FFFFFF'

    return (
      <path
        key={i}
        d={`M ${i1x} ${i1y} L ${o1x} ${o1y} L ${o2x} ${o2y} L ${i2x} ${i2y} Z`}
        fill={fill}
        data-blade={i}
      />
    )
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CONVEX logo mark"
      role="img"
      {...props}
    >
      {blades}
    </svg>
  )
}
