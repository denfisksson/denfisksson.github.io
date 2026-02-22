'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideInProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  stagger?: number
}

export default function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className,
  stagger = 0
}: SlideInProps) {
  const directionOffset = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: -30 },
    down: { x: 0, y: 30 }
  }

  const offset = directionOffset[direction]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    show: { opacity: 1, x: 0, y: 0 }
  }

  if (stagger > 0) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideInItem = motion.div
