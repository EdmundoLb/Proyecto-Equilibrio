import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

// El tipo se comunica con ícono y rol, no solo con el color
const variants = {
  info: { className: 'bg-card', icon: Info, role: 'note' },
  error: { className: 'bg-error', icon: CircleAlert, role: 'alert' },
  success: { className: 'bg-success', icon: CircleCheck, role: 'status' },
  warning: { className: 'bg-warning', icon: TriangleAlert, role: 'note' },
} as const

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  const variant = variants[style || 'info'] || variants.info
  const Icon = variant.icon

  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div className={cn('flex items-start gap-3 rounded-2xl px-6 py-4', variant.className)} role={variant.role}>
        <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
