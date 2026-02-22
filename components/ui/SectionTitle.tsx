import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  className?: string
}

export default function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
