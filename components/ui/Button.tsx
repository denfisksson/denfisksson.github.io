import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  asChild?: boolean
  href?: string
}

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    default: 'bg-accent text-white hover:bg-accent-hover',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
    ghost: 'text-foreground hover:bg-muted'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  }

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
