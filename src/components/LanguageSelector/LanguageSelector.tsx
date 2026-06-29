import { FC } from 'react'
import { useTranslation, type Language } from '../../i18n'
import { LanguageSelectorProps } from './interfaces'
import { SelectorContainer, LanguageButton, Separator } from './LanguageSelector.styled'

const LanguageSelector: FC<LanguageSelectorProps> = ({ dataTestId = 'language-selector' }) => {
  const { language, setLanguage, t } = useTranslation()

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const labelText = t('languageSelector.label')
  const ariaLabel = typeof labelText === 'string' ? labelText : 'Select language'

  return (
    <SelectorContainer data-testid={dataTestId} role='group' aria-label={ariaLabel}>
      <LanguageButton
        type='button'
        $active={language === 'en'}
        onClick={() => handleLanguageChange('en')}
        aria-pressed={language === 'en'}
        aria-label='English'
      >
        EN
      </LanguageButton>
      <Separator aria-hidden='true'>|</Separator>
      <LanguageButton
        type='button'
        $active={language === 'es'}
        onClick={() => handleLanguageChange('es')}
        aria-pressed={language === 'es'}
        aria-label='Espanol'
      >
        ES
      </LanguageButton>
    </SelectorContainer>
  )
}

export default LanguageSelector
