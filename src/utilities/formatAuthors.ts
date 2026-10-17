import { Post } from '@/payload-types'

const listFormatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' })

/**
 * Formats an array of populatedAuthors from Posts into a prettified string.
 * @param authors - The populatedAuthors array from a Post.
 * @returns A prettified string of authors.
 * @example
 *
 * [Author1, Author2] becomes 'Author1 y Author2'
 * [Author1, Author2, Author3] becomes 'Author1, Author2 y Author3'
 *
 */
export const formatAuthors = (
  authors: NonNullable<NonNullable<Post['populatedAuthors']>[number]>[],
) => {
  // Ensure we don't have any authors without a name
  const authorNames = authors.map((author) => author.name).filter((name): name is string => Boolean(name))

  return listFormatter.format(authorNames)
}
