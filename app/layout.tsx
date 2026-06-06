import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['600', '700', '800', '900'],
})

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Royal Taste Restaurant | مطعم رويال تيست',
  description:
    'Royal Taste Restaurant — Grill, Pizza, Burger, Desserts und edle orientalische und westliche Gerichte. Jetzt bestellen oder ganz einfach einen Tisch reservieren.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      dir="ltr"
      className={`${cairo.variable} ${tajawal.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
