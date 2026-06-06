import { PageHeader } from '@/components/page-header'
import { ReservationForm } from '@/components/reservation-form'

export const metadata = {
  title: 'حجز طاولة | مطعم رويال تيست',
  description: 'احجز طاولتك في مطعم رويال تيست واستمتع بتجربة طعام فاخرة.',
}

export default function ReservationPage() {
  return (
    <>
      <PageHeader page="reservation" />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <ReservationForm />
      </div>
    </>
  )
}
