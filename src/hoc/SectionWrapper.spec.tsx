import { render, screen } from '@testing-library/react'
import SectionWrapper from './SectionWrapper'

const TestComponent = () => <div data-testid='test-content'>Test Content</div>

describe('SectionWrapper HOC', () => {
  test('wraps component in a section', () => {
    const WrappedComponent = SectionWrapper(TestComponent, 'test-section')
    const { container } = render(<WrappedComponent />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  test('renders the wrapped component', () => {
    const WrappedComponent = SectionWrapper(TestComponent, 'test-section')
    render(<WrappedComponent />)

    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('adds hash-span with correct id', () => {
    const WrappedComponent = SectionWrapper(TestComponent, 'my-section')
    const { container } = render(<WrappedComponent />)

    const hashSpan = container.querySelector('.hash-span')
    expect(hashSpan).toBeInTheDocument()
    expect(hashSpan).toHaveAttribute('id', 'my-section')
  })

  test('applies padding and max-width styles via className', () => {
    const WrappedComponent = SectionWrapper(TestComponent, 'test')
    const { container } = render(<WrappedComponent />)

    const section = container.querySelector('section')
    expect(section?.className).toContain('max-w-7xl')
    expect(section?.className).toContain('mx-auto')
    expect(section?.className).toContain('relative')
  })

  test('handles empty idName', () => {
    const WrappedComponent = SectionWrapper(TestComponent, '')
    const { container } = render(<WrappedComponent />)

    const hashSpan = container.querySelector('.hash-span')
    expect(hashSpan).toHaveAttribute('id', '')
  })

  test('returns a function component', () => {
    const WrappedComponent = SectionWrapper(TestComponent, 'test')

    expect(typeof WrappedComponent).toBe('function')
  })
})
