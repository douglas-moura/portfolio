export interface Habilidade {
	id: number,
	cod: string,
	nome: string,
	icone: string,
	tipo: string,
	cor: string
}

export interface Projeto {
	cod: string,
	nome: string,
	data: string,
	descr_breve: string,
	descr_compl: string,
	tecnologias: string[],
	link_site: string | boolean,
	link_git: string | boolean,
	imgs: number
	ativo: boolean
}