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
import Python from '../assets/img/projects/Python-Guanabara.png';
import Python1 from '../assets/img/projects/Python_1.png';
import Python2 from '../assets/img/projects/Python_2.png';
import Python3 from '../assets/img/projects/Python_3.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiArduino, SiKeras, SiMongodb, SiPython, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { FiFigma, FiGithub, FiGlobe, FiYoutube } from 'react-icons/fi';

export const ProjectData = {
	ProjectHeader: [
		{
			id: 1,
			title: 'E-WAY',
			publishDate: 'Em andamento',
			category: 'Front-end',
		},
		{
			id: 2,
			title: 'Blean',
			publishDate: '24 de Junho de 2024',
			category: 'Internet of Things (IoT)',
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
			title: 'Curso em Vídeo Python',
			publishDate: 'Em andamento',
			category: 'Back-end',
		},
		
	],
	ProjectImages: [
		{
			id: 1,
			img: EWAY,
		},
		{
			id: 2,
			img: Blean,
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
			img: Python
		}
	],
	ProjectRelatedImages: [
		{
			id: 1,
			img1: EWAY1,
			img2: EWAY2,
			img3: EWAY3
		},
		{
			id: 2,
			img1: Blean1,
			img2: Blean2,
			img3: Blean3
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
			img1: Python1,
			img2: Python3,
			img3: Python2
		},
	],
	ProjectInfo: {
		ObjectivesHeading: [
			{
				id: 1,
				objective: "Plataforma da Fórmula E"
			},
			{
				id: 2,
				objective: "Sistema de Detecção de Microplásticos na Água"
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
				objective: "Criação de Scripts em Python"
			}
		],
		Technologies: [
			{
				id: 1,
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
				id: 2,
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
					"Python"
				],
				icons: [
					SiPython
				]
			}
		],
		ProjectDetails: [
			{
				id: 1,
				details:
					'Uma solução tecnológica abrangente para os fãs da Fórmula E, que combina interação, acessibilidade e diversão. Essa plataforma servirá como um hub central para tudo relacionado à Fórmula E, fornecendo um espaço para os fãs se conectarem com o esporte de maneiras inovadoras. A plataforma oferece uma central de informações detalhada sobre o universo da Fórmula E, trazendo tudo o que um fã em potencial precisa em um só lugar. Com a ajuda de nossa assistente virtual VoltAI, um chatbot movido por uma API de Inteligência Artificial Generativa do Google Gemini, o usuário poderá conversar e interagir com a IA sobre os mais diversos assuntos eletrizantes do ecossistema da Fórmula E.',
			},
			{
				id: 2,
				details:
					'O BLEAN foi um projeto desenvolvido como parte da entrega para "Global Solution - Blue Future" de 2024 do Centro Universitário FIAP. Esse projeto se consiste em um sistema de detecção de microplásticos na água que surgiu da necessidade de enfrentar a crescente contaminação ambiental que ameaça a biodiversidade e a saúde humana. Nosso projeto oferece uma solução inovadora e acessível para monitorar a presença de microplásticos, permitindo ações rápidas para mitigar seus efeitos nocivos. Utilizando o Google Teachable Machine, treinamos um modelo capaz de identificar microplásticos em imagens capturadas por uma câmera. Uma API em NodeJS processa os dados e os armazena em um banco NoSQL (MongoDB), tornando-os acessíveis pelo website e pelo Arduino, que executa a análise da qualidade da água. O sistema conta com componentes de software, como um modelo de visão computacional e a API, e hardware, incluindo um computador para processar imagens e um microcontrolador Arduino Uno R3 para controlar LEDs e display LCD, indicando a presença de microplásticos. Implementamos o TensorFlow com suporte a GPU de um computador para acelerar o treinamento e a inferência do modelo, e integramos o Arduino para controlar os indicadores visuais. O BLEAN contribui para o monitoramento de ecossistemas aquáticos e a avaliação da qualidade da água, desenvolvendo estratégias de mitigação da poluição por microplásticos.',
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
				details: 
					"Exercícios desenvolvidos durante o Curso em Vídeo Python, ministrado pelo professor Gustavo Guanabara. Este curso oferece uma introdução completa à programação em Python, abordando assuntos como os fundamentos da linguagem, como tipos de dados, operadores, variáveis, estruturas condicionais e entrada/saída de dados, estruturas de repetição, controle de fluxo, funções e estruturas de dados. Com uma abordagem prática e didática, os cursos são ideais para iniciantes que desejam aprender a programar em uma das linguagens mais populares do mundo."
			}
		],
		SocialSharingHeading: 'Referências:',
		SocialSharing: [
			{
				id: 1,
				names: ['Figma', "GitHub"],
				icon: [FiFigma, FiGithub],
				url: ['https://www.figma.com/design/Iz5Szq9uDnGhMbBPjBW7n0/Plataforma-Tech-Mahindra?node-id=301-253&t=7rmKzOd7NvzWtQSE-1', 'https://github.com/ulipese/eway'],
			},
			{
				id: 2,
				names: ['GitHub', "Website", "Circuito", "Vídeo"],
				icon: [FiGithub, FiGlobe, SiArduino, FiYoutube],
				url: ['https://github.com/ryanbritodev/blean', 'https://ryanbritodev.github.io/blean/frontend/src/pages/home/index.html', "https://www.tinkercad.com/things/bpBPSg0CR12-global-solution-blue-future?sharecode=dSe2dT_8u7aOaHaq_syi8ARMs1yMeOMUJQOMnTItNps", "https://youtu.be/dNTaYUAiqVQ"],
			},
			{
				id: 3,
				names: ['Vídeo', 'GitHub', 'ThingSpeak', "Website", "Circuito"],
				icon: [FiYoutube, FiGithub, SiEspressif, FiGlobe, SiArduino],
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
				names: ['GitHub'],
				icon: [FiGithub],
				url: ['https://github.com/ryanbritodev/cursoemvideo'],
			},
		],
	},
};