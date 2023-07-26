import styled, { css } from 'styled-components'

export const MenuMobileContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 640px) {
    display: none;
  }
`

export const MenuList = styled.div<{ $toggle: boolean }>`
  ${({ $toggle }) =>
    $toggle
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`

export const MenuListUl = styled.ul`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  flex-direction: column;
  list-style-type: none;
  gap: 1rem;
  background: black;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 20px;
`

export const MenuListLi = styled.li`
  font-weight: 500;
`

export const MenuListA = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 24px;
`
