/**
 * Test for Experience component with unmapped company names
 * This tests the else branch at line 46 (return exp)
 */

// Mock the constants BEFORE importing anything else
jest.mock('../../constants', () => {
  const actual = jest.requireActual('../../constants')
  return {
    ...actual,
    experiences: [
      {
        title: 'Unmapped Job Title',
        company_name: 'Unknown Company XYZ', // This company is NOT in jobKeyMap
        icon: actual.experiences[0].icon,
        iconBg: '#FFFFFF',
        date: 'January 2025 - Present',
        points: ['Point one', 'Point two'],
      },
    ],
  }
})

import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import { LanguageProvider } from '../../i18n'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('<Experience /> with unmapped company', () => {
  test('renders experience with unmapped company using original values', () => {
    // The Experience component maps company_name -> jobKey using jobKeyMap
    // When company_name is 'Unknown Company XYZ' (not in the map), jobKey is undefined
    // This causes the code to hit the else branch: return exp
    renderWithProvider(<Experience />)

    // The unmapped experience should render with its original title and company name
    // because the else branch (return exp) is taken when jobKey is undefined
    expect(screen.getByText('Unmapped Job Title')).toBeInTheDocument()
    expect(screen.getByText('Unknown Company XYZ')).toBeInTheDocument()
    expect(screen.getByText('Point one')).toBeInTheDocument()
    expect(screen.getByText('Point two')).toBeInTheDocument()
  })
})
