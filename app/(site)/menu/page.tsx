import { PageHeader } from '@/components/page-header'
import { MenuBrowser } from '@/components/menu-browser'

export const metadata = {
  title: 'المنيو | مطعم رويال تيست',
  description: 'تصفّح قائمة طعام مطعم رويال تيست: مشاوي، بيتزا، برغر، مشروبات وحلويات.',
}

export default function MenuPage() {
  return (
    <>
      <PageHeader page="menu" />
      <MenuBrowser />
    </>
  )
}
