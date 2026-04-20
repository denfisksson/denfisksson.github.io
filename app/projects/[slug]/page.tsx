import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Clock } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

// Generate static params for all projects
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Daniel López`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const showComingSoon = !project.hasDetailPage

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="section-padding pt-32 pb-12">
        <div className="container-custom">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <div className="section-padding py-0">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-sm text-muted-foreground font-mono mb-4">{project.number}</p>
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button variant="default" size="lg" href={project.liveUrl} target="_blank">
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" href={project.githubUrl} target="_blank">
                  <Github size={20} className="mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="section-padding">
          <div className="container-custom">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Details or Coming Soon */}
      <div className="section-padding" style={{ backgroundColor: '#0a0f1e' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {showComingSoon ? (
              /* Coming Soon Message */
              <div className="text-center py-24">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                  <Clock size={40} className="text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Case Study Coming Soon
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm currently writing a detailed case study for this project. Check back soon to learn more about the challenges, solutions, and impact.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {project.liveUrl && (
                    <Button variant="default" size="lg" href={project.liveUrl} target="_blank">
                      <ExternalLink size={20} className="mr-2" />
                      Try Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="lg" href={project.githubUrl} target="_blank">
                      <Github size={20} className="mr-2" />
                      View Source Code
                    </Button>
                  )}
                  <Button variant="outline" size="lg" href="/#projects">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                  </Button>
                </div>
              </div>
            ) : (
              /* Detailed Case Study Content */
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-8">
                  This is where you can write detailed information about your project.
                  Add sections like:
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">The Challenge</h3>
                <p className="text-muted-foreground mb-8">
                  Describe the problem you were solving, the context, and why this project was important.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">The Solution</h3>
                <p className="text-muted-foreground mb-8">
                  Explain your approach, key decisions, and how you implemented the solution.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">Key Features</h3>
                <ul className="text-muted-foreground mb-8 space-y-2">
                  <li>Feature 1: Description</li>
                  <li>Feature 2: Description</li>
                  <li>Feature 3: Description</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">Results & Impact</h3>
                <p className="text-muted-foreground mb-8">
                  Share metrics, outcomes, learnings, and the impact of the project.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
