import { cn } from '@/utilities/ui'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'> & {
  /** Ruta ya resuelta (resultados de búsqueda de páginas o servicios) */
  href?: string
}

// Toda la tarjeta es clicable con un "stretched link": el enlace del título cubre la tarjeta
// con ::after, así funciona igual con mouse, teclado y lector de pantalla.
export const Card: React.FC<{
  className?: string
  doc?: CardPostData
  headingLevel?: 'h2' | 'h3'
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { className, doc, headingLevel: Heading = 'h3', relationTo = 'posts', showCategories, title: titleFromProps } =
    props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const categoryTitles = (categories || [])
    .map((category) => (typeof category === 'object' ? category?.title : null))
    .filter(Boolean)
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = doc?.href || `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border transition-shadow focus-within:ring-2 focus-within:ring-ring hover:shadow-md',
        className,
      )}
    >
      {metaImage && typeof metaImage !== 'string' && (
        <div className="relative aspect-[16/9] overflow-hidden bg-card">
          <Media
            fill
            imgClassName="object-cover"
            resource={metaImage}
            size="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {showCategories && categoryTitles.length > 0 && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-eyebrow">
            {categoryTitles.join(' · ')}
          </p>
        )}
        {titleToUse && (
          <Heading className="text-xl font-extrabold text-primary">
            <Link
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
              href={href}
            >
              {titleToUse}
            </Link>
          </Heading>
        )}
        {description && <p className="mt-2 leading-relaxed text-foreground/80">{sanitizedDescription}</p>}
        <span aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
          Leer más
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  )
}
