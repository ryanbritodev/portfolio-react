import React, { useState, useEffect } from 'react';
import Footer from '../src/components/Footer';
import Nav from '../src/components/Nav';
import Particle from '../src/components/Particle';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop';
import Preloader from '../src/components/Preloader/Preloader.jsx';
import '../src/index.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  const handleLoadingFinish = () => {
    setShowPreloader(false);
  };
  
  return (
    <div>
      {showPreloader && <Preloader onFinish={handleLoadingFinish} />}
      <ScrollToTop />
      <Particle />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;