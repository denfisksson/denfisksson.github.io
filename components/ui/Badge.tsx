import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'outline', className }: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200'

  const variants = {
    default: 'bg-muted text-foreground hover:-translate-y-1',
    outline: 'border border-border text-muted-foreground hover:text-foreground hover:border-foreground hover:-translate-y-1'
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  )
}
