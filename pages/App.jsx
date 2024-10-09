import Footer from '../src/components/Footer';
import Nav from '../src/components/Nav';
import Particle from '../src/components/Particle';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop';
import '../src/index.css';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Particle />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
