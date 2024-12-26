import { Language } from '@/enums/language'
export const fallbackLng = Language.TH
export const languages = [fallbackLng, Language.EN]
export const defaultNS = 'translation'

export const getOptions = (language: string, ns: string | undefined) => ({
  lng: language,
  fallbackLng,
  ns: ns || defaultNS,
  defaultNS,
  interpolation: { escapeValue: false }, // สำหรับ React
  backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
})
