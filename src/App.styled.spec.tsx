import { render } from '@testing-library/react'
import { AppContainer, HeroSection, StarsContainer } from './App.styled'

describe('App.styled', () => {
  test('AppContainer renders correctly', () => {
    const { container } = render(<AppContainer>content</AppContainer>)
    const div = container.firstChild as HTMLElement
    expect(div).toHaveStyle('position: relative')
  })

  test('HeroSection renders with custom height', () => {
    const { container } = render(<HeroSection $height='500px'>content</HeroSection>)
    const div = container.firstChild as HTMLElement
    expect(div).toHaveStyle('height: 500px')
  })

  test('HeroSection renders with default height when $height not provided', () => {
    const { container } = render(<HeroSection>content</HeroSection>)
    const div = container.firstChild as HTMLElement
    expect(div).toHaveStyle('height: 850px')
  })

  test('StarsContainer renders correctly', () => {
    const { container } = render(<StarsContainer>content</StarsContainer>)
    const div = container.firstChild as HTMLElement
    expect(div).toHaveStyle('position: relative')
  })
})
