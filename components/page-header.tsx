'use client'

import { useLanguage } from '@/lib/i18n/language-context'

type PageKey = 'menu' | 'order' | 'reservation' | 'contact'

export function PageHeader({ page }: { page: PageKey }) {
  const { t } = useLanguage()

  const pageData = t.pages?.[page] ?? {
    title: '',
    subtitle: '',
  }

  const { title, subtitle } = pageData

  return (
    <section className="border-b border-border/60 bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-16">
        <h1 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-sidebar-foreground/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
