import { FC, useEffect, useState } from 'react'
import { NavbarContainer, NavbarDiv } from './Navbar.styled'
import { NavbarProps } from './interfaces'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Navbar: FC<NavbarProps> = ({ dataTestId = 'navbar' }) => {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer data-testid={dataTestId} $scrolled={scrolled}>
      <NavbarDiv>
        <MenuDesktop {...{ $active: active, setActive }} />
        <MenuMobile {...{ $active: active, setActive }} />
      </NavbarDiv>
    </NavbarContainer>
  )
}

export default Navbar
