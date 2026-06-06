// =============================================================
// بيانات المطعم (Mock Data)
// هذه الملفات معدّة لتُستبدل لاحقًا بنداءات API من الـ Backend
// (Node.js / Laravel + MySQL). كل دالة قابلة للتحويل إلى fetch.
// =============================================================

export type Category = {
  id: string
  name: string
  slug: string
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  categorySlug: string
  available: boolean
  popular?: boolean
}

export const categories: Category[] = [
  { id: 'all', name: 'الكل', slug: 'all' },
  { id: 'grills', name: 'مشاوي', slug: 'grills' },
  { id: 'pizza', name: 'بيتزا', slug: 'pizza' },
  { id: 'burger', name: 'برغر', slug: 'burger' },
  { id: 'oriental', name: 'أطباق شرقية', slug: 'oriental' },
  { id: 'drinks', name: 'مشروبات', slug: 'drinks' },
  { id: 'desserts', name: 'حلويات', slug: 'desserts' },
]

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'مشكل مشاوي ملكي',
    description: 'تشكيلة فاخرة من الكباب وشيش طاووق وريش الغنم مع خضار مشوية.',
    price: 85,
    image: '/images/grill-mixed.png',
    categorySlug: 'grills',
    available: true,
    popular: true,
  },
  {
    id: 'm2',
    name: 'كباب لحم بلدي',
    description: 'كباب لحم طازج متبّل بالبهارات الشرقية ومشوي على الفحم.',
    price: 55,
    image: '/images/grill-mixed.png',
    categorySlug: 'grills',
    available: true,
  },
  {
    id: 'm3',
    name: 'شيش طاووق',
    description: 'قطع دجاج متبّلة بالثوم والليمون مشوية بإتقان.',
    price: 48,
    image: '/images/grill-mixed.png',
    categorySlug: 'grills',
    available: true,
  },
  {
    id: 'm4',
    name: 'بيتزا مارغريتا',
    description: 'عجينة إيطالية طازجة مع صلصة الطماطم وجبن الموزاريلا والريحان.',
    price: 42,
    image: '/images/pizza.png',
    categorySlug: 'pizza',
    available: true,
    popular: true,
  },
  {
    id: 'm5',
    name: 'بيتزا سوبر سوبريم',
    description: 'بيتزا غنية باللحوم والخضار والجبن المشكّل على عجينة مقرمشة.',
    price: 58,
    image: '/images/pizza.png',
    categorySlug: 'pizza',
    available: true,
  },
  {
    id: 'm6',
    name: 'برغر لحم مزدوج',
    description: 'قطعتا لحم بقري مشوي مع جبن شيدر ذائب وخضار طازجة وصلصة خاصة.',
    price: 52,
    image: '/images/burger.png',
    categorySlug: 'burger',
    available: true,
    popular: true,
  },
  {
    id: 'm7',
    name: 'برغر دجاج مقرمش',
    description: 'صدر دجاج مقرمش مع خس وطماطم وصلصة الثوم على خبز برييوش.',
    price: 44,
    image: '/images/burger.png',
    categorySlug: 'burger',
    available: true,
  },
  {
    id: 'm8',
    name: 'مازة شرقية مشكّلة',
    description: 'حمص، متبّل، فلافل، وتشكيلة مقبلات شرقية مع خبز طازج.',
    price: 38,
    image: '/images/oriental.png',
    categorySlug: 'oriental',
    available: true,
    popular: true,
  },
  {
    id: 'm9',
    name: 'مندي لحم',
    description: 'أرز بسمتي بالبهارات مع لحم طري مطهو على الطريقة التقليدية.',
    price: 72,
    image: '/images/oriental.png',
    categorySlug: 'oriental',
    available: true,
  },
  {
    id: 'm10',
    name: 'عصير ليمون بالنعناع',
    description: 'عصير ليمون منعش طازج مع أوراق النعناع.',
    price: 14,
    image: '/images/drinks.png',
    categorySlug: 'drinks',
    available: true,
  },
  {
    id: 'm11',
    name: 'موكتيل فواكه',
    description: 'خليط من الفواكه الطازجة المنعشة في كأس أنيق.',
    price: 18,
    image: '/images/drinks.png',
    categorySlug: 'drinks',
    available: true,
  },
  {
    id: 'm12',
    name: 'كيكة الشوكولاتة البركانية',
    description: 'كيكة شوكولاتة دافئة بقلب سائل مع آيس كريم الفانيلا.',
    price: 28,
    image: '/images/dessert.png',
    categorySlug: 'desserts',
    available: true,
    popular: true,
  },
  {
    id: 'm13',
    name: 'كنافة بالقشطة',
    description: 'كنافة شرقية ذهبية محشوة بالقشطة ومزيّنة بالفستق.',
    price: 24,
    image: '/images/dessert.png',
    categorySlug: 'desserts',
    available: true,
  },
]

export type Testimonial = {
  id: string
  name: string
  rating: number
  comment: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'أحمد العلي',
    rating: 5,
    comment: 'أفضل مشاوي تذوقتها على الإطلاق، الخدمة سريعة والطعم خيالي!',
  },
  {
    id: 't2',
    name: 'سارة محمد',
    rating: 5,
    comment: 'أجواء فاخرة ومكونات طازجة، تجربة عشاء لا تُنسى مع العائلة.',
  },
  {
    id: 't3',
    name: 'خالد إبراهيم',
    rating: 4,
    comment: 'البيتزا رائعة والأسعار مناسبة جدًا مقابل الجودة العالية.',
  },
]

export type RestaurantInfo = {
  name: string
  tagline: string
  whatsapp: string
  phone: string
  email: string
  address: string
  hours: string
  social: { facebook: string; instagram: string; twitter: string }
  mapEmbed: string
}

// رقم واتساب افتراضي — يُستبدل من لوحة التحكم لاحقًا
export const restaurantInfo: RestaurantInfo = {
  name: 'مطعم رويال تيست',
  tagline: 'نكهات أصيلة بلمسة عصرية',
  whatsapp: '0000000000',
  phone: '+966 50 000 0000',
  email: 'info@royaltaste.com',
  address: 'شارع الملك فهد، حي العليا، الرياض، المملكة العربية السعودية',
  hours: 'يوميًا من 12:00 ظهرًا حتى 1:00 صباحًا',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.99!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2s!4v1700000000000',
}
