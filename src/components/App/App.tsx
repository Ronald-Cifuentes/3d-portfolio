import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return <AppContainer data-testid={dataTestId}>Hi</AppContainer>
}

export default App
