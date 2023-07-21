import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import Counter from '../Counter'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <h1>Hi</h1>
      This is a Redux Counter: <Counter />
    </AppContainer>
  )
}

export default App
