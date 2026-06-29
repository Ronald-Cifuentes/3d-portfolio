import { FC, useMemo } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { ExperienceContainer, Title, TimelineContainer } from './Experience.styled'
import { experiences } from '../../constants'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { SectionWrapper } from '../../hoc'
import { useTranslation, type TranslationKey } from '../../i18n'
import { en as enDict } from '../../i18n/locales'

type JobKey = keyof typeof enDict.experience.jobs

const jobKeyMap: Record<string, JobKey> = {
  'Acid Labs': 'acidLabs',
  Treinta: 'treinta',
  'It Globers': 'itGlobers',
  Softgic: 'softgic',
  Mantum: 'mantum',
  Freelancer: 'freelancer',
  Sena: 'sena',
}

const Experience: FC = () => {
  const { t, ts } = useTranslation()

  const experienceTitle = ts('experience.title')

  const translatedExperiences = useMemo(() => {
    return experiences.map(exp => {
      const jobKey = jobKeyMap[exp.company_name]
      if (jobKey) {
        const titleKey = `experience.jobs.${jobKey}.title` as TranslationKey
        const dateKey = `experience.jobs.${jobKey}.date` as TranslationKey
        const pointsKey = `experience.jobs.${jobKey}.points` as TranslationKey

        const translatedTitle = t(titleKey)
        const translatedDate = t(dateKey)
        const translatedPoints = t(pointsKey)

        return {
          ...exp,
          title: typeof translatedTitle === 'string' ? translatedTitle : exp.title,
          date: typeof translatedDate === 'string' ? translatedDate : exp.date,
          points: Array.isArray(translatedPoints) ? [...translatedPoints] : exp.points,
        }
      }
      return exp
    })
  }, [t])

  return (
    <ExperienceContainer data-testid='experience'>
      <Title>
        <h2 style={{ textAlign: 'center' }}>{experienceTitle}</h2>
      </Title>
      <TimelineContainer>
        <VerticalTimeline>
          {translatedExperiences.map(experience => (
            <ExperienceCard
              key={`${experience.company_name}-${experience.date}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </TimelineContainer>
    </ExperienceContainer>
  )
}

export default SectionWrapper(Experience, 'work')
