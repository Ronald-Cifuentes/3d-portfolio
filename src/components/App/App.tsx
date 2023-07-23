import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import Background from '../Background'
import Counter from '../Counter'
import Footer from '../Footer/Footer'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Background />
      <Footer />
      <Counter />
    </AppContainer>
  )
}

export default App
