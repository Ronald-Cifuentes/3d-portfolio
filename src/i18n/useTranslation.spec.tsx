import { cleanup, render, screen } from '@testing-library/react'
import { useTranslation } from './useTranslation'
import { LanguageProvider } from './LanguageContext'

const TestComponent = () => {
  const { t, language, setLanguage } = useTranslation()

  return (
    <div>
      <span data-testid='language'>{language}</span>
      <span data-testid='greeting'>{String(t('content.greeting'))}</span>
      <button onClick={() => setLanguage('es')} data-testid='switch'>
        Switch
      </button>
    </div>
  )
}

const ComponentWithoutProvider = () => {
  try {
    useTranslation()
    return <span data-testid='no-error'>No error thrown</span>
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return <span data-testid='error'>{errorMessage}</span>
  }
}

describe('useTranslation', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
    localStorage.clear()
  })

  test('#1. Should return t function, language, and setLanguage', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('en')
    expect(screen.getByTestId('greeting')).toHaveTextContent("Hi, I'm")
    expect(screen.getByTestId('switch')).toBeInTheDocument()
  })

  test('#2. Should throw error when used outside LanguageProvider', () => {
    // Suppress console.error for this test since we expect an error
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    render(<ComponentWithoutProvider />)

    expect(screen.getByTestId('error')).toHaveTextContent(
      'useTranslation must be used within a LanguageProvider'
    )

    consoleSpy.mockRestore()
  })
})
