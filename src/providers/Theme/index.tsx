'use client'

import React, { createContext, useCallback, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import { defaultTheme, themeLocalStorageKey } from './shared'
import { themeIsValid } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

const readStoredTheme = (): Theme => {
  try {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    if (themeIsValid(preference)) return preference
  } catch {
    // Almacenamiento bloqueado (modo privado, etc.): se usa el tema por defecto
  }
  return defaultTheme
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Empieza indefinido en servidor y cliente para que la hidratación coincida; el efecto lo completa
  const [theme, setThemeState] = useState<Theme | undefined>(undefined)

  const setTheme = useCallback((themeToSet: Theme | null) => {
    const next = themeToSet ?? defaultTheme
    try {
      if (themeToSet === null) window.localStorage.removeItem(themeLocalStorageKey)
      else window.localStorage.setItem(themeLocalStorageKey, themeToSet)
    } catch {
      // Sin almacenamiento el cambio vale solo para esta visita
    }
    document.documentElement.setAttribute('data-theme', next)
    setThemeState(next)
  }, [])

  useEffect(() => {
    const themeToSet = readStoredTheme()
    document.documentElement.setAttribute('data-theme', themeToSet)
    // localStorage solo existe en el navegador: se lee después de hidratar a propósito
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(themeToSet)
  }, [])

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
