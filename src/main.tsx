import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import GlobalStyle from './App.styled'
import { Provider } from 'react-redux'
import store from './Redux/store'

export default ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
