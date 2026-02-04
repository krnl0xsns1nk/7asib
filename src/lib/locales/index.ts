import ar from './ar.json'
import fr from './fr.json'
export const translations = { ar, fr } as const
export type Locale = keyof typeof translations



/* use :
import { translations, Locale } from '@/lib/locales'

  const { lang } = await params
  const t = translations[lang as Locale] || translations.ar
  */
