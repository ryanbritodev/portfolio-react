import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiEspressif } from "react-icons/si";

const Skills = () => {
  return (
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
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full py-28">
        <div className="mx-auto flex flex-col max-w-screen-xl justify-center">
          <p className="font-bold font-krona text-fiap pb-4 text-center">Habilidades</p>

          <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-black p-8 rounded-2xl">
            <span className="text-fiap font-montserrat font-bold text-2xl w-full text-center md:w-fit">Back-end</span>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaPython size="40px" />
              Python
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaNode size="40px" />
              Node JS
            </li>
          </ul>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-black p-8 rounded-2xl">
            <span className="text-fiap font-montserrat font-bold  text-2xl w-full text-center md:w-fit">Front-end</span>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaReact size="40px" />
              React JS
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaHtml5 size="40px" />
              HTML5
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaCss3Alt size="40px" />
              CSS3
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiJavascript size="40px" />
              JavaScript
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiTailwindcss size="40px" />
              Tailwind CSS
            </li>
          </ul>

          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-black p-8 rounded-2xl">
            <span className="text-fiap font-montserrat font-bold text-2xl w-full text-center md:w-fit">Outros</span>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiCplusplus size="40px"/>
              C++
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiArduino  size="40px" />
              Arduino
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiEspressif size="40px" />
              ESP32
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <FaGithub size="40px" />
              Git/GitHub
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;