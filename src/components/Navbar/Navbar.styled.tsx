import styled from 'styled-components'

export const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 50px;
  position: fixed;
  top: 0;
  z-index: 20;
  background: ${({ $scrolled }) => ($scrolled ? '#050816' : 'transparent')};
  transition: background 0.3s ease;

  @media (max-width: 640px) {
    padding: 20px 25px;
  }
`

export const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

export const DesktopNavList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: row;
  gap: 40px;

  @media (min-width: 640px) {
    display: flex;
  }
`

export const NavListItem = styled.li<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? '#fff' : '#aaa6c3')};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (min-width: 640px) {
    display: none;
  }
`

export const ToggleButton = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
`

export const MobileMenu = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  padding: 25px;
  background: linear-gradient(90deg, rgba(25, 25, 25, 0.9) 0%, rgba(9, 9, 121, 0.8) 100%);
  position: absolute;
  top: 80px;
  right: 0;
  margin: 0 15px;
  min-width: 140px;
  z-index: 10;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`

export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const MobileNavListItem = styled.li<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? '#fff' : '#aaa6c3')};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
