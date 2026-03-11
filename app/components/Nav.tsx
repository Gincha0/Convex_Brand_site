'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/Button'

export type NavProps = {
  visible: boolean
}

const NAV_ITEMS = ['About', 'Specs', 'Components'] as const

export function Nav({ visible }: NavProps) {
  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: -8 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div
        className="flex items-center gap-6 px-6 py-3 rounded border border-grey-lightest backdrop-blur-md"
        style={{ background: 'rgba(127, 127, 127, 0.85)' }}
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
      </div>
    </motion.nav>
  )
}
