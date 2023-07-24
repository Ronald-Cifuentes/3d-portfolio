import { cleanup, render, screen } from '@testing-library/react'
import Home from './Home'

describe('<Home />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Home />)

    const home = screen.getByTestId('home')

    expect(home).toBeInTheDocument()
  })
})
