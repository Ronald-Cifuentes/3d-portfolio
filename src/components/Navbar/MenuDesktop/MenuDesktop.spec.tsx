import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import MenuDesktop from './MenuDesktop'

describe('<MenuDesktop />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<MenuDesktop />)

    const menuDesktop = screen.getByTestId('menu-desktop')
    expect(menuDesktop).toBeInTheDocument()
  })

  test('#1. Exist - Render default', () => {
    render(<MenuDesktop setActive={() => undefined} />)

    const menuDesktop = screen.getAllByTestId('menu-btn') as HTMLLIElement[]
    menuDesktop.forEach((_, ind) => {
      fireEvent.click(menuDesktop[ind])
    })
  })
})
