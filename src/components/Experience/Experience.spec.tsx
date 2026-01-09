import { cleanup, render, screen } from '@testing-library/react'
import Experience from './Experience'

describe('<Experience />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Experience />)

    const experience = screen.getByTestId('experience')

    expect(experience).toBeInTheDocument()
  })
})
