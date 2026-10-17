import type { Metadata, Viewport } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { HOME_TITLE } from '@/utilities/generateMeta'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(inter.variable, nunito.variable, GeistMono.variable)} lang="es" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          className="sr-only z-[60] rounded-xl bg-accent px-5 py-3 font-semibold text-accent-foreground shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#contenido"
        >
          Saltar al contenido
        </a>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          <main className="flex-1 focus:outline-none" id="contenido" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: HOME_TITLE,
    template: '%s | Proyecto Equilibrio',
  },
  description:
    'Tratamiento y recuperación ambulatoria de adicciones en Costa Rica. Programa receptivo al trauma, acompañamiento a familias y atención confidencial.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1724' },
  ],
}
