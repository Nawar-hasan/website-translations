'use client'

import { restaurantInfo } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

export function SettingsManager() {
  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    toast.success('تم حفظ الإعدادات بنجاح')
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          إعدادات المطعم
        </h1>
        <p className="text-sm text-muted-foreground">
          تحديث معلومات المطعم وأوقات العمل
        </p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">المعلومات الأساسية</CardTitle>
            <CardDescription>
              اسم المطعم ووسائل التواصل الظاهرة للعملاء
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">اسم المطعم</FieldLabel>
                <Input id="name" defaultValue={restaurantInfo.name} />
              </Field>
              <Field>
                <FieldLabel htmlFor="tagline">الشعار النصي</FieldLabel>
                <Input id="tagline" defaultValue={restaurantInfo.tagline} />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">رقم الهاتف</FieldLabel>
                <Input id="phone" defaultValue={restaurantInfo.phone} dir="ltr" />
              </Field>
              <Field>
                <FieldLabel htmlFor="address">العنوان</FieldLabel>
                <Textarea id="address" defaultValue={restaurantInfo.address} />
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">أوقات العمل</CardTitle>
            <CardDescription>تحديد ساعات استقبال الطلبات</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="open">وقت الفتح</FieldLabel>
                  <Input id="open" type="time" defaultValue="13:00" dir="ltr" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="close">وقت الإغلاق</FieldLabel>
                  <Input id="close" type="time" defaultValue="01:00" dir="ltr" />
                </Field>
              </div>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">خيارات الطلب</CardTitle>
            <CardDescription>التحكم في توفر الخدمات</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field orientation="horizontal">
                <Switch id="delivery" defaultChecked />
                <div className="flex flex-col gap-0.5">
                  <FieldLabel htmlFor="delivery">خدمة التوصيل</FieldLabel>
                  <FieldDescription>تفعيل طلبات التوصيل للمنازل</FieldDescription>
                </div>
              </Field>
              <Separator />
              <Field orientation="horizontal">
                <Switch id="reservations" defaultChecked />
                <div className="flex flex-col gap-0.5">
                  <FieldLabel htmlFor="reservations">حجز الطاولات</FieldLabel>
                  <FieldDescription>السماح بحجز الطاولات عبر الموقع</FieldDescription>
                </div>
              </Field>
              <Separator />
              <Field orientation="horizontal">
                <Switch id="online-payment" />
                <div className="flex flex-col gap-0.5">
                  <FieldLabel htmlFor="online-payment">الدفع الإلكتروني</FieldLabel>
                  <FieldDescription>
                    تفعيل بوابة الدفع الإلكتروني (قريباً)
                  </FieldDescription>
                </div>
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <div className="flex justify-start">
          <Button type="submit">حفظ الإعدادات</Button>
        </div>
      </form>
    </div>
  )
}
