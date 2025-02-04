import { cleanup, render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Navbar />)

    const navbar = screen.getByTestId('navbar')

    expect(navbar).toBeInTheDocument()
  })
})
