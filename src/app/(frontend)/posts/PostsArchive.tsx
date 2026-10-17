import type { PaginatedDocs } from 'payload'

import { CollectionArchive } from '@/components/CollectionArchive'
import { CardPostData } from '@/components/Card'
import { CMSLink } from '@/components/Link'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { BookOpen } from 'lucide-react'
import React from 'react'

export const POSTS_PER_PAGE = 12

/** Listado de Recursos (posts), compartido por /posts y /posts/page/[n] */
export const PostsArchive: React.FC<{ posts: PaginatedDocs<CardPostData> }> = ({ posts }) => (
  <div className="py-16 md:py-24">
    <div className="container mb-12 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-eyebrow md:text-sm">Recursos</p>
      <h1 className="mt-3 text-4xl font-extrabold text-primary md:text-5xl">Artículos y guías</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Información clara sobre adicciones, recuperación y cómo acompañar a un ser querido.
      </p>
    </div>

    {posts.totalDocs > 0 ? (
      <>
        <div className="container mb-8">
          <PageRange currentPage={posts.page} limit={POSTS_PER_PAGE} totalDocs={posts.totalDocs} />
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {posts.page && posts.totalPages > 1 && <Pagination page={posts.page} totalPages={posts.totalPages} />}
        </div>
      </>
    ) : (
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 text-center md:p-12">
          <BookOpen aria-hidden className="mx-auto size-12 text-primary" />
          <h2 className="mt-5 text-2xl font-extrabold text-primary">Muy pronto publicaremos artículos</h2>
          <p className="mt-3 text-foreground/80">
            Mientras tanto, puede revisar las preguntas frecuentes o escribirnos directamente.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CMSLink appearance="accent" label="Solicitar orientación" type="custom" url="/contacto" />
            <CMSLink appearance="outline" label="Preguntas frecuentes" type="custom" url="/preguntas-frecuentes" />
          </div>
        </div>
      </div>
    )}
  </div>
)
