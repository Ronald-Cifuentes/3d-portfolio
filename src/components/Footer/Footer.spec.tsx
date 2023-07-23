import { cleanup, render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer).toBeInTheDocument()
  })
})
