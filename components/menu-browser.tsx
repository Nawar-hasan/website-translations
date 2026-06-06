'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MenuCard } from '@/components/menu-card'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { categories, menuItems } from '@/lib/data'
import { categoryNames, dishTranslations } from '@/lib/i18n/content'
import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'

export function MenuBrowser() {
  const { t, locale } = useLanguage()
  const [activeCat, setActiveCat] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuItems.filter((item) => {
      const matchesCat = activeCat === 'all' || item.categorySlug === activeCat
      const tr = dishTranslations[item.id]
      const name = (tr?.name[locale] ?? item.name).toLowerCase()
      const description = (
        tr?.description[locale] ?? item.description
      ).toLowerCase()
      const matchesQuery =
        q === '' || name.includes(q) || description.includes(q)
      return matchesCat && matchesQuery
    })
  }, [activeCat, query, locale])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-8 flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground rtl:right-3 ltr:right-auto ltr:left-3" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.menuBrowser.searchPlaceholder}
            className="pr-10 rtl:pr-10 rtl:pl-3 ltr:pl-10 ltr:pr-3"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              variant={activeCat === cat.slug ? 'default' : 'outline'}
              onClick={() => setActiveCat(cat.slug)}
              className={cn(
                activeCat === cat.slug &&
                  'bg-gold text-gold-foreground hover:bg-gold/90',
              )}
            >
              {categoryNames[cat.slug]?.[locale] ?? cat.name}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Empty className="py-16">
          <EmptyHeader>
            <EmptyTitle>{t.menuBrowser.noResultsTitle}</EmptyTitle>
            <EmptyDescription>{t.menuBrowser.noResultsDesc}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
