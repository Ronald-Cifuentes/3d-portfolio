import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import Background from '../Background'
import Counter from '../Counter'
import Footer from '../Footer/Footer'
import Content from '../Home'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Content />
      <Background />
      <Footer />
      <Counter />
    </AppContainer>
  )
}

export default App
