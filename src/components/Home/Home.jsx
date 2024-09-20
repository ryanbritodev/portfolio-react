import MaoIcon from "../../assets/svg/Mão.svg";
import Type from "../Type";
import Ryan from "../../assets/svg/Ryan.svg";
import RyanProfile from "../../assets/img/Ryan.png";
import Github from "./GitHub";

function Home() {
    return (
        <>
        <header className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:py-10 md:px-44">
            <div className="text-left text-white md:w-2/3 lg:w-3/4"> {/* Alterado aqui */}
                <div className="flex items-center space-x-3">
                    <h1 className="text-4xl font-krona">Olá!</h1>
                    <img src={MaoIcon} alt="Mão Icon" className="wave w-14 h-14 mb-3"/>
                </div>
                <h1 className="text-4xl font-krona mt-0">
                    Meu nome é <span className="text-fiap">Ryan Brito</span>
                </h1>
                <div className="mt-24">
                    <Type />
                </div>
            </div>
            <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
                <img src={Ryan} alt="Desenho Ryan" className="w-68 h-68 md:w-70 md:h-70" />
            </div>
        </header>
        <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:py-36 md:px-52 text-white">
            <div className="text-xl text-left md:w-2/3 lg:w-3/4">
                <h1 className="text-3xl font-krona text-center mb-10">UM POUCO MAIS <span className="text-fiap">SOBRE MIM</span></h1>
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
            <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
                <img src={RyanProfile} alt="Foto de Perfil Ryan" className="w-80 h-80 md:w-80 md:h-80 rounded-full bg-fiap"/>
            </div>
        </section>
        <section>
            <Github/>
        </section>
        </>
    );
}

export default Home;
