'use client'

import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex justify-start md:justify-end">
            <button
              onClick={() => scrollToSection('home')}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
