import './style.css'
import { meusProjetos, minhasHabilidades } from './assets/helpers/dados'
import { boxHabilidade, boxProjeto, projetoContainer, vizualizardorImagem } from './assets/helpers/components'
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
const renderHabilidades = (): void => {
	minhasHabilidades.forEach(element => {
		const habilidade: Habilidade = element
		const bloco = document.getElementById(`bloco-habilidades-${element.tipo}`) as HTMLDivElement
		bloco.appendChild(boxHabilidade(habilidade))
	})
}

// PROJETOS

// Filtros de projetos
const btnFiltro = document.getElementsByClassName('filtro-item') as HTMLCollection
const btnFiltroIcone = document.getElementsByClassName('filtro-item-icon') as HTMLCollection
const btnFiltroTexto = document.getElementsByClassName('filtro-item-text') as HTMLCollection

Array.from(btnFiltro).forEach((item, index) => {
	item.addEventListener('click', () => {
		filtrar(index)
	})
})

const filtrar = (n: number) => {
	for (let index = 0; index < btnFiltro.length; index++) {
		if (n == index) {
			btnFiltro[index].classList.add('filtro-item-ativo')
			btnFiltroIcone[index].classList.add('text-laranja')
			btnFiltroTexto[index].classList.add('text-laranja')
		} else {
			btnFiltro[index].classList.remove('filtro-item-ativo')
			btnFiltroIcone[index].classList.remove('text-laranja')
			btnFiltroTexto[index].classList.remove('text-laranja')
		}
	}
}

const btnFiltroTodos = document.getElementById('filtro-todos') as HTMLUListElement
btnFiltroTodos.addEventListener('click', () => filtraProjetos())

const btnWebDesign = document.getElementById('filtro-web') as HTMLUListElement
btnWebDesign.addEventListener('click', () => filtraProjetos('web-design'))

const btnMobileApp = document.getElementById('filtro-mobile') as HTMLUListElement
btnMobileApp.addEventListener('click', () => filtraProjetos('mobile-app'))

const btnLogoDesign = document.getElementById('filtro-logo') as HTMLUListElement
btnLogoDesign.addEventListener('click', () => filtraProjetos('logo-design'))

const btnDesignGrafico = document.getElementById('filtro-design') as HTMLUListElement
btnDesignGrafico.addEventListener('click', () => filtraProjetos('design-grafico'))

const filtraProjetos = (tipo?: string) => {
	if (!tipo) {
		renderProjetos()
	} else {
		renderProjetos(tipo)
	}
}

// Grade de projetos

const renderProjetos = (tipo?: string): void => {
	const bloco = document.getElementById(`bloco-projetos`) as HTMLDivElement
	bloco.innerHTML = ''

	// montar blocos de projetos
	meusProjetos.forEach(element => {
		const projeto: Projeto = element
		if (projeto.ativo) {
			const novoBox: HTMLDivElement = boxProjeto(projeto)
			if (typeof tipo == 'string' && element.tipo != tipo) novoBox.classList.add('hidden')
			bloco.appendChild(novoBox)
		}
	})

	// config funcão para abrir projeto
	const blocosProjetos = document.getElementsByClassName('box-projeto') as HTMLCollection
	for (let index = 0; index < blocosProjetos.length; index++) {
		const element = blocosProjetos[index]
		element.addEventListener('click', () => visualizarProjetos(element.id))
	}
}

// Container do projetos

const visualizarProjetos = (cod: string): void => {
	// abrir projeto
	const sessaoProjetos = document.getElementById('sessao-projetos') as HTMLElement
	const container: HTMLDivElement = projetoContainer(cod)
	sessaoProjetos.appendChild(container)
	setTimeout(() => {
		container.classList.toggle('translate-y-full')
	}, 100)
	
	captuarImgsGaleria()

	// fechar projeto
	const fecharProjeto = document.getElementById('fechar-projeto') as HTMLSpanElement

	fecharProjeto.addEventListener('click', () => {
		console.log('fechou projeto')
		container.classList.toggle('translate-y-full')
		setTimeout(() => {
			sessaoProjetos.removeChild(container);
		}, 1000)
	})
}

const captuarImgsGaleria = () => {
	const imgsProjetos = document.getElementsByClassName('box-img-galeria-projeto') as HTMLCollection
	
	Array.from(imgsProjetos).forEach((item, index) => {
		item.addEventListener('click', () => {
			//expandirImg(index, imgsProjetos)
			vizualizardorImagem(item.children[0].getAttribute('src'))
		})
	})
}

const expandirImg = (n: number, imgs: HTMLCollection) => {
	for (let index = 0; index < imgs.length; index++) {
		
		if (n == index) {
			imgs[index].classList.add('col-span-2')
		} else {
			imgs[index].classList.remove('col-span-2')
		}
	}
}

// EXECUTAR AO CARREGAR
window.addEventListener('DOMContentLoaded', () => {
	renderHabilidades()
	renderProjetos()
})