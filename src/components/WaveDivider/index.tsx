import { cn } from '@/utilities/ui'
import React from 'react'

// Ola de la marca. `fillClassName` define el color de la ola sólida (debe coincidir con el
// fondo de la sección que continúa debajo o encima).
export const WaveDivider: React.FC<{
  className?: string
  fillClassName?: string
  flip?: boolean
  layered?: boolean
}> = ({ className, fillClassName = 'fill-background', flip, layered = true }) => (
  <svg
    aria-hidden
    className={cn('pointer-events-none block w-full', flip && 'rotate-180', className)}
    preserveAspectRatio="none"
    viewBox="0 0 1440 120"
  >
    {layered && (
      <>
        <path
          className="fill-sage"
          d="M0 40c160-40 320-40 480 0s320 40 480 0 320-40 480 0v80H0z"
          opacity=".12"
        />
        <path
          className="fill-sage"
          d="M0 70c160-35 320-35 480 0s320 35 480 0 320-35 480 0v50H0z"
          opacity=".18"
        />
      </>
    )}
    <path className={fillClassName} d="M0 100c240-28 480-28 720 0s480 28 720 0v20H0z" />
  </svg>
)
