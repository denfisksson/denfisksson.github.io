import { Statistic } from '@/types/content'
import { cn } from '@/lib/utils'

interface StatCardProps {
  stat: Statistic
  className?: string
  variant?: 'vertical' | 'horizontal' | 'badge'
}

export default function StatCard({ stat, className, variant = 'vertical' }: StatCardProps) {
  if (variant === 'badge') {
    return (
      <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm', className)}>
        <span className="text-base md:text-lg font-semibold text-foreground">
          {stat.value}
        </span>
        {stat.label && (
          <span className="text-sm md:text-base text-muted-foreground">
            • {stat.label}
          </span>
        )}
      </div>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div className={cn('flex items-baseline gap-3 border-l-2 border-accent/30 pl-4', className)}>
        <div className="text-2xl md:text-3xl font-bold text-foreground min-w-[120px]">
          {stat.value}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          {stat.label}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('text-center space-y-2', className)}>
      <div className="text-4xl md:text-5xl font-bold text-foreground">
        {stat.value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {stat.label}
      </div>
    </div>
  )
}
