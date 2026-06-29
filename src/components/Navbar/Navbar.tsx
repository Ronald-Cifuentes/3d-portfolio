import { FC, useMemo, useEffect, useState } from 'react'
import { NavbarProps } from './interfaces'
import { menu, close } from '../../assets'
import { assetSrc } from '../../utils/assetSrc'
import { useTranslation, type TranslationKey } from '../../i18n'
import LanguageSelector from '../LanguageSelector'
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

interface NavLink {
  id: string
  titleKey: TranslationKey
}

const navLinkKeys: NavLink[] = [
  { id: 'work', titleKey: 'nav.work' },
  { id: 'skills', titleKey: 'nav.skills' },
  { id: 'projects', titleKey: 'nav.projects' },
  { id: 'contact', titleKey: 'nav.contact' },
]

const Navbar: FC<NavbarProps> = ({ dataTestId = 'navbar' }) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { ts } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const translatedNavLinks = useMemo(() => {
    return navLinkKeys.map(nav => ({
      id: nav.id,
      title: ts(nav.titleKey),
    }))
  }, [ts])

  const menuAltText = ts('nav.menuAlt')

  return (
    <NavbarContainer data-testid={dataTestId} $scrolled={scrolled}>
      <NavbarContent>
        <DesktopNavList>
          {translatedNavLinks.map(nav => (
            <NavListItem
              key={nav.id}
              $active={active === nav.title}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </NavListItem>
          ))}
          <LanguageSelector />
        </DesktopNavList>

        <MobileMenuContainer>
          <LanguageSelector />
          <ToggleButton
            src={assetSrc(toggle ? close : menu)}
            alt={menuAltText}
            onClick={() => setToggle(!toggle)}
          />

          <MobileMenu $show={toggle}>
            <MobileNavList>
              {translatedNavLinks.map(nav => (
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
