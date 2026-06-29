import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'
import { useTranslation } from '../../i18n'
import './Skills.css'

const Skills = () => {
  const { t, ts } = useTranslation()

  const title = ts('skills.title')
  const paragraphs = t('skills.paragraphs')
  const paragraphArray = Array.isArray(paragraphs) ? paragraphs : []

  return (
    <div className='flex flex-col items-center gradient-box'>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{title}</h2>
      </motion.div>
      {paragraphArray.map(paragraph => (
        <motion.p
          key={paragraph}
          variants={fadeIn('up', 'tween', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  )
}

export default SectionWrapper(Skills, 'skills')
