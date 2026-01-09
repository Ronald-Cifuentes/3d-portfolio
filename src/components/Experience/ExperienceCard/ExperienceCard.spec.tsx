import { cleanup, render, screen } from '@testing-library/react'
import ExperienceCard from './ExperienceCard'

describe('<ExperienceCard />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<ExperienceCard />)

    const experienceCard = screen.getByTestId('experience-card')

    expect(experienceCard).toBeInTheDocument()
  })
})
