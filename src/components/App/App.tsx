import { FC } from 'react'
import { AppProps } from './interfaces'
import './App.css'
import React from 'react'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return <div data-testid={dataTestId}>Hi</div>
}

export default App
