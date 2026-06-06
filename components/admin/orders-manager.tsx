'use client'

import { useState } from 'react'
import {
  adminOrders as initialOrders,
  orderStatusLabels,
  type OrderStatus,
} from '@/lib/admin-data'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'
import { OrderStatusBadge } from '@/components/admin/status-badges'
import { toast } from 'sonner'

const statusFilters: { value: OrderStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'الكل' },
  { value: 'new', label: 'جديد' },
  { value: 'preparing', label: 'قيد التحضير' },
  { value: 'delivered', label: 'تم التوصيل' },
  { value: 'cancelled', label: 'ملغي' },
]

export function OrdersManager() {
  const [orders, setOrders] = useState(initialOrders)
  const [filter, setFilter] = useState<OrderStatus | 'all'>('all')

  const filtered =
    filter === 'all' ? orders : orders.filter((o) => o.status === filter)

  function updateStatus(id: string, status: OrderStatus) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o)),
    )
    toast.success(`تم تحديث حالة الطلب ${id}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          إدارة الطلبات
        </h1>
        <p className="text-sm text-muted-foreground">
          متابعة وتحديث حالة طلبات العملاء
        </p>
      </div>

      <ToggleGroup
        value={[filter]}
        onValueChange={(v) => v[0] && setFilter(v[0] as OrderStatus | 'all')}
        variant="outline"
        className="flex-wrap justify-start"
      >
        {statusFilters.map((s) => (
          <ToggleGroupItem key={s.value} value={s.value}>
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">
            الطلبات ({filtered.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">رقم الطلب</TableHead>
                  <TableHead className="text-right">العميل</TableHead>
                  <TableHead className="text-right">الأصناف</TableHead>
                  <TableHead className="text-right">الإجمالي</TableHead>
                  <TableHead className="text-right">الوقت</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">تغيير الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium text-foreground">
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-foreground">{order.customer}</span>
                        <span className="text-xs text-muted-foreground">
                          {order.phone}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-48 text-sm text-muted-foreground">
                      {order.items.join('، ')}
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {order.total} ر.س
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {order.time}
                    </TableCell>
                    <TableCell>
                      <OrderStatusBadge status={order.status} />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={order.status}
                        onValueChange={(v) =>
                          updateStatus(order.id, v as OrderStatus)
                        }
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue>
                            {(value: OrderStatus) => orderStatusLabels[value]}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {(
                              Object.keys(orderStatusLabels) as OrderStatus[]
                            ).map((s) => (
                              <SelectItem key={s} value={s}>
                                {orderStatusLabels[s]}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
