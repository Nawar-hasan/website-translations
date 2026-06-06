'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MenuCard } from '@/components/menu-card'
import { menuItems } from '@/lib/data'
import { useLanguage } from '@/lib/i18n/language-context'

export function PopularDishes() {
  const { t, dir } = useLanguage()
  const popular = menuItems.filter((i) => i.popular).slice(0, 6)
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.popular.eyebrow}
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
            {t.popular.title}
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            {t.popular.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            render={
              <Link href="/menu">
                {t.popular.browseFullMenu}
                <Arrow data-icon="inline-end" />
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
