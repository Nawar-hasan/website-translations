import { PageHeader } from '@/components/page-header'
import { OrderClient } from '@/components/order-client'

export const metadata = {
  title: 'الطلب أونلاين | مطعم رويال تيست',
  description: 'اطلب وجباتك المفضلة أونلاين من مطعم رويال تيست مع توصيل سريع.',
}

export default function OrderPage() {
  return (
    <>
      <PageHeader page="order" />
      <OrderClient />
    </>
  )
}
