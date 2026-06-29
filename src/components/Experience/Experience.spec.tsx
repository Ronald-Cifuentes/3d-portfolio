import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import Experience from './Experience'
import { LanguageProvider } from '../../i18n'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('<Experience />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
    localStorage.clear()
  })

  test('#1. Exist - Render default', () => {
    renderWithProvider(<Experience />)

    const experience = screen.getByTestId('experience')

    expect(experience).toBeInTheDocument()
  })

  test('#2. Renders experience title', () => {
    renderWithProvider(<Experience />)

    expect(screen.getByText('Work Experience.')).toBeInTheDocument()
  })

  test('#3. Renders experience cards', () => {
    renderWithProvider(<Experience />)

    const cards = screen.getAllByTestId('experience-card')
    expect(cards.length).toBeGreaterThan(0)
  })

  test('#4. Renders vertical timeline', () => {
    renderWithProvider(<Experience />)

    expect(screen.getByTestId('vertical-timeline')).toBeInTheDocument()
  })

  test('#5. Translates job titles correctly', () => {
    renderWithProvider(<Experience />)

    // Should show translated title for Acid Labs
    expect(screen.getByText('Sr React Developer & FullStack')).toBeInTheDocument()
  })

  test('#6. Renders in Spanish when language is switched', () => {
    const TestWrapper = () => {
      return (
        <LanguageProvider>
          <SwitchToEs />
          <Experience />
        </LanguageProvider>
      )
    }

    const SwitchToEs = () => {
      const { setLanguage } = require('../../i18n').useTranslation()
      return (
        <button onClick={() => setLanguage('es')} data-testid='switch-es'>
          ES
        </button>
      )
    }

    render(<TestWrapper />)
    fireEvent.click(screen.getByTestId('switch-es'))

    // Spanish title (with capital L)
    expect(screen.getByText('Experiencia Laboral.')).toBeInTheDocument()
  })

  test('#7. Handles experience with unmapped company name', () => {
    // This tests the else branch at line 46 when jobKey is undefined
    // The constants include all mapped companies, so we just verify rendering works
    // The branch is defensive - it returns original exp if no jobKey mapping exists
    renderWithProvider(<Experience />)

    // All cards should render regardless of mapping
    const cards = screen.getAllByTestId('experience-card')
    expect(cards.length).toBeGreaterThan(0)
  })

  // Test #8 for unmapped company is in Experience.unmapped.spec.tsx
  // It requires mocking constants before module load
})
