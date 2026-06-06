import type { ReactNode } from 'react'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { CartProvider } from '@/lib/cart-context'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <SiteNavbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </CartProvider>
    </LanguageProvider>
  )
}
