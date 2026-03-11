'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export type LoadingScreenProps = {
  onReveal: () => void
}

/**
 * Blade path data duplicated here so this component is fully independent
 * from the Hero's ConvexLogo instance — each is its own React/DOM tree.
 */
const BLADES = [
  'M 103.90691,0 L 77.926192,0 L 58.007773,34.499766 L 123.82518,34.499904 Z',
  'M 74.461731,0 L 34.625032,0 L 21.634357,22.500303 L 41.552891,56.999795 Z',
  'M 125.557010,37.499934 L 85.720753,37.499976 L 118.629330,94.499916 L 138.548010,59.999738 Z',
  'M 96.978402,62.999956 L 64.069306,120 L 103.90697,120 L 116.89713,97.500161 Z',
  'M 19.902674,25.49966 L -0.016010,59.99983 L 12.974285,82.499821 L 52.811693,82.499852 Z',
  'M 80.524223,85.499803 L 14.706110,85.499850 L 34.624839,120 L 60.605553,120 Z',
] as const

const BLADE_CYCLE = ['#1A1A1A', '#862633', '#CCCCCC', '#1A1A1A'] as const
const STAGGER = 0.18   // seconds between each blade start
const DURATION = 0.55  // seconds per full blade color cycle

export function LoadingScreen({ onReveal }: LoadingScreenProps) {
  const [snapping, setSnapping] = useState(false)

  useEffect(() => {
    const handleLoad = async () => {
      // Trigger snap-to-white on all blades simultaneously
      setSnapping(true)
      // Wait for snap duration (0.15s) + brief flash pause (0.2s)
      await new Promise<void>((r) => setTimeout(r, 350))
      onReveal()
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad, { once: true })
      // Safety fallback — never block longer than 5s
      const fallback = setTimeout(handleLoad, 5000)
      return () => clearTimeout(fallback)
    }
  }, [onReveal])

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Inline SVG so each blade is a motion.path — no DOM querying needed */}
      <svg
        width={140}
        height={120}
        viewBox="-2 -2 144 124"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {BLADES.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={{ fill: '#1A1A1A' }}
            animate={
              snapping
                ? { fill: '#FFFFFF' }
                : { fill: [...BLADE_CYCLE] }
            }
            transition={
              snapping
                ? { duration: 0.15, ease: 'easeOut' }
                : {
                    duration: DURATION,
                    delay: i * STAGGER,
                    repeat: Infinity,
                    repeatDelay: 0.25,
                    ease: 'easeInOut',
                  }
            }
          />
        ))}
      </svg>
    </div>
  )
}
