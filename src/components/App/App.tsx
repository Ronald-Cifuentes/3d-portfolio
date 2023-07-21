import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import Background from '../Background'
import Counter from '../Counter'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Counter />
      <Background />
    </AppContainer>
  )
}

export default App
