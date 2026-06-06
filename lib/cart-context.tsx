'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import type { MenuItem } from '@/lib/data'

export type CartLine = {
  item: MenuItem
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clear: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])

  const addItem = useCallback((item: MenuItem) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id)
      if (existing) {
        return prev.map((l) =>
          l.item.id === item.id ? { ...l, quantity: l.quantity + 1 } : l,
        )
      }
      return [...prev, { item, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id))
  }, [])

  const increment = useCallback((id: string) => {
    setLines((prev) =>
      prev.map((l) =>
        l.item.id === id ? { ...l, quantity: l.quantity + 1 } : l,
      ),
    )
  }, [])

  const decrement = useCallback((id: string) => {
    setLines((prev) =>
      prev
        .map((l) =>
          l.item.id === id ? { ...l, quantity: l.quantity - 1 } : l,
        )
        .filter((l) => l.quantity > 0),
    )
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const totalItems = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  )

  const totalPrice = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity * l.item.price, 0),
    [lines],
  )

  const value = useMemo(
    () => ({
      lines,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      totalItems,
      totalPrice,
    }),
    [lines, addItem, removeItem, increment, decrement, clear, totalItems, totalPrice],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
