import { cleanup, render, screen } from '@testing-library/react'
import Loader from './Loader'

describe('<Loader />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Loader />)

    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()
  })
})
