import { BrowserRouter } from 'react-router-dom'
import Skills from './components/Skills'
import Content from './components/Content'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import { AppContainer, HeroSection } from './App.styled'

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <HeroSection $height='850px'>
          <Navbar />
          <Content />
          <Background />
          <Footer />
        </HeroSection>

        <Experience />
        <Skills />
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
