import './App.css'
import Nav from './components/Nav'
import Particle from './components/Particle'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Particle/>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App