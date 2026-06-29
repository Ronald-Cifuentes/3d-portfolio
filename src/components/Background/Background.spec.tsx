import { render } from '@testing-library/react'
import Background from './Background'

// Mock HTMLVideoElement.play before any tests run
beforeAll(() => {
  jest.spyOn(HTMLVideoElement.prototype, 'play').mockImplementation(() => Promise.resolve())
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('<Background />', () => {
  test('renders section with showcase class', () => {
    const { container } = render(<Background />)

    const section = container.querySelector('section.showcase')
    expect(section).toBeInTheDocument()
  })

  test('renders BgVideo component inside', () => {
    const { container } = render(<Background />)

    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
  })
})
