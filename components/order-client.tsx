'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from '@/components/ui/field'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { toast } from 'sonner'
import { useCart } from '@/lib/cart-context'
import { sendOrderViaWhatsApp, type CustomerInfo } from '@/lib/checkout'

export function OrderClient() {
  const { lines, increment, decrement, removeItem, totalPrice, totalItems, clear } =
    useCart()
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const deliveryFee = lines.length > 0 ? 10 : 0
  const grandTotal = totalPrice + deliveryFee

  function handleSubmit() {
    const newErrors = {
      name: !customer.name.trim(),
      phone: !customer.phone.trim(),
      address: !customer.address.trim(),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) {
      toast.error('يرجى تعبئة الاسم ورقم الهاتف والعنوان.')
      return
    }
    sendOrderViaWhatsApp(lines, customer, grandTotal)
    toast.success('تم تجهيز طلبك! سيتم تحويلك إلى واتساب لإتمام الإرسال.')
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Empty className="py-16">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <ShoppingBag />
            </EmptyMedia>
            <EmptyTitle>سلتك فارغة</EmptyTitle>
            <EmptyDescription>
              لم تقم بإضافة أي وجبات بعد. تصفّح المنيو واختر أشهى الأطباق.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              className="bg-gold text-gold-foreground hover:bg-gold/90"
              render={<Link href="/menu">تصفّح المنيو</Link>}
            />
          </EmptyContent>
        </Empty>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-5">
      {/* عناصر السلة */}
      <div className="lg:col-span-3">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold">
            سلة الطلبات ({totalItems})
          </h2>
          <Button variant="ghost" size="sm" onClick={clear} className="text-destructive">
            <Trash2 data-icon="inline-start" />
            تفريغ السلة
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {lines.map((line) => (
            <Card key={line.item.id} className="p-0">
              <CardContent className="flex items-center gap-4 p-3">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={line.item.image || '/placeholder.svg'}
                    alt={line.item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="font-heading text-base font-bold leading-tight">
                    {line.item.name}
                  </h3>
                  <span className="text-sm text-gold">{line.item.price} ر.س</span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1 rounded-md border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => increment(line.item.id)}
                      aria-label="زيادة"
                    >
                      <Plus className="size-3.5" />
                    </Button>
                    <span className="w-6 text-center text-sm font-bold">
                      {line.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => decrement(line.item.id)}
                      aria-label="إنقاص"
                    >
                      <Minus className="size-3.5" />
                    </Button>
                  </div>
                  <button
                    onClick={() => removeItem(line.item.id)}
                    className="text-xs text-muted-foreground transition-colors hover:text-destructive"
                  >
                    إزالة
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* الملخص ونموذج العميل */}
      <div className="lg:col-span-2">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle className="font-heading">بيانات التوصيل</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <FieldGroup>
              <Field data-invalid={errors.name || undefined}>
                <FieldLabel htmlFor="name">الاسم الكامل</FieldLabel>
                <Input
                  id="name"
                  value={customer.name}
                  aria-invalid={errors.name || undefined}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="مثال: أحمد العلي"
                />
              </Field>
              <Field data-invalid={errors.phone || undefined}>
                <FieldLabel htmlFor="phone">رقم الهاتف</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  value={customer.phone}
                  aria-invalid={errors.phone || undefined}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="05XXXXXXXX"
                />
              </Field>
              <Field data-invalid={errors.address || undefined}>
                <FieldLabel htmlFor="address">العنوان</FieldLabel>
                <Textarea
                  id="address"
                  value={customer.address}
                  aria-invalid={errors.address || undefined}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="الحي، الشارع، رقم المبنى..."
                  rows={2}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="notes">مل��حظات إضافية</FieldLabel>
                <Textarea
                  id="notes"
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="أي تعليمات خاصة بالطلب..."
                  rows={2}
                />
                <FieldDescription>اختياري</FieldDescription>
              </Field>
            </FieldGroup>

            <Separator />

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">المجموع الفرعي</span>
                <span>{totalPrice} ر.س</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">رسوم التوصيل</span>
                <span>{deliveryFee} ر.س</span>
              </div>
              <div className="flex items-center justify-between font-heading text-lg font-extrabold">
                <span>الإجمالي</span>
                <span className="text-gold">{grandTotal} ر.س</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                onClick={handleSubmit}
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
              >
                <MessageCircle data-icon="inline-start" />
                إرسال الطلب عبر واتساب
              </Button>
              {/* زر الدفع الإلكتروني — معطّل حتى تفعيل بوابة الدفع لاحقًا */}
              <Button
                size="lg"
                variant="outline"
                disabled
                title="بوابة الدفع غير مفعّلة بعد"
              >
                <CreditCard data-icon="inline-start" />
                الدفع الإلكتروني (قريبًا)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
