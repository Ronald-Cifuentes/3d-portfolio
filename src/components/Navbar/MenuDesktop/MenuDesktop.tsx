import { FC } from 'react'
import { MenuA, MenuDesktopContainer, MenuLi } from './MenuDesktop.styled'
import { MenuDesktopProps } from './interfaces'
import { NavLink } from '../interfaces'
import { navLinks } from '../Navbar.const'

const MenuDesktop: FC<MenuDesktopProps> = ({
  dataTestId = 'menu-desktop',
  dataTestIdLinks = 'menu-btn',
  active,
  setActive,
}) => {
  return (
    <MenuDesktopContainer data-testid={dataTestId}>
      {navLinks.map((nav: NavLink) => (
        <MenuLi
          data-testid={dataTestIdLinks}
          key={nav.id}
          $sw={active === nav.title}
          onClick={() => setActive && setActive(nav.title)}
        >
          <MenuA href={`#${nav.id}`}>{nav.title}</MenuA>
        </MenuLi>
      ))}
    </MenuDesktopContainer>
  )
}

export default MenuDesktop
