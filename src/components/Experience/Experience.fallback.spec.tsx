/**
 * Test for Experience component translation fallbacks
 * This tests the branches at lines 41-43 when translations return non-string/non-array values
 */

import { render, screen } from '@testing-library/react'

// Mock useTranslation to return non-string values for specific keys
jest.mock('../../i18n', () => ({
  ...jest.requireActual('../../i18n'),
  useTranslation: () => {
    const actual = jest.requireActual('../../i18n')
    const { en } = actual

    const t = (key: string) => {
      // For specific job translation keys, return non-string/non-array
      // to trigger the fallback branches
      if (key === 'experience.jobs.acidLabs.title') {
        return { notAString: true } // Non-string to trigger line 41 fallback
      }
      if (key === 'experience.jobs.acidLabs.date') {
        return ['not', 'a', 'string'] // Array instead of string for line 42 fallback
      }
      if (key === 'experience.jobs.acidLabs.points') {
        return 'not an array' // String instead of array for line 43 fallback
      }
      if (key === 'experience.title') {
        return en.experience.title
      }
      // For all other job translations, return proper values
      if (key.startsWith('experience.jobs.')) {
        const parts = key.split('.')
        const jobKey = parts[2]
        const field = parts[3]
        const jobs = en.experience.jobs as Record<string, Record<string, unknown>>
        if (jobs[jobKey] && jobs[jobKey][field]) {
          return jobs[jobKey][field]
        }
      }
      return key
    }

    const ts = (key: string): string => {
      const value = t(key)
      return typeof value === 'string' ? value : ''
    }

    return {
      language: 'en',
      setLanguage: jest.fn(),
      t,
      ts,
    }
  },
}))

import Experience from './Experience'
import { LanguageProvider } from '../../i18n'

describe('<Experience /> translation fallbacks', () => {
  test('uses original exp values when translation returns non-string/non-array', () => {
    // With our mock, the first experience (Acid Labs) will have:
    // - title: non-string returned -> should fall back to original exp.title
    // - date: array returned -> should fall back to original exp.date
    // - points: string returned -> should fall back to original exp.points

    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    )

    // The component should render without crashing
    expect(screen.getByTestId('experience')).toBeInTheDocument()

    // Verify that the original values from constants are used
    // When translation returns non-string for title, it uses exp.title
    expect(screen.getByText('Sr React Developer & FullStack')).toBeInTheDocument()

    // All experience cards should render
    const cards = screen.getAllByTestId('experience-card')
    expect(cards.length).toBe(7)
  })
})
