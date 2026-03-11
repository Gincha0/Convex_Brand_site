'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ConvexLogo } from './ui/ConvexLogo'

export type HeroProps = {
  revealed: boolean
}

/**
 * Wordmark path data from LOGO_FIN_HOR_white.svg (text21, aria-label="CONVEX").
 * Original viewBox: 0 0 846 120 — wordmark occupies x: 152–846, y: 0–120.
 * We use a cropped viewBox "152 0 694 120" to show only the wordmark.
 */
const WORDMARK_PATH =
  'M 152.01167,100.28571 V 19.714284 L 172.47801,0 h 60.86511 l 20.11041,19.371428 v 18.342855 h -24.20368 v -9.771426 l -8.3645,-8.057144 h -35.59364 l -9.07636,8.742854 v 62.742861 l 9.07636,8.742852 h 35.59364 l 8.3645,-8.057142 v -9.771427 h 24.20368 V 100.62857 L 233.34312,120 h -60.86511 z m 116.56928,0 V 19.714284 L 289.04728,0 h 64.06853 l 20.46637,19.714284 V 100.28571 L 353.11581,120 h -64.06853 z m 71.72115,-0.17143 9.07638,-8.742852 V 28.628567 l -9.07638,-8.742854 h -38.44112 l -9.07638,8.742854 v 62.742861 l 9.07638,8.742852 z M 394.93847,0 h 21.71211 l 55.52607,81.42857 h 0.35595 V 0 h 23.31382 V 120 H 474.13431 L 418.60823,38.742855 h -0.3559 V 120 H 394.93847 Z M 509.1941,0 h 24.91555 l 30.96647,92.22857 h 0.35594 L 596.3985,0 h 24.91557 L 577,120 h -23.49179 z m 125.46749,0 h 90.0519 v 19.714284 h -65.84821 v 30.342855 h 60.68712 v 19.37143 h -60.68712 v 30.857141 h 65.84821 V 120 h -90.0519 z M 775.25659,58.114284 733.61204,0 h 27.22915 L 788.96018,39.42857 817.07912,0 h 27.22914 L 802.66371,58.800001 846.08795,120 H 818.85879 L 788.96018,77.657141 759.0615,120 h -27.22914 z'

export function Hero({ revealed }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Background moves at 0.5× scroll rate
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-center"
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 bg-background"
        style={{ y: bgY }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6">
        <div className="flex items-center gap-6">
          {/* Logo mark — animates from center-screen into lockup position */}
          <motion.div
            initial={{ x: 'calc(50vw - 60px)', opacity: 0 }}
            animate={
              revealed
                ? { x: 0, opacity: 1 }
                : { x: 'calc(50vw - 60px)', opacity: 0 }
            }
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="shrink-0"
          >
            <ConvexLogo size={96} bladeColor="#FFFFFF" />
          </motion.div>

          {/* Wordmark — clips open left-to-right using the real SVG path */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={
              revealed
                ? { clipPath: 'inset(0 0% 0 0)' }
                : { clipPath: 'inset(0 100% 0 0)' }
            }
            transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <svg
              /* Wordmark occupies x 152–846 in the original 846×120 viewBox */
              viewBox="152 0 694 120"
              height={96}
              width={Math.round(96 * 694 / 120)}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="CONVEX"
            >
              <path d={WORDMARK_PATH} fill="#FFFFFF" />
            </svg>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-5xl font-semibold text-grey-light"
          initial={{ opacity: 0, y: 8 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Compact. Uncompromised.
        </motion.p>
      </div>
    </section>
  )
}
