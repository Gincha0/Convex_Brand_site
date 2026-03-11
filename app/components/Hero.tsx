'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ConvexLogo } from './ui/ConvexLogo'

export type HeroProps = {
  revealed: boolean
}

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
          {/* Logo mark — animates from center to lockup position */}
          <motion.div
            initial={{ x: 'calc(50vw - 60px - 1.5rem)', opacity: 0 }}
            animate={
              revealed
                ? { x: 0, opacity: 1 }
                : { x: 'calc(50vw - 60px - 1.5rem)', opacity: 0 }
            }
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ConvexLogo size={80} bladeColor="#FFFFFF" />
          </motion.div>

          {/* Wordmark — reveals left-to-right */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={revealed ? { width: 'auto' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-[96px] font-bold text-white leading-none tracking-tight">
                CONVEX
              </span>
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-5xl font-semibold text-grey-light"
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
