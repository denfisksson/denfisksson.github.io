'use client'

import { motion } from 'framer-motion'
import { TECH_STACK } from '@/lib/constants'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import FadeIn from '../animations/FadeIn'

export default function TechStack() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="tech-stack" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionTitle>Tech Stack</SectionTitle>
        </FadeIn>

        <div className="space-y-12">
          {TECH_STACK.map((category, categoryIndex) => (
            <FadeIn key={category.title} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {category.items.map((tech) => (
                    <motion.div key={tech.name} variants={item}>
                      <Badge variant="outline" className="w-full justify-center py-3">
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
