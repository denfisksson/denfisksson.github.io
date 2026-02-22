'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import Badge from './Badge'
import { Project } from '@/types/content'
import { cn } from '@/lib/utils'

interface CardProps {
  project: Project
  className?: string
}

export default function Card({ project, className }: CardProps) {
  return (
    <div className={cn('group relative overflow-hidden rounded-lg border border-border bg-muted transition-all hover:border-foreground hover:shadow-lg hover:shadow-accent/10', className)}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-background">
          <span className="text-6xl opacity-20 font-mono">{project.number}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        {/* Project Number & Title */}
        <div>
          <p className="text-sm text-muted-foreground font-mono mb-1">{project.number}</p>
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
