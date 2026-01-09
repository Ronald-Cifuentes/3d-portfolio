import { BrowserRouter } from 'react-router-dom'
import {
  Skills,
  // Contact,
  Content,
  Experience,
  Navbar,
  // Tech,
  // Projects,
  // StarsCanvas,
} from './components'
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
        {/* <Tech />
        <Projects />
        <StarsContainer>
          <Contact />
          <StarsCanvas />
        </StarsContainer> */}
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
