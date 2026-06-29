import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import { LanguageProvider } from '../../i18n'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('<Skills />', () => {
  test('renders skills section', () => {
    const { container } = renderWithProvider(<Skills />)

    expect(container.firstChild).toBeInTheDocument()
  })

  test('renders skills title', () => {
    renderWithProvider(<Skills />)

    // English title is "Skills and Technologies."
    expect(screen.getByText('Skills and Technologies.')).toBeInTheDocument()
  })

  test('renders as h2 heading', () => {
    renderWithProvider(<Skills />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Skills and Technologies.')
  })

  test('renders skill paragraphs', () => {
    const { container } = renderWithProvider(<Skills />)

    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThan(0)
  })

  test('has gradient-box class', () => {
    const { container } = renderWithProvider(<Skills />)

    const gradientBox = container.querySelector('.gradient-box')
    expect(gradientBox).toBeInTheDocument()
  })

  test('wraps content with SectionWrapper HOC', () => {
    const { container } = renderWithProvider(<Skills />)

    // SectionWrapper adds a motion.section with hash-span
    const hashSpan = container.querySelector('.hash-span')
    expect(hashSpan).toBeInTheDocument()
  })

  test('renders all three paragraphs from translations', () => {
    const { container } = renderWithProvider(<Skills />)

    // The translations have 3 paragraphs
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBe(3)
  })

  test('handles non-array paragraphs gracefully', () => {
    // The Skills component has a defensive check:
    // const paragraphArray = Array.isArray(paragraphs) ? paragraphs : []
    // This ensures that if t() returns a non-array, no paragraphs are rendered.
    //
    // With our real translations, skills.paragraphs is always an array.
    // We verify the defensive check exists by confirming the component renders
    // correctly when paragraphs IS an array (normal case).
    //
    // The branch coverage shows the ternary is partially covered because
    // we always hit the true branch (paragraphs is array) in real usage.
    // This is acceptable defensive code that protects against future changes.

    const { container } = renderWithProvider(<Skills />)

    // Verify paragraphs render correctly (array case)
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBe(3)
  })

  test('renders empty when t returns non-array for paragraphs', () => {
    // Mock useTranslation to return a non-array for skills.paragraphs
    const mockT = (key: string) => {
      if (key === 'skills.paragraphs') {
        // Return a string instead of array to trigger the fallback branch
        return 'This is not an array'
      }
      if (key === 'skills.title') {
        return 'Skills and Technologies.'
      }
      return key
    }
    const mockTs = (key: string): string => {
      const value = mockT(key)
      return typeof value === 'string' ? value : ''
    }
    jest.spyOn(require('../../i18n'), 'useTranslation').mockImplementation(() => ({
      language: 'en',
      setLanguage: jest.fn(),
      t: mockT,
      ts: mockTs,
    }))

    const { container } = renderWithProvider(<Skills />)

    // Should render title but no paragraphs when paragraphs is not an array
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Skills and Technologies.')
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBe(0)

    // Restore mock
    jest.restoreAllMocks()
  })
})
