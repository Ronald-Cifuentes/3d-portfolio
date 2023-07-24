import { cleanup, render, screen } from '@testing-library/react'
import Title from './Title'

describe('<Title />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Title />)

    const title = screen.getByTestId('title')

    expect(title).toBeInTheDocument()
  })
})
