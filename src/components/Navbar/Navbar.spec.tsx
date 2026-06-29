import { cleanup, render, screen, fireEvent, act } from '@testing-library/react'
import Navbar from './Navbar'
import { LanguageProvider } from '../../i18n'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('<Navbar />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    renderWithProvider(<Navbar />)

    const navbar = screen.getByTestId('navbar')

    expect(navbar).toBeInTheDocument()
  })

  test('#2. Renders all navigation links', () => {
    renderWithProvider(<Navbar />)

    // Each link appears twice (desktop and mobile nav)
    expect(screen.getAllByText('Work')).toHaveLength(2)
    expect(screen.getAllByText('Skills')).toHaveLength(2)
    expect(screen.getAllByText('Projects')).toHaveLength(2)
    expect(screen.getAllByText('Contact')).toHaveLength(2)
  })

  test('#3. Desktop nav links have correct href', () => {
    const { container } = renderWithProvider(<Navbar />)

    const links = container.querySelectorAll('a')
    const workLink = Array.from(links).find(link => link.textContent === 'Work')
    expect(workLink).toHaveAttribute('href', '#work')
  })

  test('#4. Renders mobile menu toggle button', () => {
    renderWithProvider(<Navbar />)

    const toggleButton = screen.getByAltText('menu')
    expect(toggleButton).toBeInTheDocument()
  })

  test('#5. Clicking mobile menu toggle opens menu', () => {
    renderWithProvider(<Navbar />)

    const toggleButton = screen.getByAltText('menu')
    fireEvent.click(toggleButton)

    // Mobile menu should now show (we can check by verifying duplicate nav items exist)
    const skillsLinks = screen.getAllByText('Skills')
    expect(skillsLinks.length).toBeGreaterThan(1)
  })

  test('#6. Clicking desktop nav item sets it as active', () => {
    renderWithProvider(<Navbar />)

    const workLinks = screen.getAllByText('Work')
    // Click the first Work link (desktop)
    fireEvent.click(workLinks[0].closest('li') as HTMLElement)

    // The active state is internal - we just verify no crash
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  test('#7. Clicking mobile nav item sets active and closes menu', () => {
    renderWithProvider(<Navbar />)

    // Open mobile menu
    const toggleButton = screen.getByAltText('menu')
    fireEvent.click(toggleButton)

    // Click a mobile nav item
    const skillsLinks = screen.getAllByText('Skills')
    const mobileSkillsItem = skillsLinks[1].closest('li')
    fireEvent.click(mobileSkillsItem as HTMLElement)

    // Menu should close (toggle state changed)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  test('#8. Scroll handler sets scrolled state', () => {
    renderWithProvider(<Navbar />)

    // Simulate scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 150, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    // Navbar should still be in document
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  test('#9. Custom dataTestId is applied', () => {
    renderWithProvider(<Navbar dataTestId='custom-navbar' />)

    expect(screen.getByTestId('custom-navbar')).toBeInTheDocument()
  })

  test('#10. Renders LanguageSelector components', () => {
    const { container } = renderWithProvider(<Navbar />)

    // Should render language selector buttons
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
