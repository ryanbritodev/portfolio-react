// Importando as Imagens
import EWAY from '../assets/img/projects/E-WAY.png';
import Blean from '../assets/img/projects/Blean.png';
import ESP32 from '../assets/img/projects/ESP32-Mahindra.png';
import Portfolio from '../assets/img/projects/Portfolio.png';
import Python from '../assets/img/projects/Python-Guanabara.png';

export const projectsData = [
	{
		id: 1,
		title: 'E-WAY',
		category: 'Front-end',
		img: EWAY,
		ProjectHeader: {
			title: 'Plataforma da Fórmula E',
			publishDate: 'Em desenvolvimento',
			tags: 'Back-end / Front-end',
		},
	},
	{
		id: 2,
		title: 'Blean',
		category: 'IoT',
		img: Blean,
	},
	{
		id: 3,
		title: 'ESP32 Mahindra Racing',
		category: 'IoT',
		img: ESP32,
	},
	{
		id: 4,
		title: 'Portfólio',
		category: 'Front-end',
		img: Portfolio,
	},
	{
		id: 5,
		title: 'Curso em Vídeo Python',
		category: 'Back-end',
		img: Python,
	}
];