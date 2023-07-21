import { cleanup, render, screen } from '@testing-library/react'
import Background from './Background'

window.HTMLMediaElement.prototype.play = () => Promise.resolve()

describe('<Background />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Background />)

    const background = screen.getByTestId('background')

    expect(background).toBeInTheDocument()
  })
})
