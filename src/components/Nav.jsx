import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h1>RB</h1>
            <ul>
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
        </nav>
    );
}

export default Nav;