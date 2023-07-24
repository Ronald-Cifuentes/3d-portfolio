import styled, { keyframes } from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem; /* 20px */
  position: absolute;
  inset: 0px;
  top: 120px;
  max-width: 80rem; /* 1280px */
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem; /* 24px */
  padding-right: 1.5rem; /* 24px */
  @media (min-width: 640px) {
    padding-left: 4rem; /* 64px */
    padding-right: 4rem; /* 64px */
  }
`

const Bg = keyframes`
    0% {background: #a0d468;}
    20% {background: #4fc1e9;}
    40% {background: #ffce54;}
    60% {background: #fc6e51;}
    80% {background: #ed5565;}
    100% {background: #ac92ec;}
`

export const RainbowShape = styled.div`
  width: 0.25rem; /* 4px */
  height: 13rem; /* 208px */
  font-family: Oswald;
  font-size: 100px;
  animation: ${Bg} 4s linear infinite;
  -webkit-animation: ${Bg} 4s ease-in-out infinite;
`

export const SpecialTitle = styled.h1`
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  font-weight: 900;
  color: white;
  margin-top: 0.5rem; /* 8px */
  line-height: 98px;
  font-size: 80px;
`

const Color = keyframes`
    0% {color: #a0d468;}
    20% {color: #4fc1e9;}
    40% {color: #ffce54;}
    60% {color: #fc6e51;}
    80% {color: #ed5565;}
    100% {color: #ac92ec;}
`

export const RainbowText = styled.span`
  font-family: Oswald;
  font-size: 100px;
  animation: ${Color} 4s linear infinite;
  -webkit-animation: ${Color} 4s ease-in-out infinite;
`

export const TextDescription = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 500;
  margin-top: 0.5rem; /* 8px */
`
