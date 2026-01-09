import { FC } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { ExperienceContainer, Title, TimelineContainer } from './Experience.styled'
import { experiences } from '../../constants'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { SectionWrapper } from '../../hoc'

const Experience: FC = () => {
  return (
    <ExperienceContainer>
      <Title>
        <h2 style={{ textAlign: 'center' }}>Work Experience.</h2>
      </Title>
      <TimelineContainer>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </TimelineContainer>
    </ExperienceContainer>
  )
}

export default SectionWrapper(Experience, 'work')
