import { createContext } from 'react'
import type { LanguageContextValue } from './LanguageContext'

// The React context lives in its own module so component files (LanguageProvider)
// only export components — keeps react-refresh / Fast Refresh happy.
export const LanguageContext = createContext<LanguageContextValue | null>(null)
