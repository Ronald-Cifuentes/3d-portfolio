import { render, waitFor } from '@testing-library/react'
import BgVideo from './BgVideo'

describe('<BgVideo />', () => {
  let playSpy: jest.SpyInstance

  beforeEach(() => {
    // Mock HTMLVideoElement.play to return a promise
    playSpy = jest.spyOn(HTMLVideoElement.prototype, 'play').mockImplementation(() => {
      return Promise.resolve()
    })
  })

  afterEach(() => {
    playSpy.mockRestore()
  })

  test('renders video element', () => {
    const { container } = render(<BgVideo />)

    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
  })

  test('video has loop attribute', () => {
    const { container } = render(<BgVideo />)

    const video = container.querySelector('video')
    expect(video).toHaveAttribute('loop')
  })

  test('video has muted attribute', () => {
    const { container } = render(<BgVideo />)

    const video = container.querySelector('video')
    // muted is a boolean attribute
    expect(video?.muted).toBe(true)
  })

  test('video has source element with mp4 type', () => {
    const { container } = render(<BgVideo />)

    const source = container.querySelector('source')
    expect(source).toBeInTheDocument()
    expect(source).toHaveAttribute('type', 'video/mp4')
  })

  test('video has fallback text', () => {
    const { container } = render(<BgVideo />)

    const video = container.querySelector('video')
    expect(video?.textContent).toContain('Your browser does not support HTML video.')
  })

  test('attempts to play video on mount', async () => {
    render(<BgVideo />)

    await waitFor(() => {
      expect(playSpy).toHaveBeenCalled()
    })
  })

  test('handles play failure gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    playSpy.mockRejectedValueOnce(new Error('Play failed'))

    render(<BgVideo />)

    await waitFor(() => {
      expect(playSpy).toHaveBeenCalled()
    })

    // Should not throw
    consoleErrorSpy.mockRestore()
  })

  test('video has absolute positioning class', () => {
    const { container } = render(<BgVideo />)

    const video = container.querySelector('video')
    expect(video?.className).toContain('absolute')
  })
})
