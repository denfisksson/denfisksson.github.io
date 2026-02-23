import { PERSONAL_INFO } from '@/lib/constants'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'

export default function About() {
  const highlights = [
    '3+ years of professional frontend development experience',
    'Specialized in React, Next.js, and TypeScript',
    'Strong focus on performance optimization and accessibility',
    'Passionate about creating exceptional user experiences'
  ]

  return (
    <section id="about" className="relative section-padding overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #0a0f1e 0%, #0a0a0a 100%)'
    }}>
      <div className="container-custom">
        <FadeIn>
          <SectionTitle>About Me</SectionTitle>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Location:</span> {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="relative aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-transparent border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-lg text-foreground font-semibold">Building the web,</p>
                <p className="text-lg text-foreground font-semibold">one component at a time</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
