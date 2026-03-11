'use client'

import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { ConvexLogo } from './ui/ConvexLogo'

export type LoadingScreenProps = {
  onReveal: () => void
}

const BLADE_COUNT = 6
const BLADE_DURATION = 0.5   // seconds per blade cycle
const BLADE_STAGGER = 0.18   // seconds between blade starts
const LOOP_PAUSE = 0.4       // pause between full loops

export function LoadingScreen({ onReveal }: LoadingScreenProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    let cancelled = false

    async function runAnimation() {
      // Cycle blades sequentially in a loop until window loads
      const cycle = async () => {
        for (let i = 0; i < BLADE_COUNT; i++) {
          if (cancelled) return
          // Each blade: background → accent → light grey → background
          animate(
            `[data-blade="${i}"]`,
            {
              fill: ['#1A1A1A', '#862633', '#CCCCCC', '#1A1A1A'],
            },
            {
              duration: BLADE_DURATION,
              delay: 0,
              ease: 'easeInOut',
            }
          )
          // Stagger: start next blade before current finishes
          await new Promise((r) => setTimeout(r, BLADE_STAGGER * 1000))
        }
        // Wait for last blade to finish, then loop
        await new Promise((r) =>
          setTimeout(r, (BLADE_DURATION - BLADE_STAGGER) * 1000 + LOOP_PAUSE * 1000)
        )
      }

      // Run loops until window.onload or already loaded
      const runLoops = async () => {
        while (!cancelled) {
          await cycle()
        }
      }

      runLoops()

      // Snap all blades to white, then trigger reveal
      const handleLoad = async () => {
        if (cancelled) return
        cancelled = true

        await animate(
          '[data-blade]',
          { fill: '#FFFFFF' },
          { duration: 0.15 }
        )

        // Brief pause so the white flash registers
        await new Promise((r) => setTimeout(r, 200))
        onReveal()
      }

      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad, { once: true })
        // Safety fallback — trigger after 4s regardless
        setTimeout(handleLoad, 4000)
      }
    }

    runAnimation()

    return () => {
      cancelled = true
    }
  }, [animate, onReveal])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      ref={scope}
    >
      {/* Animate wrapper div, not the SVG itself (perf rule) */}
      <div>
        <ConvexLogo
          size={120}
          bladeColor="#1A1A1A"
        />
      </div>
    </motion.div>
  )
}
