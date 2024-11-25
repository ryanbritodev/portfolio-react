import { useState } from "react";
import { AiFillGithub, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Curriculo from "../../assets/svg/Curriculo.svg"
import RyanPlanta from "../../assets/svg/Ryan-planta.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); // Modal para mensagem de erro
  const [success, setSuccess] = useState(false); // Modal para mensagem de enviado com sucesso

  const handleOpen = () => setOpen(!open);

  const handleSuccessClose = () => setSuccess(false); 

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      handleOpen(); // Abre o modal de erro se algum campo estiver vazio
      return;
    }

    // Parâmetros do formulário
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    // Envio de email via EmailJS
    emailjs
      .send(
        SERVICE_ID,     // Serviço
        TEMPLATE_ID,    // Modelo
        templateParams, // Parâmetros do template
        USER_ID         // ID do usuário
      )
      .then(
        (response) => {
          console.log("Email enviado com sucesso!", response.status, response.text);
          setName(""); // Limpa o nome
          setEmail(""); // Limpa o e-mail
          setMessage(""); // Limpa a mensagem
          setSuccess(true); // Abre o modal de sucesso
        },
        (error) => {
          console.log("Erro ao enviar o email!", error);
          handleOpen(); // Abre o modal de erro se tiver algum erro
        }
      );
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto mt-48 lg:mt-64 md:mt-52">
      <div className="text-center mb-20">
        <h1 className="font-krona font-semibold text-fiap text-3xl mb-5 px-3">
          ONDE ME ENCONTRAR
        </h1>
        <p className="text-lg font-montserrat text-white font-medium mb-6">
          Sinta-se livre para <span className="text-fiap font-semibold">conectar</span> comigo
        </p>
        <ul className="flex justify-center space-x-8">
          <li className="social-icons">
            <a
              href="https://github.com/ryanbritodev"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://wa.me/5511970656325"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ryanbritodev/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/euryanbrito"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mb-20">
        {/* Botão de download do currículo */}
        <a
          href="/CV Ryan LinkedIn.pdf" // Caminho relativo para o arquivo PDF na pasta public
          download
          className="flex items-center font-krona p-6  bg-fiap text-white rounded-md cursor-pointer hover:bg-[#c11b50] duration-200"
        >
          <img src={Curriculo} alt="Ícone de Currículo" className="h-6 mr-2" />
          Baixar Currículo
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-36">
        <div className="flex justify-center items-center lg:justify-end">
          <img
            src={RyanPlanta}
            alt="Ilustração de Ryan com planta"
            className="w-64 sm:w-96 lg:h-fit lg:w-full md:w-96"
          />
        </div>
        <div className="p-10 lg:p-8 md:p-20 mt-16 lg:mt-0">
          <h1 className="font-krona font-semibold text-white text-2xl md:text-3xl mb-5">
            Me envie uma mensagem! 👇
          </h1>
          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="text-lg font-montserrat text-white font-medium">Nome</label>
            <input
              type="text"
              name="user_name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full p-2 px-3 border font-montserrat font-medium border-white rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />

            <label className="text-lg font-montserrat font-medium text-white">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="user_email"
              className="w-full p-2 px-3 border font-montserrat font-medium border-white rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />

            <label className="text-lg font-montserrat font-medium text-white">Mensagem</label>
            <textarea
              name="message"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="font-montserrat font-medium w-full p-2 px-3 border border-white rounded-md focus:ring-2 focus:ring-fiap outline-none h-36 resize-none"
            />

            <input
              type="submit"
              value="Enviar"
              className="font-krona w-full p-3 mt-4 bg-fiap text-white rounded-md cursor-pointer hover:bg-[#c11b50] transition-all duration-200 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-[#c11b50]"
            />
          </form>
        </div>
      </div>

      {/* Modal de erro */}
      {open && (
        <div className="fixed z-[1000] inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="flex flex-col text-center items-center justify-center bg-black border-2 border-fiap rounded-badge text-white w-60 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto p-4 sm:p-12">
            <div className="font-krona p-4 text-sm sm:text-xl">
              Preencha todos os campos!
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleOpen}
                className="bg-fiap text-white text-sm sm:text-lg mt-4 font-krona hover:bg-[#c11b50] transition-all duration-200 hover:scale-105 transform p-2 rounded"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de sucesso */}
      {success && (
        <div className="fixed z-[1000] inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="flex flex-col text-center items-center justify-center bg-black border-2 border-fiap rounded-badge text-white w-60 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto p-4 sm:p-12">
            <div className="font-krona p-4 text-sm sm:text-xl">
              Mensagem enviada com sucesso!
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSuccessClose} // Fecha o modal
                className="bg-fiap text-white text-sm sm:text-lg mt-4 font-krona hover:bg-[#c11b50] transition-all duration-200 hover:scale-105 transform p-2 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
