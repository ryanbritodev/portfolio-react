import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar text-white p-6 md:px-20 font-montserrat">
            <div className="navbar-start">
                <h1 className="text-4xl font-bold">RB</h1>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal text-2xl text-white px-1 space-x-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;