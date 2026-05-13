import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageSectionProps = {
  children: ReactNode
  className?: string
}

/** Horizontal padding + max width — єдиний контейнер для маркетингових сторінок. */
export function PageSection({ children, className }: PageSectionProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
