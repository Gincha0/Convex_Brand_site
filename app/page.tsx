'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { RowA } from './components/content/RowA'
import { RowB } from './components/content/RowB'
import { ComponentsRow } from './components/content/ComponentsRow'
import { Footer } from './components/Footer'

type AnimState = 'loading' | 'revealing' | 'idle'

export default function Home() {
  const [animState, setAnimState] = useState<AnimState>('loading')

  const handleReveal = useCallback(() => {
    setAnimState('revealing')
    // After reveal animations complete (~1.5s), enter idle
    setTimeout(() => setAnimState('idle'), 1500)
  }, [])

  const revealed = animState === 'revealing' || animState === 'idle'

  return (
    <>
      {/* Loading overlay — unmount after revealing to free memory */}
      {animState === 'loading' && (
        <LoadingScreen onReveal={handleReveal} />
      )}

      {/* Fade out overlay during revealing state */}
      {animState === 'revealing' && (
        <motion.div
          className="fixed inset-0 z-50 bg-background pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}

      <Nav visible={revealed} />

      <main>
        <Hero revealed={revealed} />
        <RowA />
        <RowB />
        <ComponentsRow />
        <Footer />
      </main>
    </>
  )
}
