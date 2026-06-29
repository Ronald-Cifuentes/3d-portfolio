import { FC } from 'react'
import { ExperienceCardProps } from './interfaces'
import { assetSrc } from '../../../utils/assetSrc'

import 'react-vertical-timeline-component/style.min.css'

import {
  StyledVerticalTimelineElement,
  IconContainer,
  IconImage,
  Title,
  CompanyName,
  PointsList,
  Point,
} from './ExperienceCard.styled'

const ExperienceCard: FC<ExperienceCardProps> = ({
  dataTestId = 'experience-card',
  experience,
}) => {
  return (
    <StyledVerticalTimelineElement
      data-testid={dataTestId}
      date={experience?.date}
      iconStyle={{ background: experience?.iconBg }}
      icon={
        <IconContainer>
          <IconImage
            src={assetSrc(experience?.icon)}
            alt={experience?.company_name}
            loading='lazy'
          />
        </IconContainer>
      }
    >
      <div>
        <Title>{experience?.title}</Title>
        <CompanyName>{experience?.company_name}</CompanyName>
      </div>

      <PointsList>
        {experience?.points.map((point: string) => (
          <Point key={point}>{point}</Point>
        ))}
      </PointsList>
    </StyledVerticalTimelineElement>
  )
}

export default ExperienceCard
