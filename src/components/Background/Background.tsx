import { FC } from 'react'
import { BackgroundContainer } from './Background.styled'
import BgVideo from './BgVideo'
import { BackgroundProps } from './interfaces'

const Background: FC<BackgroundProps> = ({ dataTestId = 'background' }) => {
  return (
    <BackgroundContainer data-testid={dataTestId}>
      <BgVideo />
    </BackgroundContainer>
  )
}

export default Background
