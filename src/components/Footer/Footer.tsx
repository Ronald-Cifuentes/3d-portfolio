import { List } from './Footer.const'
import { FooterContainer, SocialList } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialList>
        {List.map(item => (
          <li key={item.link}>
            <a target='_blank' rel='noopener noreferrer' href={item.link}>
              {item.icon}
            </a>
          </li>
        ))}
      </SocialList>
    </FooterContainer>
  )
}

export default Footer
