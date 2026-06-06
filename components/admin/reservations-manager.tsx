'use client'

import { useState } from 'react'
import {
  adminReservations as initialRes,
  type ReservationStatus,
} from '@/lib/admin-data'
import { Button } from '@/components/ui/button'
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
import { ReservationStatusBadge } from '@/components/admin/status-badges'
import { Check, X, Users } from 'lucide-react'
import { toast } from 'sonner'

export function ReservationsManager() {
  const [reservations, setReservations] = useState(initialRes)

  function setStatus(id: string, status: ReservationStatus) {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    )
    toast.success(
      status === 'confirmed' ? 'تم تأكيد الحجز' : 'تم إلغاء الحجز',
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          إدارة الحجوزات
        </h1>
        <p className="text-sm text-muted-foreground">
          مراجعة طلبات حجز الطاولات وتأكيدها
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">
            الحجوزات ({reservations.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">العميل</TableHead>
                  <TableHead className="text-right">الهاتف</TableHead>
                  <TableHead className="text-right">التاريخ</TableHead>
                  <TableHead className="text-right">الوقت</TableHead>
                  <TableHead className="text-right">الأشخاص</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium text-foreground">
                      {r.customer}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {r.phone}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {r.date}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {r.time}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1 text-foreground">
                        <Users className="size-4 text-muted-foreground" />
                        {r.guests}
                      </span>
                    </TableCell>
                    <TableCell>
                      <ReservationStatusBadge status={r.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="تأكيد"
                          className="text-primary"
                          disabled={r.status === 'confirmed'}
                          onClick={() => setStatus(r.id, 'confirmed')}
                        >
                          <Check />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="إلغاء"
                          className="text-destructive"
                          disabled={r.status === 'cancelled'}
                          onClick={() => setStatus(r.id, 'cancelled')}
                        >
                          <X />
                        </Button>
                      </div>
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
