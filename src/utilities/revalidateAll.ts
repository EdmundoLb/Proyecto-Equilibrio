import { revalidatePath, revalidateTag } from 'next/cache'

const globalTags = ['global_header', 'global_footer', 'global_site-settings']

// Invalida toda la caché del sitio (páginas y globals). Solo funciona dentro del servidor de Next.
export const revalidateAll = () => {
  for (const tag of globalTags) revalidateTag(tag, 'max')
  revalidateTag('pages-sitemap', 'max')
  revalidateTag('posts-sitemap', 'max')
  revalidatePath('/', 'layout')
}
