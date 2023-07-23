import styled from 'styled-components'

export const FooterContainer = styled.section`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  &.active {
    right: 300px;
  }
  @media (max-width: 991px) {
    &,
    & header {
      padding: 40px;
    }
  }
`

export const Ul = styled.ul`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const Li = styled.li`
  list-style: none;
  width: 40px;
`

export const A = styled.a`
  display: inline-block;
  transform: scale(0.5);
  transition: 0.5s;
  &:hover {
    transform: scale(0.5) translateY(-15px);
  }
`
