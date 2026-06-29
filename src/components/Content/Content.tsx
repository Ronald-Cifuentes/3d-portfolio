import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from '../../i18n'

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const colorAnimation = keyframes`
  0% { color: #a0d468; }
  20% { color: #4fc1e9; }
  40% { color: #ffce54; }
  60% { color: #fc6e51; }
  80% { color: #ed5565; }
  100% { color: #ac92ec; }
`

const bgAnimation = keyframes`
  0% { background: #a0d468; }
  20% { background: #4fc1e9; }
  40% { background: #ffce54; }
  60% { background: #fc6e51; }
  80% { background: #ed5565; }
  100% { background: #ac92ec; }
`

const Container = styled.div`
  position: absolute;
  inset: 0;
  top: 120px;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;
  z-index: 10;

  @media (min-width: 640px) {
    padding: 0 4rem;
  }
`

const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
`

const RainbowBar = styled.div`
  width: 0.25rem;
  height: 13rem;
  animation: ${bgAnimation} 4s ease-in-out infinite;
  ${reducedMotion}
`

const ContentContainer = styled.div``

const Title = styled.h1`
  font-weight: 900;
  color: white;
  font-size: 40px;
  margin-top: 0.5rem;
  line-height: normal;

  @media (min-width: 450px) {
    font-size: 50px;
  }

  @media (min-width: 640px) {
    font-size: 60px;
  }

  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 98px;
  }
`

const RainbowSpan = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 100px;
  animation: ${colorAnimation} 4s ease-in-out infinite;
  ${reducedMotion}
`

const Description = styled.p`
  color: #dfd9ff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 0.5rem;

  @media (min-width: 450px) {
    font-size: 20px;
  }

  @media (min-width: 640px) {
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
  }
`

const HiddenBr = styled.br`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`

const Content = () => {
  const { ts } = useTranslation()

  const greeting = ts('content.greeting')
  const description = ts('content.description')
  const descriptionLine2 = ts('content.descriptionLine2')

  return (
    <Container>
      <EmptyDiv />
      <RainbowBar />
      <ContentContainer>
        <Title>
          {greeting} <RainbowSpan>Ronald</RainbowSpan>
        </Title>
        <Description>
          {description} <HiddenBr />
          {descriptionLine2}
        </Description>
      </ContentContainer>
    </Container>
  )
}

export default Content
