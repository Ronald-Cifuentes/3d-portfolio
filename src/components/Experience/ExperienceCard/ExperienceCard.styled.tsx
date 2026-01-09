import styled from 'styled-components'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

export const ExperienceCardContainer = styled.div``

export const StyledVerticalTimelineElement = styled(VerticalTimelineElement).attrs({
  contentStyle: {
    background: '#1F283B',
    color: '#fff',
  },
  contentArrowStyle: { borderRight: '7px solid  #232631' },
})``

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const IconImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`

export const Title = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const CompanyName = styled.p`
  color: #dfd9ff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`

export const PointsList = styled.ul`
  margin-top: 1.25rem;
  list-style-type: disc;
  margin-left: 1.25rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

export const Point = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  padding-left: 0.25rem;
  letter-spacing: 0.05em;
`
