import { Habilidade, Projeto } from './interfaces'
import { minhasHabilidades, meusProjetos, getHabilidade } from './dados'

export const boxHabilidade = (data: Habilidade): HTMLSpanElement => {
	const box = document.createElement('span')
	box.classList.add('box-habilidade')
	box.classList.add('group')
	
	/*
	box.addEventListener('mouseenter', () => {
		box.style.backgroundColor = data.cor
		box.style.color = '#fff'
	})
	box.addEventListener('mouseleave', () => {
		box.style.backgroundColor = ''
	})
	*/

	box.innerHTML =
		`<iconify-icon icon="${data.icone}" class="box-habilidade-icon"></iconify-icon>
		<p class="box-habilidade-text">${data.nome}</p>`
	return box
}

export const boxProjeto = (data: Projeto): HTMLDivElement => {
	const box: HTMLDivElement = document.createElement('div')
	box.classList.add('box-projeto')
	box.classList.add('group')
	box.setAttribute('id', data.cod)

	const boxInfoProjeto: HTMLDivElement = document.createElement('div')
	boxInfoProjeto.classList.add('box-projeto-infos')
	
	boxInfoProjeto.innerHTML = `
		<span class="flex-col">
			<h6 class="box-projeto-subtitulo">${data.descr_breve}</h6>
			<h3 class="box-projeto-titulo">${data.nome}</h3>
		</span>
	`
	
	const boxIcones: HTMLSpanElement = document.createElement('span')
	boxIcones.classList.add('box-projeto-icones')
	
	data.tecnologias.forEach(tecn => {
		boxIcones.innerHTML += `<iconify-icon icon="${getHabilidade(tecn, 'icone')}"></iconify-icon>`
	})

	boxInfoProjeto.appendChild(boxIcones)

	const imgProjeto: HTMLImageElement = document.createElement('img')
	imgProjeto.classList.add('box-projeto-img')
	imgProjeto.setAttribute('src', `../img/projetos/${data.cod}/0.jpg`)

	box.appendChild(boxInfoProjeto)
	box.appendChild(imgProjeto)
	
	return box
}

export const projetoContainer = (cod: string): HTMLDivElement => {
	const container: HTMLDivElement = document.createElement('div')
	meusProjetos.forEach(element => {
		if (element.cod == cod) {
			container.setAttribute('id', 'container-projeto')
			container.classList.add('container-projeto')
			container.classList.add('translate-y-full')
			
			// lista de tecnologias
			const listaTecs: HTMLUListElement = document.createElement('ul')
			for (let index = 0; index < element.tecnologias.length; index++) {
				const tecn = element.tecnologias[index];
				listaTecs.innerHTML +=
					`<li class="mb-2 text-sm items-center flex">
						<iconify-icon class="mr-2 text-2xl" icon="${getHabilidade(tecn, 'icone')}"></iconify-icon>
						${getHabilidade(tecn, 'nome')}
					</li>`
			}
			
			// container de links
			const btnLinks: HTMLSpanElement = document.createElement('span')

			// botão link site
			btnLinks.innerHTML += element.link_site?
				`<a href="${element.link_site}" target="_blank" class="btn btn-primario">
					<iconify-icon icon="tabler:world"></iconify-icon>
					Ver
				</a>` : ''

			// botão link repositório
			btnLinks.innerHTML += element.link_git?
				`<a href="${element.link_git}" target="_blank" class="btn btn-primario">
					<iconify-icon icon="tabler:brand-github"></iconify-icon>
					Repositório
				</a>` : ''
			
				// galeria de imagens
			const listaImgs: HTMLDivElement = document.createElement('div')
			for (let index = 0; index < element.imgs; index++) {
				listaImgs.innerHTML +=
					`<figure class="box-img-galeria-projeto transition duration-150 brightness-90 hover:brightness-100">
						<img class="img-galeria-projeto" src="../img/projetos/${element.cod}/${index + 1}.jpg" alt="" />
					</figure>`
			}
			
			// montar container do projeto
			container.innerHTML =
				`<div class="container grid-cols-2 pb-0">
					<div class="pb-6 lg:pb-0">
						<h2 class="text-cinza-800">${element.nome}</h2>
						<h6 class="mb-0 text-laranja">${element.data}</h6>
					</div>
					<span id="fechar-projeto" class="justify-end">
						<iconify-icon class="text-4xl cursor-pointer text-laranja" icon="tabler:x"></iconify-icon>
					</span>
				</div>
				<div class="container h-dvh overflow-y-scroll invisible-scrollbar lg:grid-cols-5 lg:gap-8 lg:overflow-hidden">
					<span class="flex-col lg:overflow-y-scroll lg:pr-8 lg:col-span-2">
						<p class="mb-4 text-xs 2xl:text-base text-cinza-500">${element.descr_compl}</p>
						<h5 class="mt-4 mb-2 text-cinza-800 font-semibold">Tecnologias utilizadas:</h5>
						<ul class="mb-8">
							${listaTecs.innerHTML}
						</ul>
						<span class="grid grid-cols-2 gap-2 my-2">
							${btnLinks.innerHTML}
						</span>
					</span>
					<div class="lg:h-full lg:overflow-y-scroll lg:col-span-3">
						<span class="grid gap-2 md:grid-cols-3 pb-8 lg:pr-4 lg:gap-4">
							${listaImgs.innerHTML}
						</span>
					</div>
					<hr class="mt-20 opacity-0" />
				</div>`
		}
	})

	return container
}

export const vizualizardorImagem = (proj: string | null): void => {
	const pelicula: HTMLDivElement = document.createElement('div')
	pelicula.classList.add('peliculaBgImg')

	const img: HTMLImageElement = document.createElement('img')
	img.classList.add('img-aberta')
	proj ? img.setAttribute('src', proj) : null

	const body = document.getElementById('body')

	pelicula?.appendChild(img)
	body?.appendChild(pelicula)

	pelicula.addEventListener('click', () => {
		body?.removeChild(pelicula)
	})
}