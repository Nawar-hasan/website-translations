'use client'

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { testimonials } from '@/lib/data'
import { testimonialTranslations } from '@/lib/i18n/content'
import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const { t, locale } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          {t.testimonials.eyebrow}
        </span>
        <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
          {t.testimonials.title}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => {
          const tr = testimonialTranslations[item.id]
          const name = tr?.name[locale] ?? item.name
          const comment = tr?.comment[locale] ?? item.comment
          return (
            <Card key={item.id} className="relative border-border/60">
              <CardContent className="flex flex-col gap-4 pt-6">
                <Quote className="size-8 text-gold/40" />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'size-4',
                        i < item.rating
                          ? 'fill-gold text-gold'
                          : 'text-muted-foreground/30',
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {comment}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-gold/15 text-gold">
                      {name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-heading text-sm font-bold">{name}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
