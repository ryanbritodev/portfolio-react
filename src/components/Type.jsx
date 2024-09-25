import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-fiap font-krona">
      <Typewriter
        options={{
          strings: [
            "Engenharia de Software",
            "Estagiário de TI",
            "Desenvolvedor",
            "Tecnologia",
            "Programação"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
