'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { restaurantInfo } from '@/lib/data'
import { useLanguage } from '@/lib/i18n/language-context'
import { restaurantInfoTranslations } from '@/lib/i18n/content'

export function ContactContent() {
  const { locale, t } = useLanguage()
  const address = restaurantInfoTranslations.address[locale]
  const hours = restaurantInfoTranslations.hours[locale]

  const infoCards = [
    { icon: MapPin, title: t.contact.address, value: address },
    { icon: Phone, title: t.contact.phone, value: restaurantInfo.phone, ltr: true },
    { icon: Mail, title: t.contact.email, value: restaurantInfo.email, ltr: true },
    { icon: Clock, title: t.contact.hours, value: hours },
  ]

  return (
    <>
      <PageHeader page="contact" />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/restaurant-interior.png"
            alt={t.contact.interiorAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.contact.storyEyebrow}
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold">
            {t.contact.storyTitle}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{t.contact.storyP1}</p>
          <p className="leading-relaxed text-muted-foreground">{t.contact.storyP2}</p>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <Card key={card.title} className="border-border/60">
                <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <card.icon className="size-6" />
                  </span>
                  <h3 className="font-heading text-base font-bold">{card.title}</h3>
                  <p
                    className="text-sm leading-relaxed text-muted-foreground"
                    dir={card.ltr ? 'ltr' : undefined}
                  >
                    {card.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <h3 className="font-heading text-lg font-bold">{t.contact.followUs}</h3>
            <div className="flex items-center gap-3">
              <a href={restaurantInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <FacebookIcon className="size-5" />
              </a>
              <a href={restaurantInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <InstagramIcon className="size-5" />
              </a>
              <a href={restaurantInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <TwitterIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="mb-6 text-center font-heading text-2xl font-extrabold">
          {t.contact.mapTitle}
        </h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            src={restaurantInfo.mapEmbed}
            title={t.contact.mapTitle}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  )
}
