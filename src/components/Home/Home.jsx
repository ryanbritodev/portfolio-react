import MaoIcon from "../../assets/svg/Mão.svg";
import Type from "../Type";
import Ryan from "../../assets/svg/Ryan.svg";
import RyanProfile from "../../assets/img/Ryan.png";
import Github from "./GitHub";

function Home() {
    return (
        <>
        <header className="flex flex-col w-full items-center mt-20 py-10 px-7">
            <div className="flex flex-col text-start text-white justify-center items-center w-full">
                <div className="flex items-center space-x-3">
                    <h1 className="text-4xl text-start font-krona">Olá!</h1>
                    <img src={MaoIcon} alt="Mão Icon" className="wave w-14 h-14 mb-3 " />
                </div>
                <h1 className="text-3xl font-krona leading-normal w-full text-center md:text-left">
                    Meu nome é <span className="text-fiap whitespace-nowrap">Ryan Brito</span>
                </h1>
                <div className="flex text-center mt-12 mb-16 h-10 text-2xl">
                    <Type/>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <img src={Ryan} alt="Desenho Ryan" className="w-64 h-64" />
            </div>
        </header>
        
        <section className="flex flex-col items-center p-8 py-24 text-white">
            <div className="text-xl text-justify w-full ">
                <h1 className="text-xl text-center font-krona mb-10">UM POUCO MAIS <span className="text-fiap">SOBRE MIM</span></h1>
                <p className="mb-6">
                    Nascido e criado em <span className="text-fiap font-bold">Santo André/SP</span>, tenho 19 anos e atuo como Estagiário de TI e Estudante de Engenharia de Software na <span className="text-fiap font-bold">FIAP.</span>
                </p>
                <p className="mb-6">
                    Atualmente estou no <span className="text-fiap font-bold">2° semestre</span> e sempre busco aprender e aprimorar minhas habilidades no Mundo da <span className="text-fiap font-bold">tecnologia.</span>
                </p>
                <p className="mb-6">
                    Um dos meus maiores interesses é o <span className="text-fiap font-bold">Desenvolvimento de Sistemas IoT (Internet of Things)</span>, pois acredito que essa tecnologia pode transformar o modo como interagimos com o mundo à nossa volta.
                </p>
                <p className="mb-6">
                    Além da <span className="text-fiap font-bold">programação</span>, adoro ouvir <span className="text-fiap font-bold">rock</span> e <span className="text-fiap font-bold">jogar videogame</span> nas horas vagas, o que sempre me inspira a ser criativo e focado nos projetos que estou desenvolvendo.
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <img src={RyanProfile} alt="Foto de Perfil Ryan" className="w-full h-full" />
            </div>
        </section>
        <section className="flex flex-col justify-center p-10 text-white mb-5">
            <h1 className="font-krona text-white text-xl text-center mb-3">
                Minhas <strong className="flex text-fiap justify-center">CONTRIBUIÇÕES</strong>
            </h1>
            <Github />
        </section>
        </>
    );
}

export default Home;

