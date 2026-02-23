'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import Button from '../ui/Button'

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            DL.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                scrollToSection('contact')
                setMobileMenuOpen(false)
              }}
              className="w-full"
            >
              Hire Me
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
