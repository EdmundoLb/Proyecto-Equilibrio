import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

// Fondo bg-deep siempre presente: sin imagen de portada el título sigue siendo legible.
export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const authors = populatedAuthors && populatedAuthors.length > 0 ? formatAuthors(populatedAuthors) : ''
  const categoryTitles = (categories || [])
    .map((category) => (typeof category === 'object' && category !== null ? category.title : null))
    .filter(Boolean)

  return (
    <div className="relative isolate flex min-h-[50vh] items-end overflow-hidden bg-deep text-white" data-section="navy">
      {heroImage && typeof heroImage !== 'string' && (
        <>
          <Media fill imgClassName="-z-20 object-cover" priority resource={heroImage} size="100vw" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/20" />
        </>
      )}
      <div className="container relative pb-10 pt-24 lg:grid lg:grid-cols-[1fr_48rem_1fr]">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          {categoryTitles.length > 0 && (
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-on-deep">{categoryTitles.join(' · ')}</p>
          )}

          <h1 className="mb-6 text-balance text-3xl font-extrabold md:text-5xl">{title}</h1>

          <dl className="flex flex-col gap-4 text-white/85 md:flex-row md:gap-16">
            {authors && (
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-white/70">Escrito por</dt>
                <dd>{authors}</dd>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-white/70">Publicado</dt>
                <dd>
                  <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  )
}
