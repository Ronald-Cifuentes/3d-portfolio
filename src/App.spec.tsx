import { TextEncoder, TextDecoder } from 'util'
Object.assign(global, { TextEncoder, TextDecoder })

// Mock SVG imports used in Footer.const
jest.mock('./assets/Linkedin_40x40.svg?react', () => () => <svg data-testid='linkedin-icon' />)
jest.mock('./assets/Facebook_40x40.svg?react', () => () => <svg data-testid='facebook-icon' />)
jest.mock('./assets/Twitter_40x40.svg?react', () => () => <svg data-testid='twitter-icon' />)
jest.mock('./assets/Instagram_40x40.svg?react', () => () => <svg data-testid='instagram-icon' />)

import { render, screen } from '@testing-library/react'
import App from './App'
import { LanguageProvider } from './i18n'

// Mock HTMLVideoElement.play
beforeAll(() => {
  jest.spyOn(HTMLVideoElement.prototype, 'play').mockImplementation(() => Promise.resolve())
})

const renderApp = () => {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  )
}

describe('<App />', () => {
  test('renders without crashing', () => {
    renderApp()

    // App should render successfully
    expect(document.body).toBeInTheDocument()
  })

  test('renders Navbar component', () => {
    renderApp()

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  test('renders Content component with greeting', () => {
    renderApp()

    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
  })

  test('renders name Ronald', () => {
    renderApp()

    expect(screen.getByText('Ronald')).toBeInTheDocument()
  })

  test('renders Experience section', () => {
    renderApp()

    const experienceSection = screen.getByTestId('experience')
    expect(experienceSection).toBeInTheDocument()
  })

  test('renders Skills section', () => {
    renderApp()

    expect(screen.getByText('Skills and Technologies.')).toBeInTheDocument()
  })

  test('renders Footer with social links', () => {
    renderApp()

    const links = screen.getAllByRole('link')
    // Should have social links (4 from footer)
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  test('renders Background video', () => {
    const { container } = renderApp()

    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
  })
})
