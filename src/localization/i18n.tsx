'use client'

import React, { useMemo } from 'react'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { I18nextProvider as Provider, initReactI18next } from 'react-i18next'

import { getOptions } from './settings'
import { Language } from '@/enums/language'

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .use(resourcesToBackend((language: Language, namespace: string) => import(`./translations/${language}.json`)))
  .init({
    ...getOptions(Language.EN, undefined),
    detection: {
      caches: ['cookie'],
    },
  })

export function I18nProvider({ children, language }: { children: React.ReactNode; language: string | Language }) {
  useMemo(() => {
    i18next.changeLanguage(language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <Provider i18n={i18next}>{children}</Provider>
}
