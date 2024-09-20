import { Link } from "react-router-dom";
import HomeIcon from "../assets/svg/Home.svg";
import SilhuetaIcon from "../assets/svg/Silhueta.svg";
import CodigoIcon from "../assets/svg/Código.svg";
import ContatoIcon from "../assets/svg/Contato.svg";

function Nav() {
    return (
        <nav className="navbar text-white p-6 md:px-20 font-montserrat">
            <div className="navbar-start">
                <h1 className="text-4xl font-bold text-fiap">RB</h1>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal text-2xl text-white px-1 space-x-4">
                    <li>
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={HomeIcon} alt="Home Icon" className="w-6 h-6"/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="flex items-center space-x-2">
                            <img src={SilhuetaIcon} alt="Sobre Icon" className="w-6 h-6" />
                            <span>Sobre</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projetos" className="flex items-center space-x-2">
                            <img src={CodigoIcon} alt="Projetos Icon" className="w-6 h-6" />
                            <span>Projetos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato" className="flex items-center space-x-2">
                            <img src={ContatoIcon} alt="Contato Icon" className="w-6 h-6" />
                            <span>Contato</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;