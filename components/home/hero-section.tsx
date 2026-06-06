'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-food.png"
        alt={t.brand.name}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-background/95 via-background/80 to-background/40 rtl:bg-gradient-to-l ltr:bg-gradient-to-r" />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
          <Star className="size-4 fill-gold" />
          {t.hero.badge}
        </span>

        <h1 className="max-w-2xl text-balance font-heading text-4xl font-extrabold leading-tight md:text-6xl">
          {t.hero.titleLead}
          <span className="text-gold"> {t.hero.titleHighlight}</span>
        </h1>

        <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90"
            render={
              <Link href="/order">
                <ShoppingBag data-icon="inline-start" />
                {t.hero.orderNow}
              </Link>
            }
          />
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/20 bg-background/40 backdrop-blur"
            render={
              <Link href="/reservation">
                <CalendarCheck data-icon="inline-start" />
                {t.hero.reserve}
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
