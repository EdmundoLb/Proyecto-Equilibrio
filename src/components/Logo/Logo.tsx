import { cn } from '@/utilities/ui'
import React, { useId } from 'react'

interface Props {
  className?: string
  /** 'dark' para usar sobre fondos oscuros (texto blanco) */
  tone?: 'light' | 'dark'
}

// Logo provisorio redibujado a partir del logo oficial (círculo azul marino con anillo dorado
// y olas en degradé celeste). Reemplazar por el SVG oficial cuando esté disponible.
export const LogoMark: React.FC<{ className?: string }> = ({ className }) => {
  const id = useId()
  const clip = `${id}-clip`
  const wave = `${id}-wave`

  return (
    <svg aria-hidden className={className} viewBox="0 0 64 64">
      <defs>
        <clipPath id={clip}>
          <circle cx="32" cy="32" r="27" />
        </clipPath>
        <linearGradient id={wave} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfe3fb" />
          <stop offset="55%" stopColor="#5aa9e6" />
          <stop offset="100%" stopColor="#1f6fb2" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" fill="#f5b72e" r="31.5" />
      <circle cx="32" cy="32" fill="#0b2f4e" r="29.5" />
      <g clipPath={`url(#${clip})`}>
        <path d="M2 30C14 14 26 16 34 26s20 14 30 2v38H2z" fill={`url(#${wave})`} />
        <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeOpacity=".9" strokeWidth="2.2">
          <path d="M4 36c10-12 20-12 30-3s19 9 28-2" />
          <path d="M6 43c10-10 19-10 28-2s18 8 26-2" />
          <path d="M10 50c9-8 17-8 25-1s15 6 22-2" />
        </g>
        <path d="M2 50c12-6 24 4 34 6s20-2 28-8v18H2z" fill="#0b2f4e" opacity=".85" />
      </g>
    </svg>
  )
}

export const Logo: React.FC<Props> = ({ className, tone = 'light' }) => (
  <span className={cn('inline-flex items-center gap-2.5', className)}>
    <LogoMark className="size-11 shrink-0" />
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          'font-heading text-2xl font-extrabold tracking-tight',
          tone === 'dark' ? 'text-white' : 'text-primary',
        )}
      >
        Equilibrio
      </span>
      <span
        className={cn(
          'mt-1 text-[0.62rem] font-bold uppercase tracking-[0.35em]',
          tone === 'dark' ? 'text-on-deep' : 'text-eyebrow',
        )}
      >
        Recovery
      </span>
    </span>
    <span className="sr-only">Proyecto Equilibrio – inicio</span>
  </span>
)
