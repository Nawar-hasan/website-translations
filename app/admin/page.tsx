import {
  ClipboardList,
  CalendarCheck,
  UtensilsCrossed,
  Wallet,
  ArrowUpRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  adminOrders,
  dashboardStats,
} from '@/lib/admin-data'
import { OrderStatusBadge } from '@/components/admin/status-badges'

const stats = [
  {
    label: 'عدد الطلبات',
    value: dashboardStats.orders.toLocaleString('ar-EG'),
    icon: ClipboardList,
    trend: '+12%',
  },
  {
    label: 'عدد الحجوزات',
    value: dashboardStats.reservations.toLocaleString('ar-EG'),
    icon: CalendarCheck,
    trend: '+8%',
  },
  {
    label: 'عدد الوجبات',
    value: dashboardStats.menuItems.toLocaleString('ar-EG'),
    icon: UtensilsCrossed,
    trend: '+3',
  },
  {
    label: 'إجمالي المبيعات',
    value: `${dashboardStats.sales.toLocaleString('ar-EG')} ر.س`,
    icon: Wallet,
    trend: '+18%',
  },
]

export default function AdminDashboardPage() {
  const recentOrders = adminOrders.slice(0, 5)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading text-2xl font-extrabold">نظرة عامة</h2>
        <p className="text-sm text-muted-foreground">
          ملخص أداء المطعم وأحدث الطلبات.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {s.label}
              </CardTitle>
              <span className="flex size-9 items-center justify-center rounded-md bg-gold/10 text-gold">
                <s.icon className="size-5" />
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <span className="font-heading text-2xl font-extrabold">{s.value}</span>
              <Badge variant="secondary" className="w-fit gap-1">
                <ArrowUpRight className="size-3" />
                {s.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">أحدث الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">القيمة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">التاريخ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="font-medium">{o.id}</TableCell>
                  <TableCell>{o.customer}</TableCell>
                  <TableCell>{o.total} ر.س</TableCell>
                  <TableCell>
                    <OrderStatusBadge status={o.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground" dir="ltr">
                    {o.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
