'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import FadeIn from '../animations/FadeIn'

export default function Projects() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionTitle subtitle="A selection of projects I've worked on recently">
            Featured Projects
          </SectionTitle>
        </FadeIn>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
