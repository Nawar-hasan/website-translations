import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  UtensilsCrossed,
} from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { restaurantInfo } from '@/lib/data'

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/menu', label: 'المنيو' },
  { href: '/order', label: 'الطلب أونلاين' },
  { href: '/reservation', label: 'حجز طاولة' },
  { href: '/contact', label: 'معلومات المطعم' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-gold text-gold-foreground">
              <UtensilsCrossed className="size-5" />
            </span>
            <span className="font-heading text-lg font-extrabold">رويال تيست</span>
          </Link>
          <p className="text-sm leading-relaxed text-sidebar-foreground/70">
            وجهتك الأولى للمشاوي والبيتزا والبرغر والأطباق الشرقية والغربية الفاخرة.
            نقدّم لك تجربة طعام لا تُنسى بأجود المكونات.
          </p>
          <div className="flex items-center gap-3">
            <a href={restaurantInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="فيسبوك" className="flex size-9 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
              <FacebookIcon className="size-4" />
            </a>
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="إنستغرام" className="flex size-9 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
              <InstagramIcon className="size-4" />
            </a>
            <a href={restaurantInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="إكس / تويتر" className="flex size-9 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
              <TwitterIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base font-bold text-gold">روابط سريعة</h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-sidebar-foreground/70 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base font-bold text-gold">تواصل معنا</h3>
          <ul className="flex flex-col gap-3 text-sm text-sidebar-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{restaurantInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <span dir="ltr">{restaurantInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <span dir="ltr">{restaurantInfo.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base font-bold text-gold">أوقات العمل</h3>
          <div className="flex items-start gap-2 text-sm text-sidebar-foreground/70">
            <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>{restaurantInfo.hours}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-sidebar-foreground/60 md:flex-row md:px-6 md:text-right">
          <p>© {new Date().getFullYear()} مطعم رويال تيست. جميع الحقوق محفوظة.</p>
          <Link href="/admin" className="transition-colors hover:text-gold">
            لوحة التحكم
          </Link>
        </div>
      </div>
    </footer>
  )
}
