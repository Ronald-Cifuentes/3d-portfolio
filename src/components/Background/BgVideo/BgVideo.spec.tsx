import { render, screen, waitFor } from '@testing-library/react'
import BgVideo from './BgVideo'

window.HTMLMediaElement.prototype.play = () => Promise.resolve()
console.error = jest.fn()
console.log = jest.fn()

describe('BgVideo', () => {
  it('renders the video element', () => {
    render(<BgVideo />)
    expect(screen.getByTestId('bg-video')).toBeInTheDocument()
  })

  it('renders the video element with custom dataTestId', () => {
    render(<BgVideo dataTestId='custom-test-id' />)
    expect(screen.getByTestId('custom-test-id')).toBeInTheDocument()
  })

  it('attempts to play the video on mount', () => {
    const playSpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play')
    render(<BgVideo />)
    expect(playSpy).toHaveBeenCalled()
  })

  it('logs success message when video plays successfully', () => {
    const logSpy = jest.spyOn(console, 'log')
    jest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve())
    render(<BgVideo />)
    waitFor(() => expect(logSpy).toHaveBeenCalledWith('Success video background'))
  })

  it('logs error message when video fails to play', async () => {
    const errorSpy = jest.spyOn(console, 'error')

    jest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.reject(new Error('play error')))
    render(<BgVideo />)
    waitFor(() =>
      expect(errorSpy).toHaveBeenCalledWith('Error attempting to play', new Error('play error'))
    )
  })
})
