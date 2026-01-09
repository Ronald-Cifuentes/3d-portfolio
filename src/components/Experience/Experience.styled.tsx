import { styled } from 'styled-components'
import { motion } from 'framer-motion'

export const ExperienceContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`

export const Title = styled(motion.div).attrs(() => ({
  variants: {
    show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.25 } },
  },
}))`
  color: white;
  font-weight: 900;
  font-size: 30px;

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 640px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    font-size: 60px;
  }
`

export const TimelineContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`
