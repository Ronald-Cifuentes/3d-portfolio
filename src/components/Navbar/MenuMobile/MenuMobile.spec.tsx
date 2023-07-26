import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import MenuMobile from './MenuMobile'

describe('<MenuMobile />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<MenuMobile />)

    const menuMobile = screen.getByTestId('menu-mobile')

    expect(menuMobile).toBeInTheDocument()
  })

  it('toggles menu on click', () => {
    const { getByTestId } = render(<MenuMobile />)
    const menuButton = getByTestId('menu-mobile').firstChild as HTMLElement
    fireEvent.click(menuButton)
    expect(getByTestId('menu-mobile').lastChild).toHaveStyle({ display: 'block' })
    fireEvent.click(menuButton)
    expect(getByTestId('menu-mobile').lastChild).toHaveStyle({ display: 'block' })
  })

  it('sets active link on click', () => {
    const setActive = jest.fn()
    const { getAllByRole } = render(<MenuMobile setActive={setActive} />)
    const links = getAllByRole('link')
    fireEvent.click(links[0])
    expect(setActive).toHaveBeenCalledWith(links[0].textContent)
  })
})
