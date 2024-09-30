import { motion } from "framer-motion";
import Skills from "./Skills";
import RyanCode from "../../assets/svg/Ryan-code.svg";

const About = () => {
  return (
    <div className="min-h-screen lg:px-1">
      <div className="flex flex-col justify-between md:pt-40 pt-28">
        <div className="flex flex-col px-10 mt-10">
          <div className="flex flex-col items-center md:flex-row max-w-screen-xl mx-auto">
            <div className="md:px-8">
              <motion.div
                className="md:w-96"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-2xl font-krona text-center md:text-left text-white font-bold md:text-4xl mb-8">
                  Quem <span className="text-fiap">sou eu?</span>
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1,
                    },
                  },
                }}
              >
                <h2 className="font-bold font-krona text-white text-center text-2xl md:text-4xl md:text-left mb-10">
                  Sou um
                  <span className="text-fiap"> Estudante de Engenharia de Software</span> apaixonado por
                  <span className="text-fiap"> Tecnologia.</span>
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
            >
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap">
                Atualmente, sou bacharelando em Engenharia de Software (2/8) na FIAP. Aqui, vivo uma jornada repleta de empolgação e dedicação para aprender mais sobre o mundo da tecnologia.
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-medium font-montserrat mb-5 flex-wrap">
                Além disso, atuo como Estagiário de TI na FIAP, oferecendo suporte técnico e contribuindo para a melhoria da infraestrutura tecnológica da instituição. Meu foco atual está em expandir meus conhecimentos em desenvolvimento de software, especialmente em temas como IoT e linguagens de programação.
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap">
                Fora do ambiente acadêmico e profissional, gosto de explorar novas tecnologias, desenvolver projetos desafiadores e me manter atualizado com as últimas tendências do setor de TI. Ansioso para aplicar meu conhecimento em projetos práticos e inovadores!
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.8,
                },
              },
            }}
            className="flex justify-center mt-10"
          >
            <img
              src={RyanCode}
              alt="Ryan codando"
              className="w-full max-w-screen-xl md:w-3/4 lg:w-1/2"
            />
          </motion.div>
          <div className="text-bold text-white text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
