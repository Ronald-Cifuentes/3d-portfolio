import styled from 'styled-components'

export const BackgroundContainer = styled.section`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  transition: 0.5s;
  z-index: 2;
  &.active {
    right: 300px;
  }
  @media (max-width: 991px) {
    padding: 40px;
  }
`
