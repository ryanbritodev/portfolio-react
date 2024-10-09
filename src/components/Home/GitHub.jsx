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
      if (window.innerWidth < 530) {
        setFontSize(7.8); 
      } else {
        setFontSize(16);
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
        year={new Date().getFullYear()}
        errorMessage="Erro ao carregar o Calendário de Contribuições do GitHub"
        loadingDataText="Carregando..."
      />
    </div>
  );
}

export default Github;
