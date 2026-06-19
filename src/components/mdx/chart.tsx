'use client'

import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const COLORS = ['#00F5FF', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899']

type ChartDatum = { label: string; value: number; [key: string]: string | number }

export function Chart({
  type = 'bar',
  data,
  height = 300,
  xKey = 'label',
  yKey = 'value',
}: {
  type?: 'bar' | 'line' | 'pie' | 'area'
  data: ChartDatum[]
  height?: number
  xKey?: string
  yKey?: string
}) {
  if (!data || data.length === 0) return null

  const common = {
    data,
    margin: { top: 8, right: 8, bottom: 8, left: 8 },
  }

  return (
    <div className="not-prose my-6 rounded-xl border border-white/10 bg-white/5 p-4">
      <ResponsiveContainer width="100%" height={height}>
        {type === 'bar' ? (
          <BarChart {...common}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey={xKey} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
              labelStyle={{ color: '#F8FAFC' }}
            />
            <Bar dataKey={yKey} fill="#00F5FF" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : type === 'line' ? (
          <LineChart {...common}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey={xKey} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
              labelStyle={{ color: '#F8FAFC' }}
            />
            <Line type="monotone" dataKey={yKey} stroke="#00F5FF" strokeWidth={2} dot={{ fill: '#00F5FF' }} />
          </LineChart>
        ) : type === 'area' ? (
          <AreaChart {...common}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey={xKey} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
              labelStyle={{ color: '#F8FAFC' }}
            />
            <Area type="monotone" dataKey={yKey} stroke="#00F5FF" fill="#00F5FF" fillOpacity={0.1} />
          </AreaChart>
        ) : (
          <PieChart>
            <Tooltip
              contentStyle={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
              labelStyle={{ color: '#F8FAFC' }}
            />
            <Legend />
            <Pie data={data} dataKey={yKey} nameKey={xKey} cx="50%" cy="50%" outerRadius={100} label>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
