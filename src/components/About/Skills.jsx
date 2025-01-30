import { motion } from "framer-motion";
import { BsFeather } from "react-icons/bs";
import { FaHtml5, FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiDell, SiFirefoxbrowser, SiGit, SiGithub, SiIntellijidea, SiPycharm, SiTailwindcss, SiWakatime, SiWindows11 } from "react-icons/si"; 
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { SlSpeech } from "react-icons/sl";
import { VscVscode } from "react-icons/vsc";

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
              <BsFeather size="40px" />
              Tkinter
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <FaJava size="40px" />
              Java
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <GrMysql size="40px" />
              MySQL
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
            <span className="text-fiap font-montserrat font-bold text-2xl w-full text-center md:w-fit">Internet das Coisas (IoT)</span>
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
              <SlSpeech size="40px" />
              ThingSpeak
            </li>
          </ul>

          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-black p-8 rounded-2xl">
            <span className="text-fiap font-montserrat font-bold text-2xl w-full text-center md:w-fit">Outros</span>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiGit size="40px" />
              Git
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiGithub size="40px" />
              GitHub
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiWakatime size="40px" />
              Wakatime
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiDell size="40px" />
              Dell G15
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiWindows11 size="40px" />
              Windows 11
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiFirefoxbrowser size="40px" />
              Firefox
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <VscVscode size="40px" />
              VsCode
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiPycharm size="40px" />
              Pycharm
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <SiIntellijidea size="40px" />
              Intellij
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;