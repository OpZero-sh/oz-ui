'use client'

import { useState } from 'react'

export function MdxTabs({
  items,
}: {
  items: { label: string; content: string }[]
}) {
  const [active, setActive] = useState(0)

  if (!items || items.length === 0) return null

  return (
    <div className="not-prose my-6">
      <div className="flex gap-1 rounded-lg bg-white/5 p-1 border border-white/10">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              active === i
                ? 'bg-[#00F5FF]/10 text-[#00F5FF]'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: items[active].content }} />
      </div>
    </div>
  )
}
