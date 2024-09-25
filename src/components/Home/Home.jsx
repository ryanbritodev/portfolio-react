import MaoIcon from "../../assets/svg/Mão.svg";
import Type from "../Type";
import Ryan from "../../assets/svg/Ryan.svg";
import RyanProfile from "../../assets/img/Ryan.png";
import Github from "./GitHub";

function Home() {
    return (
        <>
        <header className="flex flex-col w-full items-center mt-28 py-10 px-7 md:flex-row md:justify-between md:px-20 md:mt-44 lg:px-44 max-w-screen-2xl mx-auto">
            <div className="flex flex-col text-start text-white justify-center items-center w-full md:items-start">
                <div className="flex items-center space-x-3">
                    <h1 className="text-4xl text-start font-krona text:text-[2.4rem] md:text-4xl">Olá!</h1>
                    <img src={MaoIcon} alt="Mão Icon" className="wave w-14 h-14 mb-3 md:w-16 md:h-16" />
                </div>
                <h1 className="text-3xl font-krona leading-normal w-full text-center md:text-left text:text-[2.4rem] md:text-4xl md:leading-normal">
                    Meu nome é <span className="text-fiap whitespace-nowrap">Ryan Brito</span>
                </h1>
                <div className="flex text-center mt-12 mb-16 h-10 text-2xl text:text-4xl md:text-start">
                    <Type/>
                </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0 md:w-1/2 md:justify-end">
                <img src={Ryan} alt="Desenho Ryan" className="w-64 h-64 text:w-80 text:h-80 md:w-96 md:h-full" />
            </div>
        </header>
        
        <section className="flex flex-col items-center p-8 py-24 text-white md:flex-row md:justify-between md:items-center md:px-20 md:py-36 lg:px-32 max-w-screen-2xl mx-auto">
            <div className="text-xl text-justify w-full md:w-1/2 md:text-justify">
                <h1 className="text-xl text-center font-krona mb-10 text:text-2xl md:text-3xl">UM POUCO MAIS <span className="text-fiap">SOBRE MIM</span></h1>
                <p className="mb-6">
                    Nascido e criado em <span className="text-fiap font-bold">Santo André/SP</span>, tenho 19 anos e atuo como Estagiário de TI e Estudante de Engenharia de Software na <span className="text-fiap font-bold">FIAP.</span>
                </p>
                <p className="mb-6">
                    Atualmente estou no <span className="text-fiap font-bold">2° semestre</span> e sempre busco aprender e aprimorar minhas habilidades no Mundo da <span className="text-fiap font-bold">tecnologia.</span>
                </p>
                <p className="mb-6">
                    Um dos meus maiores interesses é o <span className="text-fiap font-bold">Desenvolvimento de Sistemas IoT (Internet of Things)</span>, pois acredito que essa tecnologia pode transformar o modo como interagimos com o mundo à nossa volta.
                </p>
                <p>
                    Além da <span className="text-fiap font-bold">programação</span>, adoro ouvir <span className="text-fiap font-bold">rock</span> e <span className="text-fiap font-bold">jogar videogame</span> nas horas vagas, o que sempre me inspira a ser criativo e focado nos projetos que estou desenvolvendo.
                </p>
            </div>
            <div className="flex justify-end mt-10 md:mt-0 md:w-1/2 pl-6">
                <img src={RyanProfile} alt="Foto de Perfil Ryan" className="w-80 h-auto xl:w-full md:max-w-md"/>
            </div>
        </section>

        <section className="flex flex-col justify-center p-10 text-white mb-5 max-w-screen-2xl mx-auto">
            <h1 className="font-krona text-white text-xl text-center mb-3 text:text-3xl">
                Minhas <strong className="flex text-fiap justify-center">CONTRIBUIÇÕES</strong>
            </h1>
            <div className="w-full max-w-4xl mx-auto">
                <Github />
            </div>
        </section>
        </>
    );
}

export default Home;
