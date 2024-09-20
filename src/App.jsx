import Footer from './components/Footer'
import Nav from './components/Nav'
import Particle from './components/Particle'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Particle/>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App