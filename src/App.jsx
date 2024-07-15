import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Stat from './Components/Home/Stat/Stat'
import Hero from './Components/Home/Hero/Hero'
import About from './Components/Home/About/About'
import Values from './Components/Home/Values/Values'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stat />
      <Values />
    </>
  )
}

export default App
