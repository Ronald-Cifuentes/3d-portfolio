import { FC } from 'react'
import { AppProps } from './interfaces'
import './App.css'
import GlobalStyle from './App.styled'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <div data-testid={dataTestId}>
      <GlobalStyle />
      Hi
    </div>
  )
}

export default App
