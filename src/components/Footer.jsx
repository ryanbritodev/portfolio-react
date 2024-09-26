import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";


function Footer() {
    return (
    <footer className="flex flex-col items-center mt-20 text-center text-surface bg-black text-white">
    <div className="container pt-4">
        <div className="flex justify-center space-x-2">
        <a
            href="https://wa.me/5511970656325"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-fiap dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-5 [&>svg]:w-5">
            <BsWhatsapp size={32} color="currentColor" />
            </span>
        </a>
        <a
            href="https://www.instagram.com/euryanbrito"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-fiap dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <BsInstagram size={32} color="currentColor"/>
            </span>
        </a>

        <a
            href="https://www.linkedin.com/in/ryanbritodev/"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-fiap dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <BsLinkedin size={32} color="currentColor"/>
            </span>
        </a>

        <a
            href="https://www.github.com/ryanbritodev"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-fiap dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <BsGithub size={32} color="currentColor"/>
            </span>
        </a>
        </div>
    </div>
    <div className="flex justify-around w-full bg-black/5 p-4 text-center font-semibold">
        <a href="https://www.github.com/ryanbritodev" className="mb-2">Desenvolvido por Ryan Brito © 2024</a>
    </div>
    </footer>
    );
}

export default Footer;