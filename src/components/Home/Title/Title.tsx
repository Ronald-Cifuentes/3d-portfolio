import { FC } from 'react'
import {
  RainbowShape,
  RainbowText,
  SpecialTitle,
  TextDescription,
  TitleContainer,
} from './Title.styled'
import { TitleProps } from './interfaces'

const CONFIG = {
  text1: "Hi, I'm ",
  text2: 'Ronald',
  text3: 'Web Developer, Designer UX / UI',
  text4: 'Web3, Javascript Specialist',
}

const Title: FC<TitleProps> = ({ dataTestId = 'title' }) => {
  return (
    <TitleContainer data-testid={dataTestId}>
      <RainbowShape />

      <div>
        <SpecialTitle>
          {CONFIG.text1}
          <RainbowText>{CONFIG.text2}</RainbowText>
        </SpecialTitle>
        <TextDescription>
          {CONFIG.text3} <br className='sm:block hidden' />
          {CONFIG.text4}
        </TextDescription>
      </div>
    </TitleContainer>
  )
}

export default Title
