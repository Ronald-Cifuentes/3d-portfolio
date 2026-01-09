import styled, { keyframes } from 'styled-components'
import { styles } from '../../styles'

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
export const StyledContentContainer = styled.section`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

export const StyledHeroContainer = styled.div`
  position: absolute;
  inset: 0;
  top: 120px;
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;

  @media (min-width: 640px) {
    padding: 0 4rem;
  }
`

export const StyledLine = styled.div`
  width: 1px;
  height: 13rem;
  animation: ${bgAnimation} 4s ease-in-out infinite;
`

export const StyledTitle = styled.h1`
  ${styles.heroHeadText}
  color: white;
`

export const RainbowText = styled.span`
  font-family: Oswald;
  font-size: 6.25rem;
  animation: ${colorAnimation} 4s ease-in-out infinite;
`
export const StyledSubtitle = styled.p`
  ${styles.heroSubText}
  margin-top: 0.5rem;
  color: #dfd9ff;
`

export const StyledHeroFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
`

export const StyledHeroContent = styled.div`
  margin-top: 1.25rem;
`

export const StyledResponsiveBreak = styled.br`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`

export const StyledMainContainer = styled.div`
  position: absolute;
  inset: 0;
  top: 120px;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;

  @media (min-width: 640px) {
    padding: 0 4rem;
  }
`
