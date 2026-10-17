import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  /** 'page' marca el enlace de la página actual (menú) */
  ariaCurrent?: 'page'
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

/** URL final de un enlace del CMS (referencia a página/post o URL personalizada) */
export const cmsLinkHref = ({
  type,
  reference,
  url,
}: Pick<CMSLinkType, 'type' | 'reference' | 'url'>): string | null | undefined =>
  type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
    ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${reference.value.slug}`
    : url

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    ariaCurrent,
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  const href = cmsLinkHref({ type, reference, url })

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}
  const newTabNotice = newTab ? <span className="sr-only"> (se abre en una pestaña nueva)</span> : null

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link aria-current={ariaCurrent} className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
        {newTabNotice}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link aria-current={ariaCurrent} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
        {newTabNotice}
      </Link>
    </Button>
  )
}
