export const locales = ['de', 'en', 'ar', 'tr'] as const

export type Locale = (typeof locales)[number]

// اللغة الرئيسية للموقع هي الألمانية
export const defaultLocale: Locale = 'de'

export const rtlLocales: Locale[] = ['ar']

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

export function dirForLocale(locale: Locale): 'rtl' | 'ltr' {
  return isRtl(locale) ? 'rtl' : 'ltr'
}

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
}

// رموز قصيرة تُعرض في زر تبديل اللغة
export const localeShort: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  ar: 'ع',
  tr: 'TR',
}

// Locale tags used for number/date formatting via Intl APIs.
export const intlLocale: Record<Locale, string> = {
  de: 'de-DE',
  en: 'en-US',
  ar: 'ar-EG',
  tr: 'tr-TR',
}

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}
