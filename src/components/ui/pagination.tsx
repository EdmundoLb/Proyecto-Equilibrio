import type { ButtonProps } from '@/components/ui/button'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav aria-label="Paginación" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
)

const PaginationContent: React.FC<
  { ref?: React.Ref<HTMLUListElement> } & React.HTMLAttributes<HTMLUListElement>
> = ({ className, ref, ...props }) => (
  <ul className={cn('flex flex-row flex-wrap items-center justify-center gap-1', className)} ref={ref} {...props} />
)

const PaginationItem: React.FC<
  { ref?: React.Ref<HTMLLIElement> } & React.HTMLAttributes<HTMLLIElement>
> = ({ className, ref, ...props }) => <li className={cn('', className)} ref={ref} {...props} />

// Enlaces reales (no botones con router.push): Google puede seguirlos y se pueden abrir en otra pestaña.
// Sin href (primera/última página) se muestra deshabilitado.
type PaginationLinkProps = {
  href?: string
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  Omit<React.ComponentProps<'a'>, 'href'>

const PaginationLink = ({ className, href, isActive, size = 'icon', ...props }: PaginationLinkProps) => {
  const classes = cn(buttonVariants({ size, variant: isActive ? 'outline' : 'ghost' }), className)

  if (!href) return <span aria-disabled className={cn(classes, 'pointer-events-none opacity-50')} {...props} />

  return <Link aria-current={isActive ? 'page' : undefined} className={classes} href={href} {...props} />
}

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Página anterior" className={cn('gap-1 pl-2.5', className)} size="default" {...props}>
    <ChevronLeft aria-hidden className="size-4" />
    <span>Anterior</span>
  </PaginationLink>
)

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Página siguiente" className={cn('gap-1 pr-2.5', className)} size="default" {...props}>
    <span>Siguiente</span>
    <ChevronRight aria-hidden className="size-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span className={cn('flex size-11 items-center justify-center', className)} {...props}>
    <MoreHorizontal aria-hidden className="size-4" />
    <span className="sr-only">Más páginas</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
