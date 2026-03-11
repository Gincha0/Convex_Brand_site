'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/Button'

export type NavProps = {
  visible: boolean
}

const NAV_ITEMS = ['About', 'Specs', 'Components'] as const

export function Nav({ visible }: NavProps) {
  return (
    // Outer nav spans full viewport width so centering is never offset by transforms
    <nav className="fixed top-6 inset-x-0 z-40 flex justify-center pointer-events-none">
      <motion.div
        className="pointer-events-auto flex items-center gap-6 px-6 py-3 rounded border border-grey-lightest backdrop-blur-md"
        style={{ background: 'rgba(127, 127, 127, 0.85)' }}
        initial={{ opacity: 0, y: -8 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white text-lg font-light hover:text-grey-lightest transition-colors whitespace-nowrap"
          >
            {item}
          </a>
        ))}
        <Button
          variant="sharp"
          className="text-sm py-2 px-4"
          onClick={() => {
            document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Notify Me
        </Button>
      </motion.div>
    </nav>
  )
}
