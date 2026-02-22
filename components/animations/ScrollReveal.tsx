'use client'

import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight'
  duration?: number
  delay?: number
  start?: string
  end?: string
}

export default function ScrollReveal({
  children,
  className,
  animation = 'fade',
  duration = 0.8,
  delay = 0,
  start = 'top 80%',
  end = 'bottom 20%'
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const animationProps: gsap.TweenVars = {
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        toggleActions: 'play none none reverse'
      },
      duration,
      delay,
      ease: 'power3.out'
    }

    switch (animation) {
      case 'fade':
        gsap.from(ref.current, { ...animationProps, opacity: 0 })
        break
      case 'slideUp':
        gsap.from(ref.current, { ...animationProps, y: 30, opacity: 0 })
        break
      case 'slideLeft':
        gsap.from(ref.current, { ...animationProps, x: 30, opacity: 0 })
        break
      case 'slideRight':
        gsap.from(ref.current, { ...animationProps, x: -30, opacity: 0 })
        break
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, duration, delay, start, end])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
