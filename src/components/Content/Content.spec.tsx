import { render, screen } from '@testing-library/react'
import Content from './Content'
import { LanguageProvider } from '../../i18n'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('<Content />', () => {
  test('renders greeting text', () => {
    renderWithProvider(<Content />)

    // English greeting contains "Hi, I'm"
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
  })

  test('renders name "Ronald"', () => {
    renderWithProvider(<Content />)

    expect(screen.getByText('Ronald')).toBeInTheDocument()
  })

  test('renders description text', () => {
    renderWithProvider(<Content />)

    // Description mentions "Web Developer"
    expect(screen.getByText(/Web Developer/)).toBeInTheDocument()
  })

  test('name is styled with rainbow animation span', () => {
    renderWithProvider(<Content />)

    const nameElement = screen.getByText('Ronald')
    expect(nameElement.tagName).toBe('SPAN')
  })

  test('renders title as h1', () => {
    renderWithProvider(<Content />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toContainElement(screen.getByText('Ronald'))
  })

  test('renders rainbow bar element', () => {
    const { container } = renderWithProvider(<Content />)

    // The rainbow bar is a styled div with animation
    const divs = container.querySelectorAll('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  test('renders description paragraph', () => {
    const { container } = renderWithProvider(<Content />)

    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThan(0)
  })
})
