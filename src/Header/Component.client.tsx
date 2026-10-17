'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, SearchIcon, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import type { Header } from '@/payload-types'

import { CMSLink, cmsLinkHref } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeToggle } from '@/providers/Theme/ThemeToggle'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const pathname = usePathname()
  // El menú móvil queda abierto solo en la ruta donde se abrió: al navegar se cierra solo
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navItems = data?.navItems || []
  const cta = data?.cta

  const isCurrent = (link: (typeof navItems)[number]['link']) => {
    const href = cmsLinkHref(link)
    return Boolean(href && (pathname === href || pathname.startsWith(`${href}/`)))
  }

  // Escape cierra el menú móvil y devuelve el foco al botón que lo abrió
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenPath(null)
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link className="rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring" href="/">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 xl:flex">
          {navItems.map(({ link }, i) => (
            <CMSLink
              {...link}
              ariaCurrent={isCurrent(link) ? 'page' : undefined}
              className="rounded-sm py-2 font-semibold text-foreground/75 decoration-sage decoration-2 underline-offset-8 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring aria-[current=page]:text-primary aria-[current=page]:underline"
              key={i}
            />
          ))}
          <div className="flex items-center gap-1 text-foreground/70">
            <Link
              aria-label="Buscar"
              className="inline-flex size-10 items-center justify-center rounded-full hover:bg-card hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
              href="/search"
            >
              <SearchIcon aria-hidden className="size-5" />
            </Link>
            <ThemeToggle className="hover:bg-card hover:text-primary" />
          </div>
          {cta?.label && <CMSLink {...cta} appearance="accent" />}
        </nav>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="inline-flex size-11 items-center justify-center rounded-xl text-primary hover:bg-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring xl:hidden"
          onClick={() => setOpenPath(open ? null : pathname)}
          ref={menuButtonRef}
          type="button"
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Principal (móvil)"
          className="border-t border-border bg-background xl:hidden"
          id="mobile-menu"
        >
          <ul className="container flex flex-col py-4">
            {navItems.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  {...link}
                  ariaCurrent={isCurrent(link) ? 'page' : undefined}
                  className="block rounded-xl border-l-4 border-transparent px-3 py-3 text-lg font-semibold text-foreground hover:bg-card aria-[current=page]:border-sage aria-[current=page]:bg-card aria-[current=page]:text-primary"
                />
              </li>
            ))}
            <li>
              <Link
                className="flex items-center gap-2 rounded-xl border-l-4 border-transparent px-3 py-3 text-lg font-semibold text-foreground hover:bg-card"
                href="/search"
              >
                <SearchIcon aria-hidden className="size-5" />
                Buscar
              </Link>
            </li>
            <li>
              <ThemeToggle
                className="w-full rounded-xl border-l-4 border-transparent px-3 text-lg font-semibold text-foreground hover:bg-card"
                withLabel
              />
            </li>
            {cta?.label && (
              <li className="mt-3">
                <CMSLink {...cta} appearance="accent" className="w-full" size="lg" />
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
