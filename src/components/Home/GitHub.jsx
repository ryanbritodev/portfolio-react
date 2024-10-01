import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [fontSize, setFontSize] = useState(12);

  const temaFiap = {
    light: ['#151b23', '#A92A52', '#E4336C', '#EAB2C0', '#F6B2C5'],
    dark: ['#151b23', '#A92A52', '#E4336C', '#EAB2C0', '#F6B2C5'],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setFontSize(7); 
      } else {
        setFontSize(12);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <GitHubCalendar 
        fontSize={fontSize} 
        theme={temaFiap} 
        username="ryanbritodev" 
      />
    </div>
  );
}

export default Github;
