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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(greetingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out'
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3')
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.out'
      }, '-=0.2')
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0 -z-10">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0f1e]" />

        {/* Stars layer 1 - large stars */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 15% 90%, white, transparent),
                           radial-gradient(1px 1px at 45% 25%, white, transparent),
                           radial-gradient(2px 2px at 75% 45%, white, transparent),
                           radial-gradient(1px 1px at 35% 55%, white, transparent),
                           radial-gradient(1px 1px at 65% 85%, white, transparent),
                           radial-gradient(1px 1px at 25% 15%, white, transparent)`,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          animation: 'twinkle 4s ease-in-out infinite'
        }} />

        {/* Stars layer 2 - small stars */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(255, 230, 103, 0.8), transparent),
                           radial-gradient(1px 1px at 40% 40%, rgba(255, 255, 255, 0.8), transparent),
                           radial-gradient(1px 1px at 70% 15%, rgba(255, 230, 103, 0.6), transparent),
                           radial-gradient(1px 1px at 25% 60%, rgba(255, 255, 255, 0.7), transparent),
                           radial-gradient(1px 1px at 85% 80%, rgba(255, 230, 103, 0.7), transparent),
                           radial-gradient(1px 1px at 45% 90%, rgba(255, 255, 255, 0.6), transparent),
                           radial-gradient(1px 1px at 95% 45%, rgba(255, 230, 103, 0.8), transparent),
                           radial-gradient(1px 1px at 5% 75%, rgba(255, 255, 255, 0.7), transparent),
                           radial-gradient(1px 1px at 55% 35%, rgba(255, 255, 255, 0.6), transparent),
                           radial-gradient(1px 1px at 18% 48%, rgba(255, 230, 103, 0.7), transparent),
                           radial-gradient(1px 1px at 72% 62%, rgba(255, 255, 255, 0.6), transparent),
                           radial-gradient(1px 1px at 88% 28%, rgba(255, 230, 103, 0.8), transparent),
                           radial-gradient(1px 1px at 38% 72%, rgba(255, 255, 255, 0.7), transparent),
                           radial-gradient(1px 1px at 62% 8%, rgba(255, 230, 103, 0.6), transparent)`,
          backgroundSize: '250% 250%',
          backgroundPosition: '50% 50%',
          animation: 'twinkle 5s ease-in-out infinite reverse'
        }} />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-1 h-1 bg-accent rounded-full top-1/4 left-1/4 animate-float-slow" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-1/3 left-3/4 animate-float-medium" />
          <div className="absolute w-0.5 h-0.5 bg-accent rounded-full top-2/3 left-1/2 animate-float-fast" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-1/3 animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute w-0.5 h-0.5 bg-accent rounded-full top-1/2 left-2/3 animate-float-medium" style={{ animationDelay: '1s' }} />
        </div>

        {/* Subtle orbital glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom w-full">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p ref={greetingRef} className="text-lg md:text-xl text-muted-foreground mb-4">
            Hi! I'm {PERSONAL_INFO.name.split(' ')[0]} 👋
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
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View my work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
