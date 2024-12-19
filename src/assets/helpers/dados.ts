export const meusProjetos = [
	{
		cod: 'spwork',
		nome: 'SPWorking',
		data: 'Novembro de 2024',
		descr_breve: 'Site Institucional e Logotipo',
		descr_compl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor feugiat mi, ut congue eros semper eget. Donec venenatis volutpat elementum. Suspendisse sed porttitor urna. In hac habitasse platea dictumst. Integer gravida ante et fringilla commodo.<br><br>Fusce vehicula enim at ligula ornare, vel dignissim nisl interdum. Nam eu sem id magna iaculis maximus.',
		tecnologias: [
			'htm', 'css', 'tsc', 'tai', 'web'
		],
		link_site: 'google.com',
		link_git: 'google.com',
		imgs: 6,
		ativo: true
	},
	{
		cod: 'gtx100',
		nome: 'GTX100 Incentivos',
		data: 'Fevereiro de 2022',
		descr_breve: 'Site Institucional',
		descr_compl: 'Empresa de marketind de incentivos',
		tecnologias: [
			'wss', 'css', 'jsc'
		],
		imgs: 6,
		link_site: 'https://gtx100.com.br/',
		link_git: false,
		ativo: true
	},
	{
		cod: 'agro',
		nome: 'Agro&Solar',
		data: 'Outubro de 2024',
		descr_breve: 'Site Institucional e Landing Page',
		descr_compl: 'A Agro & Solar é uma empresa brasileira dedicada a integrar soluções inovadoras no agronegócio, combinando a produção agrícola com a geração de energia solar fotovoltaica. <br><br> Seu principal objetivo é enfrentar desafios globais relacionados à produção de alimentos e energia, promovendo o uso compartilhado do solo para essas finalidades. <br><br> A empresa oferece serviços que englobam desde estudos de viabilidade financeira até o projeto, financiamento, instalação e manutenção de sistemas agrivoltaicos, além da comercialização do excedente de energia gerada.',
		tecnologias: [
			'htm', 'css', 'tai', 'web'
		],
		link_site: 'google.com',
		link_git: 'google.com',
		imgs: 3,
		ativo: true
	},
	{
		cod: 'post',
		nome: 'Material GTX100',
		data: 'Junho de 2023',
		descr_breve: 'Material Promocional',
		descr_compl: '',
		tecnologias: [
			'ill', 'psd'
		],
		link_site: false,
		link_git: false,
		imgs: 10,
		ativo: true
	},
	{
		cod: 'logocasa',
		nome: 'CasaAir',
		data: 'Setembro de 2021',
		descr_breve: 'Logotipo',
		descr_compl: '',
		tecnologias: [
			'ill',
		],
		link_site: false,
		link_git: false,
		imgs: 6,
		ativo: true
	},
	{
		cod: 'ifth',
		nome: 'Infinith Tech',
		data: 'Fevereiro de 2023',
		descr_breve: 'Site Institucional',
		descr_compl: 'A Infinity Tech é uma empresa brasileira de consultoria e engenharia especializada em gestão ambiental estratégica e sustentável. Com mais de 10 anos de atuação, oferece soluções inovadoras em gestão de água, economia circular e saneamento, auxiliando empresas a alcançarem eficiência ambiental e lucratividade. <br><br> Participei da reestruturação do site da Infinity Tech, a partir de um layout pré-existente. Desenvolvi e implementei as páginas de sobre, soluções (cases), publicações, equipe e contato, além da versão em inglês, focando na usabilidade, apresentação visual e alinhamento com a identidade da marca.',
		tecnologias: [
			'wss', 'css'
		],
		link_site: 'https://infinitytech.com.br/',
		link_git: false,
		imgs: 8,
		ativo: true
	}
]

export const minhasHabilidades = [
	{ id: 0, cod: 'htm', nome: 'HTML5', icone: 'brand-html5', tipo: 'front' },
	{ id: 1, cod: 'css', nome: 'CSS3', icone: 'brand-css3', tipo: 'front' },
	{ id: 2, cod: 'jsc', nome: 'JavaScript', icone: 'brand-javascript', tipo: 'front' },
	{ id: 3, cod: 'tsc', nome: 'TypeScript', icone: 'brand-typescript', tipo: 'front' },
	{ id: 4, cod: 'vue', nome: 'Vue.js 3', icone: 'brand-vue', tipo: 'front' },
	{ id: 5, cod: 'tai', nome: 'TailwindCSS', icone: 'brand-tailwind', tipo: 'front' },
	{ id: 6, cod: 'sss', nome: 'Sass', icone: 'brand-sass', tipo: 'front' },
	{ id: 7, cod: 'jsn', nome: 'JSON', icone: 'json', tipo: 'front' },
	{ id: 8, cod: 'npm', nome: 'NPM', icone: 'brand-npm', tipo: 'front' },
	{ id: 9, cod: 'psd', nome: 'Photoshop', icone: 'brand-adobe-photoshop', tipo: 'design' },
	{ id: 10, cod: 'ill', nome: 'Illustrator', icone: 'brand-adobe-illustrator', tipo: 'design' },
	{ id: 11, cod: 'pre', nome: 'Premiere', icone: 'brand-adobe-premier', tipo: 'design' },
	{ id: 12, cod: 'uix', nome: 'UI e UX', icone: 'layout-board', tipo: 'design' },
	{ id: 13, cod: 'git', nome: 'Git', icone: 'brand-git', tipo: 'outro' },
	{ id: 14, cod: 'hub', nome: 'GitHub', icone: 'brand-github', tipo: 'outro' },
	{ id: 15, cod: 'wss', nome: 'WordPress', icone: 'brand-wordpress', tipo: 'outro' },
	{ id: 16, cod: 'sql', nome: 'SQL', icone: 'file-type-sql', tipo: 'outro' },
	{ id: 17, cod: 'php', nome: 'PHP', icone: 'brand-php', tipo: 'outro' },
	{ id: 17, cod: 'web', nome: 'Webpack', icone: 'package', tipo: 'outro' },
]

export const getHabilidade = (cod: string, dado: string): string | number => {
	let resposta: string | number = ''
	for (let index = 0; index < minhasHabilidades.length; index++) {
		const element = minhasHabilidades[index]
		if (element.cod == cod) {
			switch (dado) {
				case 'id':
					resposta = element.id
					break
				case 'código':
					resposta = element.cod
					break
				case 'nome':
					resposta = element.nome
					break
				case 'icone':
					resposta = element.icone
					break
				case 'tipo':
					resposta = element.tipo
					break
				default:
					resposta = 'Dado inválido'
					break
			}
		}
	}
	return resposta
}