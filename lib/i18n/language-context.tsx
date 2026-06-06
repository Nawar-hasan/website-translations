'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import {
  defaultLocale,
  dirForLocale,
  isLocale,
  type Locale,
} from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'

const STORAGE_KEY = 'royaltaste.locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // عند التحميل: استرجع اللغة المحفوظة (إن وجدت) وإلا تبقى الألمانية
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) {
      setLocaleState(stored)
    }
  }, [])

  // طبّق lang/dir على عنصر html عند تغيّر اللغة
  useEffect(() => {
    const root = document.documentElement
    root.lang = locale
    root.dir = dirForLocale(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
      dir: dirForLocale(locale),
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
