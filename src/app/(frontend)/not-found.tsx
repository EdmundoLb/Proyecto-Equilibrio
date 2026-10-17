import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  robots: { index: false },
  title: 'Página no encontrada',
}

const suggestions = [
  { href: '/programas-ambulatorios', label: 'Programas ambulatorios' },
  { href: '/adicciones', label: 'Adicciones' },
  { href: '/familia', label: 'Apoyo a familias' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
]

export default function NotFound() {
  return (
    <div className="container max-w-3xl py-20 md:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-eyebrow md:text-sm">Error 404</p>
      <h1 className="mt-3 text-balance text-4xl font-extrabold text-primary md:text-5xl">
        No encontramos esta página
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-foreground/80">
        Puede que el enlace haya cambiado. Si busca ayuda, no se preocupe: estamos para orientarle.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" variant="accent">
          <Link href="/contacto">Solicitar orientación</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Ir al inicio</Link>
        </Button>
      </div>

      <h2 className="mt-14 text-lg font-extrabold text-primary">También puede visitar</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {suggestions.map(({ href, label }) => (
          <li key={href}>
            <Link
              className="group flex min-h-11 items-center justify-between rounded-2xl bg-card px-5 py-4 font-semibold text-primary transition-colors hover:bg-secondary"
              href={href}
            >
              {label}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
