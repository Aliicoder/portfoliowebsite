import './index.css'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Footer from './components/Footer';
import Container from './components/Container';
function App() {
  return (
      <Container>
        <Intro />
        <About />
        <Skills />
        <Journey />
        <Footer />
      </Container>   
  )
}

export default App
