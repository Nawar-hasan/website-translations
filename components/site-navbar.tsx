'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, ShoppingBag, UtensilsCrossed, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/i18n/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export function SiteNavbar() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/order', label: t.nav.order },
    { href: '/reservation', label: t.nav.reservation },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-gold text-gold-foreground">
            <UtensilsCrossed className="size-5" />
          </span>
          <span className="font-heading text-lg font-extrabold leading-tight">
            {t.brand.short}
            <span className="block text-[10px] font-medium text-muted-foreground">
              ROYAL TASTE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-foreground/80',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            render={
              <Link href="/order" aria-label={t.nav.cart}>
                <ShoppingBag className="size-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -right-1 -top-1 size-5 justify-center rounded-full bg-gold p-0 text-[10px] text-gold-foreground">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            }
          />

          <Button
            className="hidden bg-gold text-gold-foreground hover:bg-gold/90 sm:inline-flex"
            render={<Link href="/order">{t.nav.orderNow}</Link>}
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t.nav.menuTitle}>
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">{t.nav.menuTitle}</SheetTitle>
              <div className="mt-2 flex items-center justify-between px-1">
                <span className="font-heading text-lg font-extrabold">{t.nav.menuTitle}</span>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="X">
                  <X className="size-5" />
                </Button>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent',
                      pathname === link.href
                        ? 'bg-accent text-gold'
                        : 'text-foreground/80',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent"
                >
                  {t.nav.admin}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
