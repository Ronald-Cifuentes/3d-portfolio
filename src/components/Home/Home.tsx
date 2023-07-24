import { FC } from 'react'
import { HomeContainer } from './Home.styled'
import { HomeProps } from './interfaces'
import Title from './Title'

const Home: FC<HomeProps> = ({ dataTestId = 'home' }) => {
  return (
    <HomeContainer data-testid={dataTestId}>
      <Title />
    </HomeContainer>
  )
}

export default Home
