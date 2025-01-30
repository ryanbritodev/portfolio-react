// Importando imagens
import EWAY from '../assets/img/projects/E-WAY.png';
import EWAY1 from '../assets/img/projects/E-WAY_1.png';
import EWAY2 from '../assets/img/projects/E-WAY_2.png';
import EWAY3 from '../assets/img/projects/E-WAY_3.png';
import Blean from '../assets/img/projects/Blean.png';
import Blean1 from '../assets/img/projects/Blean_1.png'
import Blean2 from '../assets/img/projects/Blean_2.png'
import Blean3 from '../assets/img/projects/Blean_3.png'
import ESP32 from '../assets/img/projects/ESP32-Mahindra.png';
import ESP32_1 from '../assets/img/projects/ESP32_1.png';
import ESP32_2 from '../assets/img/projects/ESP32_2.png';
import ESP32_3 from '../assets/img/projects/ESP32_3.png';
import Portfolio from '../assets/img/projects/Portfolio.png';
import Portfolio1 from '../assets/img/projects/Portfolio_1.png';
import Portfolio2 from '../assets/img/projects/Portfolio_2.png';
import Portfolio3 from '../assets/img/projects/Portfolio_3.png';
import Autolab from '../assets/img/projects/Autolab.jpg';
import Autolab1 from '../assets/img/projects/Autolab1.jpg';
import Autolab2 from '../assets/img/projects/Autolab2.jpg';
import Autolab3 from '../assets/img/projects/Autolab3.jpg';
import SamepyEco from '../assets/img/projects/SamepyEco.png';
import SamepyEco1 from '../assets/img/projects/SamepyEco1.jpg';
import SamepyEco2 from '../assets/img/projects/SamepyEco2.png';
import SamepyEco3 from '../assets/img/projects/SamepyEco3.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiArduino, SiGooglegemini, SiKeras, SiMongodb, SiNodedotjs, SiPython, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { FiFigma, FiGithub, FiGlobe, FiYoutube } from 'react-icons/fi';
import { SlSpeech } from 'react-icons/sl';
import { BsFeather } from 'react-icons/bs';
import { GiAbdominalArmor } from 'react-icons/gi';
import { BiWindows } from 'react-icons/bi';

export const ProjectData = {
	ProjectHeader: [
		{
			id: 1,
			title: 'Blean',
			publishDate: '24 de Junho de 2024',
			category: 'Internet of Things (IoT)',
		},
		{
			id: 2,
			title: 'E-WAY',
			publishDate: '10 de Setembro de 2024',
			category: 'Front-end',
		},
		{
			id: 3,
			title: 'ESP32 Mahindra',
			publishDate: '30 de Setembro de 2024',
			category: 'Internet of Things (IoT)',
		},
		{
			id: 4,
			title: 'Portfólio',
			publishDate: '6 de Outubro de 2024',
			category: 'Front-end',
		},
		{
			id: 5,
			title: 'SamepyEco',
			publishDate: "21 de Novembro de 2024",
			category: 'Internet of Things (IoT)'
		},
		{
			id: 6,
			title: 'FIAP Autolab',
			publishDate: '29 de Janeiro de 2025',
			category: 'Back-end',
		}
	],
	ProjectImages: [
		{
			id: 1,
			img: Blean,
		},
		{
			id: 2,
			img: EWAY,
		},
		{
			id: 3,
			img: ESP32,
		},
		{
			id: 4,
			img: Portfolio,
		},
		{
			id: 5,
			img: SamepyEco
		},
		{
			id: 6,
			img: Autolab
		}
	],
	ProjectRelatedImages: [
		{
			id: 1,
			img1: Blean1,
			img2: Blean2,
			img3: Blean3
		},
		{
			id: 2,
			img1: EWAY1,
			img2: EWAY2,
			img3: EWAY3
		},
		{
			id: 3,
			img1: ESP32_1,
			img2: ESP32_2,
			img3: ESP32_3
		},
		{
			id: 4,
			img1: Portfolio1,
			img2: Portfolio2,
			img3: Portfolio3
		},
		{
			id: 5,
			img1: SamepyEco1,
			img2: SamepyEco2,
			img3: SamepyEco3
		},
		{
			id: 6,
			img1: Autolab1,
			img2: Autolab2,
			img3: Autolab3
		}
	],
	ProjectInfo: {
		ObjectivesHeading: [
			{
				id: 1,
				objective: "Sistema de Detecção de Microplásticos na Água"
			},
			{
				id: 2,
				objective: "Plataforma da Fórmula E"
			},
			{
				id: 3,
				objective: "Monitoramento de um Carro da Fórmula E" 
			},
			{
				id: 4,
				objective: "Portfólio Pessoal"
			},
			{
				id: 5,
				objective: "Gerador Termoelétrico Sustentável"
			},
			{
				id: 6,
				objective: "Interface Gráfica para executar comandos de CMD na FIAP"
			},
		],
		Technologies: [
			{
				id: 1,
				techs: [
					"HTML",
					"CSS",
					"JavaScript",
					"MongoDB",
					"C++",
					"Python",
					"Keras",
					"TensorFlow"
				],
				icons: [
					FaHtml5,
					FaCss3Alt,
					SiJavascript,
					SiMongodb,
					SiCplusplus,
					SiPython,
					SiKeras,
					SiTensorflow
				]
			},
			{
				id: 2,
				techs: [
					"HTML",
					"CSS",
					"React JS",
					"Tailwind CSS",
					"JavaScript",
					"NodeJS",
					"Gemini"
				],
				icons: [
					FaHtml5,
					FaCss3Alt,
					FaReact,
					SiTailwindcss,
					SiJavascript,
					SiNodedotjs,
					SiGooglegemini
				]
			},
			{
				id: 3,
				techs: [
					"HTML",
					"CSS",
					"JavaScript",
					"C++",
					"ESP32"
				],
				icons: [
					FaHtml5,
					FaCss3Alt,
					SiJavascript,
					SiCplusplus,
					SiEspressif
				]
			},
			{
				id: 4,
				techs: [
					"HTML",
					"CSS",
					"React JS",
					"Tailwind CSS",
					"JavaScript"
				],
				icons: [
					FaHtml5,
					FaCss3Alt,
					FaReact,
					SiTailwindcss,
					SiJavascript
				]
			},
			{
				id: 5,
				techs: [
					"TypeScript",
					"Tailwind CSS",
					"C++",
					"ESP32"
				],
				icons: [
					SiTypescript,
					SiTailwindcss,
					SiCplusplus,
					SiEspressif
				]
			},
			{
				id: 6,
				techs: [
					"Python",
					"Pyarmor",
					"Tkinter",
					"Psexec"
				],
				icons: [
					SiPython,
					GiAbdominalArmor,
					BsFeather,
					BiWindows

				]
			}
		],
		ProjectDetails: [
			{
				id: 1,
				details:
					'O BLEAN foi um projeto desenvolvido como parte da entrega para "Global Solution - Blue Future" de 2024 do Centro Universitário FIAP. Esse projeto se consiste em um sistema de detecção de microplásticos na água que surgiu da necessidade de enfrentar a crescente contaminação ambiental que ameaça a biodiversidade e a saúde humana. Nosso projeto oferece uma solução inovadora e acessível para monitorar a presença de microplásticos, permitindo ações rápidas para mitigar seus efeitos nocivos. Utilizando o Google Teachable Machine, treinamos um modelo capaz de identificar microplásticos em imagens capturadas por uma câmera. Uma API em NodeJS processa os dados e os armazena em um banco NoSQL (MongoDB), tornando-os acessíveis pelo website e pelo Arduino, que executa a análise da qualidade da água. O sistema conta com componentes de software, como um modelo de visão computacional e a API, e hardware, incluindo um computador para processar imagens e um microcontrolador Arduino Uno R3 para controlar LEDs e display LCD, indicando a presença de microplásticos. Implementamos o TensorFlow com suporte a GPU de um computador para acelerar o treinamento e a inferência do modelo, e integramos o Arduino para controlar os indicadores visuais. O BLEAN contribui para o monitoramento de ecossistemas aquáticos e a avaliação da qualidade da água, desenvolvendo estratégias de mitigação da poluição por microplásticos.',
			},
			{
				id: 2,
				details:
					'Uma solução tecnológica abrangente para os fãs da Fórmula E, que combina interação, acessibilidade e diversão. Essa plataforma servirá como um hub central para tudo relacionado à Fórmula E, fornecendo um espaço para os fãs se conectarem com o esporte de maneiras inovadoras. A plataforma oferece uma central de informações detalhada sobre o universo da Fórmula E, trazendo tudo o que um fã em potencial precisa em um só lugar. Com a ajuda de nossa assistente virtual VoltAI, um chatbot movido por uma API de Inteligência Artificial Generativa do Google Gemini, o usuário poderá conversar e interagir com a IA sobre os mais diversos assuntos eletrizantes do ecossistema da Fórmula E.',
			},
			{
				id: 3,
				details:
					'Este projeto desenvolvido como parte da entrega para a Sprint 3 do Challenge da Tech Mahindra na FIAP demonstra uma aplicação de Internet das Coisas (Internet of Things) usando o microcontrolador ESP32 para monitorar dados ambientais e a velocidade de um carro de Fórmula E, além de um sistema de alerta de proximidade. Utilizando um Sensor DHT22, um Potenciômetro (utilizado para simular um velocímetro) e um Sensor Ultrassônico de Distância HC-SR04 (em conjunto de um Buzzer e um LED), o sistema mede continuamente a temperatura e umidade do ambiente onde se encontra o veículo, bem como sua velocidade atual, enviando esses dados para a nuvem via Wi-Fi, onde são armazenados e analisados em tempo real através do software ThingSpeak. Localmente, ele emite avisos ao piloto quando seu veículo se encontra muito próximo em relação ao veículo da frente (1 metro ou menos de distância).',
			},
			{
				id: 4,
				details:
					'Este projeto desenvolvido como parte da entrega para o Checkpoint 2 de Web Development na FIAP se consiste na criação de Portfólio online completo e responsivo, utilizando React e Tailwind CSS. O projeto inclui um menu, uma apresentação pessoal, uma seção de projetos detalhados com rotas dinâmicas e um formulário de contato. Um repositório no GithHub foi desenvolvido para gerenciar o código e a plataforma Vercel para hospedar o site. A experiência de desenvolver este projeto me permitiu consolidar meus conhecimentos em React e aprimorar minhas habilidades em design responsivo.',
			},
			{
				id: 5,
				details: "O SamepyEco é um gerador termoelétrico inovador desenvolvido para transformar calor desperdiçado em energia elétrica sustentável. Utilizando pastilhas de Peltier e um sistema de monitoramento integrado via ESP32, o projeto tem como objetivo oferecer uma solução acessível e eficiente para pequenos e médios agricultores, especialmente em regiões remotas. Nosso impacto: O SamepyEco é mais que uma solução tecnológica – é uma ferramenta para fomentar a sustentabilidade, reduzir emissões de CO₂ e contribuir para um futuro mais verde e equilibrado, alinhado aos Objetivos de Desenvolvimento Sustentável da ONU."
			},
			{
				id: 6,
				details: 
					"O FIAP Autolab é um software de automação criado para facilitar o dia a dia dos monitores. Através da implementação de scripts com Python e uma Interface Gráfica que utiliza a biblioteca CustomTkinter, buscamos otimizar tarefas repetitivas, melhorar a organização e aumentar a eficiência no acompanhamento e na execução de comandos do CMD comuns utilizados dentro da instituição. Este projeto foi desenvolvido para facilitar e automatizar tarefas do dia a dia dos monitores, aproveitando o poder dos scripts .bat para executar comandos do CMD de forma prática e eficiente."
			}
		],
		SocialSharingHeading: 'Referências:',
		SocialSharing: [
			{
				id: 1,
				names: ['GitHub', "Website", "Circuito", "Vídeo"],
				icon: [FiGithub, FiGlobe, SiArduino, FiYoutube],
				url: ['https://github.com/ryanbritodev/blean', 'https://ryanbritodev.github.io/blean/frontend/src/pages/home/index.html', "https://www.tinkercad.com/things/bpBPSg0CR12-global-solution-blue-future?sharecode=dSe2dT_8u7aOaHaq_syi8ARMs1yMeOMUJQOMnTItNps", "https://youtu.be/dNTaYUAiqVQ"],
			},
			{
				id: 2,
				names: ['Figma', "GitHub", "Website"],
				icon: [FiFigma, FiGithub, FiGlobe],
				url: ['https://www.figma.com/design/Iz5Szq9uDnGhMbBPjBW7n0/Plataforma-Tech-Mahindra?node-id=301-253&t=7rmKzOd7NvzWtQSE-1', 'https://github.com/ulipese/eway', 'https://the-eway.vercel.app/'],
			},
			{
				id: 3,
				names: ['Vídeo', 'GitHub', 'ThingSpeak', "Website", "Circuito"],
				icon: [FiYoutube, FiGithub, SlSpeech, FiGlobe, SiEspressif],
				url: ['https://youtu.be/M87xPSovZtU', 'https://github.com/ryanbritodev/esp32-mahindra', 'https://thingspeak.com/channels/2642712', "https://ryanbritodev.github.io/esp32-mahindra/src/html/index.html", "https://wokwi.com/projects/407869921950393345"]
			},
			{
				id: 4,
				names: ['GitHub'],
				icon: [FiGithub],
				url: ['https://github.com/ryanbritodev/portfolio-react'],
			},
			{
				id: 5,
				names: ["GitHub", "Website", "Pitch", "Vídeo", "ThingSpeak", "Circuito"],
				icon: [FiGithub, FiGlobe, FiYoutube, FiYoutube, SlSpeech, SiEspressif],
				url: ["https://github.com/ryanbritodev/samepyeco", "https://samepy-eco.vercel.app/", "https://youtu.be/r8Rkved31Ug", "https://www.youtube.com/watch?v=r6GwW2UTQUQ", 'https://thingspeak.mathworks.com/channels/2738000', 'https://wokwi.com/projects/414535310108324865']
			},
			{
				id: 6,
				names: ['GitHub'],
				icon: [FiGithub],
				url: ['https://github.com/ryanbritodev/autolab'],
			}
		],
	},
};