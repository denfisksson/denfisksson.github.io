import { Statistic } from '@/types/content'
import { cn } from '@/lib/utils'

interface StatCardProps {
  stat: Statistic
  className?: string
}

export default function StatCard({ stat, className }: StatCardProps) {
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
