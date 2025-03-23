import React, { useEffect } from 'react';
import Logo from '../../assets/svg/Logo.svg';

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{ backgroundColor: '#612a0a' }}
    >
      <img src={Logo} alt="Logo" className="w-32 h-32 animate-spin" />
    </div>
  );
};

export default Preloader;
