'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCES } from '@/lib/constants'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import FadeIn from '../animations/FadeIn'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const timelineLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineLineRef.current) return

    gsap.from(timelineLineRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      scrollTrigger: {
        trigger: timelineLineRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })
  }, [])

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionTitle>Experience</SectionTitle>
        </FadeIn>

        <div className="relative max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 w-px h-full bg-border">
            <div ref={timelineLineRef} className="w-full h-full bg-accent origin-top" />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-12">
                  {/* Dot Marker */}
                  <div className="absolute left-0 top-2 w-3 h-3 -translate-x-[5px] rounded-full bg-accent ring-4 ring-background" />

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-muted-foreground mt-1">
                        {exp.company} • {exp.duration}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent mt-1.5">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
