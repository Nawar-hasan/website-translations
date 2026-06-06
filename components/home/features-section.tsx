'use client'

import { Truck, Leaf, BadgePercent, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n/language-context'

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Truck, ...t.features.fastDelivery },
    { icon: Leaf, ...t.features.freshIngredients },
    { icon: BadgePercent, ...t.features.bestPrices },
    { icon: Star, ...t.features.topRated },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} className="border-border/60 text-center">
            <CardContent className="flex flex-col items-center gap-3 pt-6">
              <span className="flex size-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <f.icon className="size-7" />
              </span>
              <h3 className="font-heading text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
