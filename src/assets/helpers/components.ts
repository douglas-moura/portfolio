import { Habilidade, Projeto } from './interfaces'
import { minhasHabilidades, meusProjetos, getHabilidade } from './dados'

export const boxHabilidade = (data: Habilidade): HTMLSpanElement => {
	const box = document.createElement('span')
	box.classList.add('box-habilidade')
	box.innerHTML =
		`<iconify-icon icon="tabler:${data.icone}" class=""></iconify-icon>
		<p>${data.nome}</p>`
	return box
}

export const boxProjeto = (data: Projeto): HTMLSpanElement => {
	const box = document.createElement('span')
	box.classList.add('box-projeto')
	box.classList.add('group')
	box.setAttribute('id', data.cod)
	
	box.innerHTML =
		`<h4 class="mb-0 font-semibold text-orange-500 duration-200 group-hover:-mt-1 group-hover:mb-1">${data.nome}</h4>
		<h5 class="">${data.descr_breve}</h5>`
	
	const boxIcones = document.createElement('span')
	boxIcones.classList.add('box-projeto-icones')
	
	data.tecnologias.forEach(tecn => {
		boxIcones.innerHTML += `<iconify-icon icon="tabler:${getHabilidade(tecn, 'icone')}"></iconify-icon>`
	})

	box.appendChild(boxIcones)
	
	return box
}

export const projetoContainer = (cod: string): HTMLDivElement => {
	const container = document.createElement('div')
	meusProjetos.forEach(element => {
		if (element.cod == cod) {
			container.setAttribute('id', 'container-projeto')
			container.classList.add('container-projeto')
			container.classList.add('translate-y-full')
			
			const listaTecs = document.createElement('ul')
			for (let index = 0; index < element.tecnologias.length; index++) {
				const tecn = element.tecnologias[index];
				listaTecs.innerHTML += `<li class="list-disc mb-2 text-xs">${getHabilidade(tecn, 'nome')}</li>`
			}
			
			const btnLinks = document.createElement('span')
			btnLinks.innerHTML += element.link_site?
				`<a href="${element.link_site}" target="_blank" class="btn btn-primario">
					<iconify-icon icon="tabler:world"></iconify-icon>
					Ver
				</a>` : ''
			btnLinks.innerHTML += element.link_git?
				`<a href="${element.link_git}" target="_blank" class="btn btn-primario">
					<iconify-icon icon="tabler:brand-github"></iconify-icon>
					Repositório
				</a>` : ''
			
			const listaImgs = document.createElement('div')
			for (let index = 0; index < element.imgs; index++) {
				listaImgs.innerHTML +=
					`<figure class="border border-neutral-200 transition duration-100 brightness-50 hover:brightness-100">
						<img class="w-full aspect-auto" src="../img/projetos/${element.cod}/${index + 1}.jpg" alt="" />
					</figure>`
			}
			
			container.innerHTML =
				`<div class="container">
					<span id="fechar-projeto">
						<iconify-icon class="text-2xl cursor-pointer" icon="tabler:x"></iconify-icon>
					</span>
				</div>
				<div class="container h-dvh overflow-y-scroll invisible-scrollbar lg:grid-cols-5 lg:gap-8 lg:overflow-hidden">
					<span class="flex-col lg:col-span-2 lg:overflow-y-scroll lg:pr-4">
						<h2 class="lg:text-3xl">${element.nome}</h2>
						<h5 class="mb-8 text-orange-500">${element.data}</h5>
						<p class="mb-4">${element.descr_compl}</p>
						<p class="mt-4 mb-2 font-semibold">Tecnologias utilizadas:</p>
						<ul class="ml-4 mb-8">
							${listaTecs.innerHTML}
						</ul>
						<span class="grid grid-cols-2 gap-2 my-8">
							${btnLinks.innerHTML}
						</span>
					</span>
					<div class="lg:h-full lg:overflow-y-scroll lg:col-span-3 ">
						<span class="grid gap-8">
							${listaImgs.innerHTML}
						</span>
					</div>
					<hr class="mt-20 opacity-0" />
				</div>`
		}
	})
	return container
}