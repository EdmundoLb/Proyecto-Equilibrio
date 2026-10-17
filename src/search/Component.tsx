'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SearchIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'

export const Search: React.FC<{ initialQuery?: string }> = ({ initialQuery = '' }) => {
  const [value, setValue] = useState(initialQuery)
  const router = useRouter()

  const debouncedValue = useDebounce(value.trim(), 350)

  useEffect(() => {
    if (debouncedValue === initialQuery.trim()) return
    // replace (no push): escribir no debe llenar el historial del botón "atrás"
    router.replace(`/search${debouncedValue ? `?q=${encodeURIComponent(debouncedValue)}` : ''}`, {
      scroll: false,
    })
  }, [debouncedValue, initialQuery, router])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      role="search"
    >
      <Label className="sr-only" htmlFor="search">
        Buscar en el sitio
      </Label>
      <div className="relative">
        <SearchIcon aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoComplete="off"
          className="h-14 rounded-full pl-12 text-lg"
          id="search"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="Ej.: familia, alcohol, terapia de grupo…"
          type="search"
          value={value}
        />
      </div>
      <button className="sr-only" type="submit">
        Buscar
      </button>
    </form>
  )
}
