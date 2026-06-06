'use client'

import { Globe, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { locales, localeNames, localeShort } from '@/lib/i18n/config'
import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className={cn('gap-1.5', className)}
            aria-label={t.nav.language}
          >
            <Globe className="size-4" />
            <span className="text-xs font-bold">{localeShort[locale]}</span>
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code)}
            className="flex items-center justify-between gap-2"
          >
            <span>{localeNames[code]}</span>
            {locale === code && <Check className="size-4 text-gold" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
