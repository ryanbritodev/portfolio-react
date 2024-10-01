import Footer from './components/Footer'
import Nav from './components/Nav'
import Particle from './components/Particle'
import { Outlet } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Particle />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
