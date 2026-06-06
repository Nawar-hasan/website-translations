'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/restaurant-interior.png"
        alt={t.contact.interiorAlt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/85" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-28">
        <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
          {t.cta.title}
        </h2>
        <p className="text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
          {t.cta.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90"
            render={
              <Link href="/order">
                <ShoppingBag data-icon="inline-start" />
                {t.cta.orderNow}
              </Link>
            }
          />
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/20"
            render={
              <Link href="/reservation">
                <CalendarCheck data-icon="inline-start" />
                {t.cta.reserve}
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
