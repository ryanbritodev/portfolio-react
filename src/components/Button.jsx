const Button = (props) => {
  return (
    <a
      href="https://github.com/ryanbritodev/portfolio-react"
      className="bg-black flex items-center md:bg-[#FF6201] text-white font-montserrat font-semibold py-2 px-7 w-36 rounded md:ml-8
                 hover:bg-[#a8440b] duration-500 ease-in-out
                 active:bg-[#D44F00] active:text-white focus:bg-[#FF6201] focus:ring-4 focus:ring-[#FFAD80] focus:outline-none"
    >
      {props.children}
    </a>
  );
};

export default Button;