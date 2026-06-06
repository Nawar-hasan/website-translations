'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import type { MenuItem } from '@/lib/data'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/i18n/language-context'
import { dishTranslations } from '@/lib/i18n/content'

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart()
  const { t, locale } = useLanguage()

  const tr = dishTranslations[item.id]
  const name = tr?.name[locale] ?? item.name
  const description = tr?.description[locale] ?? item.description

  return (
    <Card className="group overflow-hidden p-0 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.popular && (
          <Badge className="absolute right-3 top-3 bg-gold text-gold-foreground">
            {t.menuCard.popular}
          </Badge>
        )}
        {!item.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <Badge variant="destructive">{t.menuCard.unavailable}</Badge>
          </div>
        )}
      </div>
      <CardContent className="flex flex-col gap-2 px-4 pt-4">
        <h3 className="font-heading text-lg font-bold leading-tight">{name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-4 pb-4">
        <span className="font-heading text-xl font-extrabold text-gold">
          {item.price} {t.menuCard.currency}
        </span>
        <Button
          size="sm"
          disabled={!item.available}
          onClick={() => {
            addItem(item)
            toast.success(t.menuCard.addedToast(name))
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus data-icon="inline-start" />
          {t.menuCard.add}
        </Button>
      </CardFooter>
    </Card>
  )
}
