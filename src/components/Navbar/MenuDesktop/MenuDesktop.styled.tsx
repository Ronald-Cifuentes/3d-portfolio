import styled from 'styled-components'

export const MenuDesktopContainer = styled.ul`
  list-style-type: none;
  display: none;
  flex-direction: row;
  gap: 2.5rem /* 40px */;
  @media (min-width: 640px) {
    display: flex;
  }
`

export const MenuLi = styled.li<{ $sw: boolean }>`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  color: rgb(255 255 255 / 1);
  &:hover {
    color: rgb(255 255 255 / 1);
  }
`
export const MenuA = styled.a`
  color: inherit;
  text-decoration: inherit;
`
