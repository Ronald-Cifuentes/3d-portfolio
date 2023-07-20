import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import GlobalStyle from './App.styled'

export default ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
