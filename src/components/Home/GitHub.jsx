import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [fontSize, setFontSize] = useState(12);
  
  // Nova paleta de cores baseada em FF6201 (laranja)
  const temaPersonalizado = {
    light: ['#151b23', '#FF6201', '#FF8134', '#FFA066', '#FFBD99'],
    dark: ['#151b23', '#FF6201', '#FF8134', '#FFA066', '#FFBD99'],
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 530) {
        setFontSize(7.6);
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
    <div className="flex justify-center">
      <GitHubCalendar
        fontSize={fontSize}
        theme={temaPersonalizado}
        username="ryanbritodev"
        year={new Date().getFullYear()}
        errorMessage="Erro ao carregar o Calendário de Contribuições do GitHub"
        loadingDataText="Carregando..."
      />
    </div>
  );
}

export default Github;