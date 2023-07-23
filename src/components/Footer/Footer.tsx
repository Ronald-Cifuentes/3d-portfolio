import { FC } from 'react'
import { A, FooterContainer, Li, Ul } from './Footer.styled'
import { FooterProps } from './interfaces'
import { List } from './Footer.const'

const Footer: FC<FooterProps> = ({ dataTestId = 'footer' }) => {
  return (
    <FooterContainer data-testid={dataTestId}>
      <Ul>
        {List.map((item, ind) => (
          <Li key={`item-${ind}`}>
            <A target='_black' href={item.link}>
              {item.icon}
            </A>
          </Li>
        ))}
      </Ul>
    </FooterContainer>
  )
}

export default Footer
