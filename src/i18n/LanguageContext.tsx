import { useState, useEffect, useMemo, ReactNode, useCallback } from 'react'
import { en, es, type TranslationKeys } from './locales'
import { LanguageContext } from './language-context'

export type Language = 'en' | 'es'

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export type TranslationKey = NestedKeyOf<TranslationKeys>

type TranslationValue = string | readonly string[] | object

export interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => TranslationValue
  ts: (key: TranslationKey) => string
}

const STORAGE_KEY = 'portfolio.lang'

const dictionaries: Record<Language, TranslationKeys> = {
  en,
  es,
}

const getNestedValue = (obj: object, path: string): TranslationValue => {
  const keys = path.split('.')
  let current: unknown = obj

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return path
    }
    current = (current as Record<string, unknown>)[key]
  }

  if (typeof current === 'string' || Array.isArray(current) || typeof current === 'object') {
    return current as TranslationValue
  }
  return path
}

const detectBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return 'en'

  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'es') return 'es'
  return 'en'
}

const getInitialLanguage = (): Language => {
  if (globalThis.window === undefined) return 'en'

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') {
      return stored
    }
  } catch {
    // localStorage not available
  }

  return detectBrowserLanguage()
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // localStorage not available
    }
  }, [language])

  const t = useCallback(
    (key: TranslationKey): TranslationValue => {
      const dictionary = dictionaries[language]
      return getNestedValue(dictionary, key)
    },
    [language]
  )

  const ts = useCallback(
    (key: TranslationKey): string => {
      const value = t(key)
      return typeof value === 'string' ? value : ''
    },
    [t]
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t,
      ts,
    }),
    [language, setLanguage, t, ts]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
