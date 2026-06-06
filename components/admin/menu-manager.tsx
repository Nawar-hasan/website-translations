'use client'

import { useState } from 'react'
import Image from 'next/image'
import { menuItems as initialItems, categories, type MenuItem } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Field, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import { toast } from 'sonner'

const foodCategories = categories.filter((c) => c.id !== 'all')

export function MenuManager() {
  const [items, setItems] = useState<MenuItem[]>(initialItems)
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<MenuItem | null>(null)

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()),
  )

  function openNew() {
    setEditing(null)
    setOpen(true)
  }

  function openEdit(item: MenuItem) {
    setEditing(item)
    setOpen(true)
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id))
    toast.success('تم حذف الصنف بنجاح')
  }

  function handleSave(formData: FormData) {
    const name = String(formData.get('name') || '').trim()
    const price = Number(formData.get('price') || 0)
    const categorySlug = String(formData.get('category') || 'grills')
    const description = String(formData.get('description') || '')
    const available = formData.get('available') === 'on'

    if (!name || price <= 0) {
      toast.error('يرجى إدخال اسم وسعر صحيح')
      return
    }

    if (editing) {
      setItems((prev) =>
        prev.map((i) =>
          i.id === editing.id
            ? { ...i, name, price, categorySlug, description, available }
            : i,
        ),
      )
      toast.success('تم تحديث الصنف بنجاح')
    } else {
      setItems((prev) => [
        {
          id: `new-${Date.now()}`,
          name,
          price,
          categorySlug,
          description,
          available,
          image: '/images/oriental.png',
          popular: false,
        },
        ...prev,
      ])
      toast.success('تمت إضافة الصنف بنجاح')
    }
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            إدارة القائمة
          </h1>
          <p className="text-sm text-muted-foreground">
            إضافة وتعديل وحذف أصناف المطعم
          </p>
        </div>
        <Button onClick={openNew}>
          <Plus data-icon="inline-start" />
          إضافة صنف جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="font-heading">
              الأصناف ({filtered.length})
            </CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث عن صنف..."
                className="pr-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الصنف</TableHead>
                  <TableHead className="text-right">التصنيف</TableHead>
                  <TableHead className="text-right">السعر</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((item) => {
                  const cat = foodCategories.find((c) => c.id === item.categorySlug)
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="relative size-11 shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image || '/placeholder.svg'}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="44px"
                            />
                          </div>
                          <span className="font-medium text-foreground">
                            {item.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {cat?.name ?? item.categorySlug}
                      </TableCell>
                      <TableCell className="font-semibold text-foreground">
                        {item.price} ر.س
                      </TableCell>
                      <TableCell>
                        {item.available ? (
                          <Badge variant="secondary">متاح</Badge>
                        ) : (
                          <Badge variant="outline">غير متاح</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEdit(item)}
                            aria-label="تعديل"
                          >
                            <Pencil />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(item.id)}
                            aria-label="حذف"
                            className="text-destructive"
                          >
                            <Trash2 />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-heading">
              {editing ? 'تعديل الصنف' : 'إضافة صنف جديد'}
            </SheetTitle>
            <SheetDescription>
              أدخل بيانات الصنف ثم اضغط حفظ.
            </SheetDescription>
          </SheetHeader>
          <form action={handleSave} className="flex flex-1 flex-col gap-5 overflow-y-auto px-4">
            <Field>
              <FieldLabel htmlFor="name">اسم الصنف</FieldLabel>
              <Input
                id="name"
                name="name"
                defaultValue={editing?.name}
                placeholder="مثال: مشاوي مشكلة"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="price">السعر (ر.س)</FieldLabel>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                defaultValue={editing?.price}
                placeholder="0"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="category">التصنيف</FieldLabel>
              <Select name="category" defaultValue={editing?.categorySlug ?? 'grills'}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="اختر التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {foodCategories.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="description">الوصف</FieldLabel>
              <Input
                id="description"
                name="description"
                defaultValue={editing?.description}
                placeholder="وصف مختصر للصنف"
              />
            </Field>
            <Field orientation="horizontal">
              <Switch
                id="available"
                name="available"
                defaultChecked={editing?.available ?? true}
              />
              <FieldLabel htmlFor="available">متاح للطلب</FieldLabel>
            </Field>
            <SheetFooter className="px-0">
              <Button type="submit">
                {editing ? 'حفظ التعديلات' : 'إضافة الصنف'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                إلغاء
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  )
}
