import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  orderStatusLabels,
  reservationStatusLabels,
  type OrderStatus,
  type ReservationStatus,
} from '@/lib/admin-data'

const orderStyles: Record<OrderStatus, string> = {
  new: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  preparing: 'bg-gold/15 text-gold border-gold/30',
  delivered: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  cancelled: 'bg-destructive/15 text-destructive border-destructive/30',
}

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <Badge variant="outline" className={cn('font-medium', orderStyles[status])}>
      {orderStatusLabels[status]}
    </Badge>
  )
}

const reservationStyles: Record<ReservationStatus, string> = {
  pending: 'bg-gold/15 text-gold border-gold/30',
  confirmed: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  cancelled: 'bg-destructive/15 text-destructive border-destructive/30',
}

export function ReservationStatusBadge({
  status,
}: {
  status: ReservationStatus
}) {
  return (
    <Badge variant="outline" className={cn('font-medium', reservationStyles[status])}>
      {reservationStatusLabels[status]}
    </Badge>
  )
}
