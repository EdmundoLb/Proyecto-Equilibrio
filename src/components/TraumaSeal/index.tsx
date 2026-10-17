import { cn } from '@/utilities/ui'
import React, { useId } from 'react'

// Sello "Programa receptivo al trauma" de la infografía, en SVG para que escale nítido.
// Colores del logo (celeste → índigo, borde ámbar); el sello no cambia con el tema a propósito.
export const TraumaSeal: React.FC<{ className?: string }> = ({ className }) => {
  const id = useId()
  const fillId = `seal-fill${id}`
  const arcId = `seal-arc${id}`
  const points = 28
  const outer = 96
  const inner = 88
  const star = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / points - Math.PI / 2
    return `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`
  }).join(' ')

  return (
    <svg
      aria-label="Programa receptivo al trauma"
      className={cn('drop-shadow-md', className)}
      role="img"
      viewBox="0 0 200 200"
    >
      <defs>
        <radialGradient cx="40%" cy="35%" id={fillId} r="75%">
          <stop offset="0%" stopColor="#3d8fd1" />
          <stop offset="55%" stopColor="#1f5f96" />
          <stop offset="100%" stopColor="#0b2f4e" />
        </radialGradient>
        <path d="M 100,100 m -56,0 a 56,56 0 1,1 112,0" id={arcId} />
      </defs>
      <polygon fill={`url(#${fillId})`} stroke="#f5b72e" strokeWidth="3" points={star} />
      <circle cx="100" cy="100" fill="none" r="76" stroke="#ffffff" strokeOpacity=".55" strokeWidth="2" />
      <circle cx="100" cy="100" fill="none" r="70" stroke="#ffffff" strokeOpacity=".25" strokeWidth="1.5" />
      <text fill="#ffffff" fontFamily="var(--font-heading)" fontSize="12.5" fontWeight="800" letterSpacing="1">
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          PROGRAMA RECEPTIVO
        </textPath>
      </text>
      <text
        fill="#ffffff"
        fontFamily="var(--font-heading)"
        fontSize="19"
        fontWeight="900"
        textAnchor="middle"
        x="100"
        y="124"
      >
        AL TRAUMA
      </text>
    </svg>
  )
}
