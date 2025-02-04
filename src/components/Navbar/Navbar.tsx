import { FC } from 'react'
import { NavbarProps } from './interfaces'
import { useEffect, useState } from 'react'
import { navLinks } from '../../constants'
import { menu, close } from '../../assets'
import {
  NavbarContainer,
  NavbarContent,
  DesktopNavList,
  NavListItem,
  MobileMenuContainer,
  ToggleButton,
  MobileMenu,
  MobileNavList,
  MobileNavListItem,
} from './Navbar.styled'

const Navbar: FC<NavbarProps> = ({ dataTestId = 'navbar' }) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer data-testid={dataTestId} $scrolled={scrolled}>
      <NavbarContent>
        <DesktopNavList>
          {navLinks.map(nav => (
            <NavListItem
              key={nav.id}
              $active={active === nav.title}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </NavListItem>
          ))}
        </DesktopNavList>

        <MobileMenuContainer>
          <ToggleButton src={toggle ? close : menu} alt='menu' onClick={() => setToggle(!toggle)} />

          <MobileMenu $show={toggle}>
            <MobileNavList>
              {navLinks.map(nav => (
                <MobileNavListItem
                  key={nav.id}
                  $active={active === nav.title}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </MobileNavListItem>
              ))}
            </MobileNavList>
          </MobileMenu>
        </MobileMenuContainer>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar
