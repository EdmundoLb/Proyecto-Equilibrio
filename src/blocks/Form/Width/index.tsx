import { cn } from '@/utilities/ui'
import * as React from 'react'

// Los campos viven en una fila flex-wrap (ver Form/Component): en móvil ocupan todo el ancho
// y desde `sm` respetan el ancho configurado en el admin (50% → dos columnas).
export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  const percent = Number(width) || 100

  return (
    <div
      className={cn('w-full', percent < 100 && 'sm:w-[calc(var(--field-width)-0.75rem)]', className)}
      style={percent < 100 ? ({ '--field-width': `${percent}%` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
