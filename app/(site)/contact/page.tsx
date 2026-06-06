import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { restaurantInfo } from '@/lib/data'

export const metadata = {
  title: 'معلومات المطعم | مطعم رويال تيست',
  description: 'تعرّف على مطعم رويال تيست: العنوان، أوقات العمل، وسائل التواصل والموقع.',
}

const infoCards = [
  { icon: MapPin, title: 'العنوان', value: restaurantInfo.address },
  { icon: Phone, title: 'الهاتف', value: restaurantInfo.phone, ltr: true },
  { icon: Mail, title: 'البريد الإلكتروني', value: restaurantInfo.email, ltr: true },
  { icon: Clock, title: 'أوقات العمل', value: restaurantInfo.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader page="contact" />

      {/* قصة المطعم */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/restaurant-interior.png"
            alt="أجواء مطعم رويال تيست"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            قصتنا
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold">
            شغفٌ بالطعام منذ التأسيس
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            انطلق مطعم رويال تيست من حلم بتقديم تجربة طعام استثنائية تجمع بين
            أصالة النكهات الشرقية وإبداع المطبخ الغربي. نختار أجود المكونات
            الطازجة يوميًا، ويعمل لدينا نخبة من أمهر الطهاة لإعداد أطباق تسرّ
            العين قبل الحنك.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            نؤمن بأن الجودة لا تقبل المساومة، ولهذا حرصنا على أن يكون كل طبق
            نقدّمه تحفة من النكهات في أجواء راقية تليق بذوقك الرفيع.
          </p>
        </div>
      </section>

      {/* بطاقات المعلومات */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c) => (
              <Card key={c.title} className="border-border/60">
                <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <c.icon className="size-6" />
                  </span>
                  <h3 className="font-heading text-base font-bold">{c.title}</h3>
                  <p
                    className="text-sm leading-relaxed text-muted-foreground"
                    dir={c.ltr ? 'ltr' : undefined}
                  >
                    {c.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* روابط السوشيال ميديا */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <h3 className="font-heading text-lg font-bold">تابعنا على</h3>
            <div className="flex items-center gap-3">
              <a href={restaurantInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="فيسبوك" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <FacebookIcon className="size-5" />
              </a>
              <a href={restaurantInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="إنستغرام" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <InstagramIcon className="size-5" />
              </a>
              <a href={restaurantInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="إكس / تويتر" className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground">
                <TwitterIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* خريطة جوجل */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="mb-6 text-center font-heading text-2xl font-extrabold">
          موقعنا على الخريطة
        </h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            src={restaurantInfo.mapEmbed}
            title="موقع المطعم على خريطة جوجل"
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
