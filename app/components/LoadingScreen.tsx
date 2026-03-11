'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export type LoadingScreenProps = {
  onReveal: () => void
}

/**
 * Blades in CLOCKWISE order (top → right → bottom-right → bottom-left → left → top-left).
 */
const CLOCKWISE_BLADES = [
  // 0 — top (~27°)
  'M 103.90691,0 L 77.926192,0 L 58.007773,34.499766 L 123.82518,34.499904 Z',
  // 1 — right (~87°)
  'M 125.557010,37.499934 L 85.720753,37.499976 L 118.629330,94.499916 L 138.548010,59.999738 Z',
  // 2 — bottom-right (~146°)
  'M 96.978402,62.999956 L 64.069306,120 L 103.90697,120 L 116.89713,97.500161 Z',
  // 3 — bottom-left (~207°)
  'M 80.524223,85.499803 L 14.706110,85.499850 L 34.624839,120 L 60.605553,120 Z',
  // 4 — left (~267°)
  'M 19.902674,25.49966 L -0.016010,59.99983 L 12.974285,82.499821 L 52.811693,82.499852 Z',
  // 5 — top-left (~327°)
  'M 74.461731,0 L 34.625032,0 L 21.634357,22.500303 L 41.552891,56.999795 Z',
] as const

const BLADE_CYCLE = ['#1A1A1A', '#862633', '#CCCCCC', '#FFFFFF'] as const

const DURATION     = 0.5   // seconds per blade cycle
const STAGGER      = 0.5   // sequential: next blade starts when previous ends
const PAUSE_WHITE  = 500   // ms all-white pause before reset (matches 0.5s math gap)
const RESET_DUR    = 0.35  // seconds for synchronized fade-to-black


/**
 * Animation phases:
 *   cycling   — sequential clockwise sweep, each blade: black → accent → grey → white
 *   resetting — all blades fade to black simultaneously
 *
 * On each 'cycling → resetting' transition the motion.path key increments,
 * forcing a remount so the staggered sweep restarts cleanly from black.
 */
type AnimPhase = 'cycling' | 'resetting'

// Total time until the last (5th) blade reaches white
const SEQUENCE_MS = (CLOCKWISE_BLADES.length - 1) * STAGGER * 1000 + DURATION * 1000

export function LoadingScreen({ onReveal }: LoadingScreenProps) {
  const [phase, setPhase] = useState<AnimPhase>('cycling')
  const [cycleKey, setCycleKey] = useState(0)
  const [snapping, setSnapping] = useState(false)

  // Drive the cycling ↔ resetting state machine
  useEffect(() => {
    if (snapping) return

    let timer: ReturnType<typeof setTimeout>

    if (phase === 'cycling') {
      // Wait for all blades to reach white, pause briefly, then reset
      timer = setTimeout(() => setPhase('resetting'), SEQUENCE_MS + PAUSE_WHITE)
    } else {
      // After fade-to-black completes, restart the sweep with a fresh key
      timer = setTimeout(() => {
        setCycleKey((k) => k + 1)
        setPhase('cycling')
      }, RESET_DUR * 1000)
    }

    return () => clearTimeout(timer)
  }, [phase, snapping])

  // Page-load reveal
  useEffect(() => {
    const pageLoad =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((r) =>
            window.addEventListener('load', () => r(), { once: true })
          )
    pageLoad.then(async () => {
      setSnapping(true)
      await new Promise<void>((r) => setTimeout(r, 350))
      onReveal()
    })
  }, [onReveal])

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <svg
        width={112}
        height={96}
        viewBox="-2 -2 144 124"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {CLOCKWISE_BLADES.map((d, i) => (
          <motion.path
            // Key change on cycleKey forces remount → stagger restarts from black
            key={`${i}-${cycleKey}`}
            d={d}
            initial={{ fill: '#1A1A1A' }}
            animate={
              snapping
                ? { fill: '#FFFFFF' }
                : phase === 'resetting'
                  ? { fill: '#1A1A1A' }
                  : { fill: [...BLADE_CYCLE] }
            }
            transition={
              snapping
                ? { duration: 0.15, ease: 'easeOut' }
                : phase === 'resetting'
                  ? { duration: RESET_DUR, ease: 'easeInOut' }   // all blades together
                  : {
                      duration: DURATION,
                      delay: i * STAGGER,
                      times: [0, 0.35, 0.65, 1],
                      ease: 'easeInOut',
                    }
            }
          />
        ))}
      </svg>
    </div>
  )
}
