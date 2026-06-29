import { render, screen } from '@testing-library/react'

// Mock the SVG imports used in Footer.const
jest.mock('../../assets/Linkedin_40x40.svg?react', () => () => <svg data-testid='linkedin-icon' />)
jest.mock('../../assets/Facebook_40x40.svg?react', () => () => <svg data-testid='facebook-icon' />)
jest.mock('../../assets/Twitter_40x40.svg?react', () => () => <svg data-testid='twitter-icon' />)
jest.mock('../../assets/Instagram_40x40.svg?react', () => () => (
  <svg data-testid='instagram-icon' />
))

import Footer from './Footer'
import { List } from './Footer.const'

describe('<Footer />', () => {
  test('renders footer container', () => {
    render(<Footer />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  test('renders correct number of social links', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(List.length)
  })

  test('all links open in new tab', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  test('links have correct hrefs', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')
    List.forEach((item, index) => {
      expect(links[index]).toHaveAttribute('href', item.link)
    })
  })

  test('each link is wrapped in a list item', () => {
    render(<Footer />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(List.length)
  })
})

describe('Footer.const', () => {
  test('List contains 4 social links', () => {
    expect(List).toHaveLength(4)
  })

  test('each item has icon and link properties', () => {
    List.forEach(item => {
      expect(item).toHaveProperty('icon')
      expect(item).toHaveProperty('link')
      expect(typeof item.link).toBe('string')
    })
  })

  test('includes LinkedIn link', () => {
    const linkedInItem = List.find(item => item.link.includes('linkedin'))
    expect(linkedInItem).toBeDefined()
  })

  test('includes Facebook link', () => {
    const facebookItem = List.find(item => item.link.includes('facebook'))
    expect(facebookItem).toBeDefined()
  })

  test('includes Twitter link', () => {
    const twitterItem = List.find(item => item.link.includes('twitter'))
    expect(twitterItem).toBeDefined()
  })

  test('includes Instagram link', () => {
    const instagramItem = List.find(item => item.link.includes('instagram'))
    expect(instagramItem).toBeDefined()
  })
})
