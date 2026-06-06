'use client'

import { useState } from 'react'
import { CalendarCheck, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from '@/components/ui/field'
import { toast } from 'sonner'

type ReservationForm = {
  name: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const initialForm: ReservationForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

export function ReservationForm() {
  const [form, setForm] = useState<ReservationForm>(initialForm)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  function update(key: keyof ReservationForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
      date: !form.date.trim(),
      time: !form.time.trim(),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) {
      toast.error('يرجى تعبئة جميع الحقول المطلوبة.')
      return
    }
    // TODO: ربط مع الـ Backend لحفظ الحجز في قاعدة البيانات
    setSubmitted(true)
    toast.success('تم استلام طلب حجزك بنجاح!')
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <CardContent className="flex flex-col items-center gap-4 py-12">
          <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
            <CheckCircle2 className="size-9" />
          </span>
          <h3 className="font-heading text-2xl font-extrabold">تم تأكيد طلب الحجز!</h3>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            شكرًا لك {form.name}. تم استلام طلب حجزك ليوم {form.date} الساعة{' '}
            {form.time} لعدد {form.guests} أشخاص. سنتواصل معك قريبًا لتأكيد الحجز.
          </p>
          <Button
            onClick={() => {
              setForm(initialForm)
              setSubmitted(false)
            }}
            variant="outline"
          >
            حجز جديد
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field data-invalid={errors.name || undefined}>
                <FieldLabel htmlFor="r-name">الاسم</FieldLabel>
                <Input
                  id="r-name"
                  value={form.name}
                  aria-invalid={errors.name || undefined}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="اسمك الكامل"
                />
              </Field>
              <Field data-invalid={errors.phone || undefined}>
                <FieldLabel htmlFor="r-phone">رقم الهاتف</FieldLabel>
                <Input
                  id="r-phone"
                  type="tel"
                  dir="ltr"
                  value={form.phone}
                  aria-invalid={errors.phone || undefined}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="05XXXXXXXX"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field data-invalid={errors.date || undefined}>
                <FieldLabel htmlFor="r-date">التاريخ</FieldLabel>
                <Input
                  id="r-date"
                  type="date"
                  value={form.date}
                  aria-invalid={errors.date || undefined}
                  onChange={(e) => update('date', e.target.value)}
                />
              </Field>
              <Field data-invalid={errors.time || undefined}>
                <FieldLabel htmlFor="r-time">الوقت</FieldLabel>
                <Input
                  id="r-time"
                  type="time"
                  value={form.time}
                  aria-invalid={errors.time || undefined}
                  onChange={(e) => update('time', e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="r-guests">عدد الأشخاص</FieldLabel>
                <Input
                  id="r-guests"
                  type="number"
                  min={1}
                  max={20}
                  value={form.guests}
                  onChange={(e) => update('guests', e.target.value)}
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="r-notes">ملاحظات</FieldLabel>
              <Textarea
                id="r-notes"
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="طلبات خاصة، مناسبة معينة..."
                rows={3}
              />
              <FieldDescription>اختياري</FieldDescription>
            </Field>

            <Button
              type="submit"
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <CalendarCheck data-icon="inline-start" />
              إرسال الحجز
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
