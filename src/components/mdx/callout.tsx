'use client'

import {
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'

const variantConfig: Record<string, { icon: LucideIcon; border: string; bg: string; iconColor: string }> = {
  info: { icon: Info, border: 'border-[#00F5FF]/30', bg: 'bg-[#00F5FF]/5', iconColor: 'text-[#00F5FF]' },
  warn: { icon: AlertTriangle, border: 'border-yellow-500/30', bg: 'bg-yellow-500/5', iconColor: 'text-yellow-500' },
  error: { icon: AlertCircle, border: 'border-red-500/30', bg: 'bg-red-500/5', iconColor: 'text-red-500' },
  success: { icon: CheckCircle, border: 'border-green-500/30', bg: 'bg-green-500/5', iconColor: 'text-green-500' },
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warn' | 'error' | 'success'
  title?: string
  children: React.ReactNode
}) {
  const config = variantConfig[type] ?? variantConfig.info
  const Icon = config.icon

  return (
    <div className={`not-prose my-6 rounded-xl border ${config.border} ${config.bg} p-4`}>
      <div className="flex gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${config.iconColor}`} />
        <div className="min-w-0">
          {title && (
            <p className="mb-1 font-semibold text-foreground">{title}</p>
          )}
          <div className="text-sm text-muted-foreground leading-relaxed [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
