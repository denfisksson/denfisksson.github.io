'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PERSONAL_INFO, HERO_STATS } from '@/lib/constants'
import StatCard from '../ui/StatCard'
import Button from '../ui/Button'
import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  const greetingRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(greetingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out'
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      })
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      })
      .from(buttonsRef.current?.children || [], {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom w-full">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p ref={greetingRef} className="text-lg md:text-xl text-muted-foreground mb-4">
            Hi! I'm {PERSONAL_INFO.name.split(' ')[0]}. 👋
          </p>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-12 leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {PERSONAL_INFO.role.split(' ').map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h1>

          {/* Statistics */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 md:gap-12 mb-12 max-w-2xl">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
