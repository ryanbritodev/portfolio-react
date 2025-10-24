import { motion } from "framer-motion";
import Skills from "./Skills";
import RyanCode from "../../assets/svg/Ryan-code.svg";

const About = () => {
  return (
    <div className="min-h-screen lg:px-1">
      <div className="flex flex-col justify-between md:pt-40 pt-28">
        <div className="flex flex-col px-10 mt-16">
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
                <h2 className="font-bold font-krona text-white text-center text-2xl md:text-4xl md:text-left mb-10 leading-tight">
                  <span className="text-fiap"> Estudante de Engenharia de Software</span> apaixonado por
                  <span className="text-fiap"> Tecnologia</span>
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
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap leading-tight">
                Atualmente, sou bacharelando em <span className="text-fiap font-bold">Engenharia de Software (4/8) na FIAP.</span> Aqui, vivo uma jornada repleta de empolgação e dedicação para aprender mais sobre o <span className="text-fiap font-bold">mundo da tecnologia.</span>
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-medium font-montserrat mb-5 flex-wrap leading-tight">
              Além disso, atuo como <span className="text-fiap font-bold">Estagiário de Dados no Itaú Unibanco</span>, atuando na squad de dados do setor de Pricing, contribuindo para a modernização e otimização dos processos de dados! 🧡
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap leading-tight">
                Fora do ambiente acadêmico e profissional, gosto de <span className="text-fiap font-bold">explorar novas tecnologias</span>, <span className="text-fiap font-bold">desenvolver projetos desafiadores</span> e me manter atualizado com as <span className="text-fiap font-bold">últimas tendências</span> do mercado de tecnologia.
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
            className="flex justify-center mt-14"
          >
            <img
              src={RyanCode}
              alt="Ryan codando"
              className="w-96 max-w-screen-xl"
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
