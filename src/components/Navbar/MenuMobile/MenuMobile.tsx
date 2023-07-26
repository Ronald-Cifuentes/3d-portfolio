import { FC, useState } from 'react'
import { MenuList, MenuListA, MenuListUl, MenuMobileContainer } from './MenuMobile.styled'
import { MenuMobileProps } from './interfaces'
import { navLinks } from '../Navbar.const'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'

const MenuMobile: FC<MenuMobileProps> = ({ dataTestId = 'menu-mobile', setActive }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <MenuMobileContainer data-testid={dataTestId}>
      {toggle ? <Close onClick={handleToggle} /> : <Menu onClick={handleToggle} />}
      <MenuList $toggle={!toggle}>
        <MenuListUl>
          {navLinks.map(nav => (
            <li
              key={nav.id}
              onClick={() => {
                setToggle(!toggle)
                setActive && setActive(nav.title)
              }}
            >
              <MenuListA href={`#${nav.id}`}>{nav.title}</MenuListA>
            </li>
          ))}
        </MenuListUl>
      </MenuList>
    </MenuMobileContainer>
  )
}

export default MenuMobile
