import Logo from "../assets/svg/Logo.svg"

function Footer() {
    return (
        <footer className="footer bg-footer text-base-content p-10">
            <aside>
                <img src={Logo} alt="Logo Portfólio" className="w-16"/>
                <p>
                Desenvolvido por Ryan Brito
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
}

export default Footer;