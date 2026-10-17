import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { POSTS_PER_PAGE, PostsArchive } from './PostsArchive'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: POSTS_PER_PAGE,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return <PostsArchive posts={posts} />
}

export function generateMetadata(): Metadata {
  return {
    alternates: { canonical: '/posts' },
    description: 'Artículos y guías sobre adicciones, recuperación y acompañamiento familiar.',
    title: 'Recursos',
  }
}
