import styled, { css } from 'styled-components'

export const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1.25rem /* 20px */;
  padding-bottom: 1.25rem /* 20px */;
  position: fixed;
  top: 0px;
  z-index: 20;
  ${({ $scrolled }) =>
    $scrolled
      ? css`
          background-color: rgb(5 8 22 / 1);
        `
      : css`
          background-color: transparent;
        `}
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem /* 24px */;
  @media (min-width: 640px) {
    padding-left: 4rem /* 64px */;
    padding-right: 4rem /* 64px */;
  }
`

export const NavbarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 80rem /* 1280px */;
  margin-left: auto;
  margin-right: auto;
`
