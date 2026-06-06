// بيانات لوحة التحكم (Mock) — جاهزة للربط مع API

export type OrderStatus = 'new' | 'preparing' | 'delivered' | 'cancelled'

export type AdminOrder = {
  id: string
  customer: string
  phone: string
  items: string[]
  total: number
  status: OrderStatus
  date: string
  time: string
}

export const orderStatusLabels: Record<OrderStatus, string> = {
  new: 'جديد',
  preparing: 'قيد التحضير',
  delivered: 'تم التوصيل',
  cancelled: 'ملغي',
}

export const adminOrders: AdminOrder[] = [
  { id: '#1042', customer: 'أحمد العلي', phone: '0501234567', items: ['مشكل مشاوي ملكي', 'عصير ليمون بالنعناع', 'كنافة بالقشطة'], total: 137, status: 'new', date: '2026-06-06', time: '13:20' },
  { id: '#1041', customer: 'سارة محمد', phone: '0559876543', items: ['بيتزا مارغريتا', 'موكتيل فواكه'], total: 96, status: 'preparing', date: '2026-06-06', time: '12:55' },
  { id: '#1040', customer: 'خالد إبراهيم', phone: '0533344556', items: ['مندي لحم', 'كباب لحم بلدي', 'مازة شرقية مشكّلة'], total: 210, status: 'delivered', date: '2026-06-06', time: '12:10' },
  { id: '#1039', customer: 'منى سعيد', phone: '0561122334', items: ['برغر دجاج مقرمش'], total: 52, status: 'delivered', date: '2026-06-06', time: '11:40' },
  { id: '#1038', customer: 'فهد ناصر', phone: '0544455667', items: ['شيش طاووق', 'عصير ليمون بالنعناع'], total: 78, status: 'cancelled', date: '2026-06-05', time: '22:15' },
  { id: '#1037', customer: 'ليلى حسن', phone: '0577788990', items: ['بيتزا سوبر سوبريم', 'برغر لحم مزدوج', 'كيكة الشوكولاتة البركانية'], total: 164, status: 'delivered', date: '2026-06-05', time: '21:30' },
]

export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled'

export type AdminReservation = {
  id: string
  customer: string
  phone: string
  date: string
  time: string
  guests: number
  status: ReservationStatus
}

export const reservationStatusLabels: Record<ReservationStatus, string> = {
  pending: 'بانتظار التأكيد',
  confirmed: 'مؤكد',
  cancelled: 'ملغي',
}

export const adminReservations: AdminReservation[] = [
  { id: 'R-301', customer: 'عبدالله الزهراني', phone: '0501112233', date: '2026-06-07', time: '20:00', guests: 4, status: 'confirmed' },
  { id: 'R-302', customer: 'نورة القحطاني', phone: '0552223344', date: '2026-06-07', time: '21:30', guests: 2, status: 'pending' },
  { id: 'R-303', customer: 'ماجد العتيبي', phone: '0533334455', date: '2026-06-08', time: '19:00', guests: 6, status: 'confirmed' },
  { id: 'R-304', customer: 'هند الشمري', phone: '0564445566', date: '2026-06-08', time: '22:00', guests: 3, status: 'cancelled' },
]

export const dashboardStats = {
  orders: 128,
  reservations: 42,
  menuItems: 13,
  sales: 18650,
}
