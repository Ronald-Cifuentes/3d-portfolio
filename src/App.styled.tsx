import styled from 'styled-components'

export const AppContainer = styled.div`
  position: relative;
  z-index: 0;
  background: #000;
`

export const HeroSection = styled.div<{ $height?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: ${props => props.$height || '850px'};
`

export const StarsContainer = styled.div`
  position: relative;
  z-index: 0;
`
