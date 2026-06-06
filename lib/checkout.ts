import type { CartLine } from '@/lib/cart-context'
import { restaurantInfo } from '@/lib/data'

export type CustomerInfo = {
  name: string
  phone: string
  address: string
  notes: string
}

/**
 * يبني نص الطلب المنسّق لإرساله عبر واتساب.
 */
export function buildOrderMessage(
  lines: CartLine[],
  customer: CustomerInfo,
  total: number,
): string {
  const itemsText = lines
    .map(
      (l, i) =>
        `${i + 1}. ${l.item.name} × ${l.quantity} = ${
          l.item.price * l.quantity
        } ر.س`,
    )
    .join('\n')

  return [
    `*طلب جديد من ${restaurantInfo.name}*`,
    '',
    `*الاسم:* ${customer.name}`,
    `*الهاتف:* ${customer.phone}`,
    `*العنوان:* ${customer.address}`,
    customer.notes ? `*ملاحظات:* ${customer.notes}` : '',
    '',
    '*تفاصيل الطلب:*',
    itemsText,
    '',
    `*الإجمالي: ${total} ر.س*`,
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * يرسل الطلب عبر واتساب.
 * الرابط الافتراضي: https://wa.me/<number>
 */
export function sendOrderViaWhatsApp(
  lines: CartLine[],
  customer: CustomerInfo,
  total: number,
) {
  const message = buildOrderMessage(lines, customer, total)
  const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
    message,
  )}`
  window.open(url, '_blank')
}

// =============================================================
// نقطة التكامل المستقبلية مع بوابة الدفع الإلكتروني (Payment Gateway)
// -------------------------------------------------------------
// عند الرغبة باستبدال واتساب ببوابة دفع (مثل Stripe / Tap / Moyasar)،
// استبدل استدعاء sendOrderViaWhatsApp() بالدالة أدناه واربطها بالـ Backend.
//
// مثال للتنفيذ المستقبلي:
//   const res = await fetch('/api/checkout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ lines, customer, total }),
//   })
//   const { paymentUrl } = await res.json()
//   window.location.href = paymentUrl
// =============================================================
export async function checkoutWithPaymentGateway(
  _lines: CartLine[],
  _customer: CustomerInfo,
  _total: number,
): Promise<{ paymentUrl: string }> {
  // TODO: ربط مع بوابة الدفع عبر الـ Backend (Node.js / Laravel)
  throw new Error('بوابة الدفع غير مفعّلة بعد — استخدم الطلب عبر واتساب حاليًا.')
}
