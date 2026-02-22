'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Better settings for touchpad/trackpad compatibility
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.4 for snappier feel
      lerp: 0.08, // Reduced from 0.1 for more responsive scrolling
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1, // Normal wheel multiplier
      touchMultiplier: 2, // Faster touch scrolling
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
