const Button = (props) => {
    return (
      <a
        href="https://github.com/ryanbritodev/portfolio-react"
        className="bg-black flex items-center md:bg-fiap text-white font-montserrat font-semibold py-2 px-7 w-36 rounded md:ml-8 
                   hover:bg-[#b3184a] duration-500 ease-in-out
                   active:bg-[#8a1138] active:text-white focus:bg-[#b3184a] focus:ring-4 focus:ring-[#e4336c] focus:outline-none"
      >
        {props.children}
      </a>
    );
  };
  
  export default Button;
  