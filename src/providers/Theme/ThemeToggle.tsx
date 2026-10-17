'use client'

import { Moon, Sun } from 'lucide-react'
import React from 'react'

import { cn } from '@/utilities/ui'

import { useTheme } from '.'

type Props = {
  className?: string
  /** Muestra el texto "Modo oscuro/claro" junto al ícono (menú móvil, pie de página) */
  withLabel?: boolean
}

export const ThemeToggle: React.FC<Props> = ({ className, withLabel }) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = 'Cambiar entre modo claro y oscuro'

  return (
    <button
      aria-label={withLabel ? undefined : label}
      aria-pressed={isDark}
      className={cn(
        'inline-flex items-center gap-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring',
        withLabel ? 'px-2 py-3' : 'size-10 justify-center',
        className,
      )}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={label}
      type="button"
    >
      {/* Ícono y texto se eligen por CSS (data-theme ya está puesto antes de pintar): sin parpadeo */}
      <Moon aria-hidden className="size-5 dark:hidden" />
      <Sun aria-hidden className="hidden size-5 dark:block" />
      {withLabel && (
        <>
          <span className="dark:hidden">Modo oscuro</span>
          <span className="hidden dark:inline">Modo claro</span>
        </>
      )}
    </button>
  )
}
