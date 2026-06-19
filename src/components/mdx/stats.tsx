'use client'

import { TrendingUp, TrendingDown, Minus, type LucideIcon } from 'lucide-react'

export function Stats({
  items,
}: {
  items: { label: string; value: string; change?: string; icon?: string }[]
}) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StatCard key={item.label} {...item} />
      ))}
    </div>
  )
}

function StatCard({
  label,
  value,
  change,
}: {
  label: string
  value: string
  change?: string
}) {
  let TrendIcon: LucideIcon = Minus
  let trendColor = 'text-muted-foreground'

  if (change) {
    const num = parseFloat(change)
    if (num > 0) {
      TrendIcon = TrendingUp
      trendColor = 'text-green-500'
    } else if (num < 0) {
      TrendIcon = TrendingDown
      trendColor = 'text-red-500'
    }
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-2xl font-black tracking-tight text-foreground">
        {value}
      </p>
      {change && (
        <div className={`mt-1 flex items-center gap-1 text-xs font-medium ${trendColor}`}>
          <TrendIcon className="h-3 w-3" />
          <span>{change}</span>
        </div>
      )}
    </div>
  )
}
