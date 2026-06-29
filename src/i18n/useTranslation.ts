import { useContext } from 'react'
import { LanguageContext } from './language-context'
import { type LanguageContextValue } from './LanguageContext'

export const useTranslation = (): LanguageContextValue => {
  const context = useContext(LanguageContext)

  if (context === null) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }

  return context
}
