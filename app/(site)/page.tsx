import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'
import { PopularDishes } from '@/components/home/popular-dishes'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularDishes />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
