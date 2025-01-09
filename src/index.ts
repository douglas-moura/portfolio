import './style.css'
import { meusProjetos, minhasHabilidades } from './assets/helpers/dados'
import { boxHabilidade, boxProjeto, projetoContainer } from './assets/helpers/components'
import { Projeto, Habilidade } from './assets/helpers/interfaces'

// MENU MOBILE
const toggleMenu = (): void => {
	const menu = document.getElementById('menu-mobile') as HTMLDivElement
	menu.classList.toggle('translate-x-full')
}

const abrirMenu = document.getElementById('btn-abrir-menu') as HTMLElement
abrirMenu.addEventListener('click', () => toggleMenu())

const fecharMenu = document.getElementById('btn-fechar-menu') as HTMLElement
fecharMenu.addEventListener('click', () => toggleMenu())

const navLinksMobile = document.getElementsByClassName('nav-link-mobile') as HTMLCollection
for (let index = 0; index < navLinksMobile.length; index++) {
	const element = navLinksMobile[index];
	element.addEventListener('click', () => toggleMenu())
}

// HABILIDADES
const renderHabilidades = () => {
	minhasHabilidades.forEach(element => {
		const habilidade: Habilidade = element
		const bloco = document.getElementById(`bloco-habilidades-${element.tipo}`) as HTMLDivElement
		bloco.appendChild(boxHabilidade(habilidade))
	})
}

const renderProjetos = () => {
	// montar blocos de projetos
	meusProjetos.forEach(element => {
		const projeto: Projeto = element
		if (projeto.ativo) {
			const bloco = document.getElementById(`bloco-projetos`) as HTMLDivElement
			bloco.appendChild(boxProjeto(projeto))
		}
	})

	// config funcão para abrir projeto
	const blocosProjetos = document.getElementsByClassName('box-projeto') as HTMLCollection
	for (let index = 0; index < blocosProjetos.length; index++) {
		const element = blocosProjetos[index]
		element.addEventListener('click', () => visualizarProjetos(element.id))
	}
}

const visualizarProjetos = (cod: string) => {
	// abrir projeto
	const sessaoProjetos = document.getElementById('sessao-projetos') as HTMLElement
	const container: HTMLDivElement = projetoContainer(cod)
	sessaoProjetos.appendChild(container)
	setTimeout(() => {
		container.classList.toggle('translate-y-full')
	}, 100)
	
	// fechar projeto
	const fecharProjeto = document.getElementById('fechar-projeto') as HTMLSpanElement
	
	fecharProjeto.addEventListener('click', () => {
		//alert('fechou')
		container.classList.toggle('translate-y-full')
		setTimeout(() => {
			sessaoProjetos.removeChild(container);
		}, 1000)
	})
}


// EXECUTAR AO CARREGAR
window.addEventListener('DOMContentLoaded', () => {
	renderHabilidades()
	renderProjetos()
})