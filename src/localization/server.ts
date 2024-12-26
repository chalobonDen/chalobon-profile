import { cache } from 'react'

import acceptLanguage from 'accept-language'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cookies as getCookies, headers as getHeaders } from 'next/headers'
import { initReactI18next } from 'react-i18next/initReactI18next'
import 'server-only'

import { defaultNS, fallbackLng, getOptions, languages } from './settings'
import type { Language } from '@/enums/language'

const initServerI18next = async (language: string | Language, ns: string | undefined) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .use(resourcesToBackend((language: Language, ns: string) => import(`./translations/${language}.json`)))
    .init(getOptions(language, ns))
  return i18nInstance
}

acceptLanguage.languages(languages)

const cookieName = 'i18next'

export async function detectLanguage() {
  const cookies = getCookies()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const headers = getHeaders()

  // here we can read the session data
  // const session = await getSession();

  let language
  if (!language && cookies.has(cookieName)) {
    language = acceptLanguage.get(cookies.get(cookieName)?.value)
  }
  if (!language) {
    // language = acceptLanguage.get(headers.get('Accept-Language'))
  }
  if (!language) {
    language = fallbackLng
  }
  return language
}

interface TranslationOptions {
  keyPrefix?: string
}

export const getServerTranslations = cache(async (ns: string = defaultNS, options: TranslationOptions = {}) => {
  const language = await detectLanguage()
  const i18nextInstance = await initServerI18next(language, ns)
  return {
    t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  }
})
