import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [fontSize, setFontSize] = useState(getFontSize());

  // Função para determinar o tamanho da fonte com base na largura da tela
  function getFontSize() {
    const width = window.innerWidth;
    if (width < 768) {
      return 10; 
    } else if (width >= 768 && width < 1200) {
      return 20; 
    } else {
      return 30; 
    }
  }

  // Atualiza o tamanho da fonte quando a janela é redimensionada
  useEffect(() => {
    function handleResize() {
      setFontSize(getFontSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <GitHubCalendar
        username="ryanbritodev"
        blockSize={15}
        blockMargin={6}
        color="#E4336C"
        fontSize={fontSize}
      />
    </div>
  );
}

export default Github;
