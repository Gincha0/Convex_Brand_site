'use client'

import { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import { ConvexLogo } from './ui/ConvexLogo'

export type LoadingScreenProps = {
  onReveal: () => void
}

export function LoadingScreen({ onReveal }: LoadingScreenProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // Start the looping sequential blade animation immediately.
    // stagger(0.18) delays each blade by 0.18s relative to the previous.
    // repeat: Infinity keeps the wave cycling until we override it.
    animate(
      '[data-blade]',
      { fill: ['#1A1A1A', '#862633', '#CCCCCC', '#1A1A1A'] },
      {
        duration: 0.5,        // each blade's full color cycle
        delay: stagger(0.18), // blades start 0.18s apart — overlap effect
        repeat: Infinity,
        repeatDelay: 0.3,     // pause between loops
        ease: 'easeInOut',
      }
    )

    const handleLoad = async () => {
      // Override loop: snap all blades to white simultaneously
      await animate('[data-blade]', { fill: '#FFFFFF' }, { duration: 0.15 })
      // Brief white-flash pause so the snap is visible
      await new Promise<void>((r) => setTimeout(r, 200))
      onReveal()
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad, { once: true })
      // Safety fallback — never hang longer than 5s
      setTimeout(handleLoad, 5000)
    }
  }, [animate, onReveal])

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <ConvexLogo size={120} bladeColor="#1A1A1A" />
    </div>
  )
}
