/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://meu-portfolio/./src/style.css?");

/***/ }),

/***/ "./src/assets/helpers/components.ts":
/*!******************************************!*\
  !*** ./src/assets/helpers/components.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.projetoContainer = exports.boxProjeto = exports.boxHabilidade = void 0;\nconst dados_1 = __webpack_require__(/*! ./dados */ \"./src/assets/helpers/dados.ts\");\nconst boxHabilidade = (data) => {\n    const box = document.createElement('span');\n    box.classList.add('box-habilidade');\n    box.innerHTML =\n        `<iconify-icon icon=\"tabler:${data.icone}\" class=\"\"></iconify-icon>\n\t\t<p>${data.nome}</p>`;\n    return box;\n};\nexports.boxHabilidade = boxHabilidade;\nconst boxProjeto = (data) => {\n    const box = document.createElement('span');\n    box.classList.add('box-projeto');\n    box.classList.add('group');\n    box.setAttribute('id', data.cod);\n    box.innerHTML =\n        `<h3 class=\"mb-0 text-orange-500 duration-200 group-hover:-mt-1 group-hover:mb-1\">${data.nome}</h3>\n\t\t<h5 class=\"\">${data.descr_breve}</h5>`;\n    const boxIcones = document.createElement('span');\n    boxIcones.classList.add('box-projeto-icones');\n    data.tecnologias.forEach(tecn => {\n        boxIcones.innerHTML += `<iconify-icon icon=\"tabler:${(0, dados_1.getHabilidade)(tecn, 'icone')}\"></iconify-icon>`;\n    });\n    box.appendChild(boxIcones);\n    return box;\n};\nexports.boxProjeto = boxProjeto;\nconst projetoContainer = (cod) => {\n    const container = document.createElement('div');\n    dados_1.meusProjetos.forEach(element => {\n        if (element.cod == cod) {\n            container.setAttribute('id', 'container-projeto');\n            container.classList.add('container-projeto');\n            container.classList.add('translate-y-full');\n            const listaTecs = document.createElement('ul');\n            for (let index = 0; index < element.tecnologias.length; index++) {\n                const tecn = element.tecnologias[index];\n                listaTecs.innerHTML += `<li class=\"list-disc mb-2 text-xs\">${(0, dados_1.getHabilidade)(tecn, 'nome')}</li>`;\n            }\n            const btnLinks = document.createElement('span');\n            btnLinks.innerHTML += element.link_site ?\n                `<a href=\"${element.link_site}\" target=\"_blank\" class=\"btn btn-primario\">\n\t\t\t\t\t<iconify-icon icon=\"tabler:world\"></iconify-icon>\n\t\t\t\t\tVer site\n\t\t\t\t</a>` : '';\n            btnLinks.innerHTML += element.link_git ?\n                `<a href=\"${element.link_git}\" target=\"_blank\" class=\"btn btn-primario\">\n\t\t\t\t\t<iconify-icon icon=\"tabler:brand-github\"></iconify-icon>\n\t\t\t\t\tRepositório\n\t\t\t\t</a>` : '';\n            const listaImgs = document.createElement('div');\n            for (let index = 0; index < element.imgs; index++) {\n                listaImgs.innerHTML +=\n                    `<figure class=\"border border-neutral-200 transition duration-100 brightness-50 hover:brightness-100\">\n\t\t\t\t\t\t<img class=\"w-full aspect-auto\" src=\"../img/projetos/${element.cod}/${index + 1}.jpg\" alt=\"\" />\n\t\t\t\t\t</figure>`;\n            }\n            container.innerHTML =\n                `<div class=\"container\">\n\t\t\t\t\t<span id=\"fechar-projeto\">\n\t\t\t\t\t\t<iconify-icon class=\"text-2xl cursor-pointer\" icon=\"tabler:x\"></iconify-icon>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container h-dvh overflow-y-scroll invisible-scrollbar lg:grid-cols-5 lg:gap-8 lg:overflow-hidden\">\n\t\t\t\t\t<span class=\"flex-col lg:col-span-2 lg:overflow-y-scroll lg:pr-4\">\n\t\t\t\t\t\t<h2 class=\"lg:text-3xl\">${element.nome}</h2>\n\t\t\t\t\t\t<h5 class=\"mb-8 text-orange-500\">${element.data}</h5>\n\t\t\t\t\t\t<p class=\"mb-4\">${element.descr_compl}</p>\n\t\t\t\t\t\t<p class=\"mt-4 mb-2 font-semibold\">Tecnologias utilizadas:</p>\n\t\t\t\t\t\t<ul class=\"ml-4 mb-8\">\n\t\t\t\t\t\t\t${listaTecs.innerHTML}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<span class=\"grid grid-cols-2 gap-2 my-8\">\n\t\t\t\t\t\t\t${btnLinks.innerHTML}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"lg:h-full lg:overflow-y-scroll lg:col-span-3 \">\n\t\t\t\t\t\t<span class=\"grid gap-8\">\n\t\t\t\t\t\t\t${listaImgs.innerHTML}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr class=\"mt-20 opacity-0\" />\n\t\t\t\t</div>`;\n        }\n    });\n    return container;\n};\nexports.projetoContainer = projetoContainer;\n\n\n//# sourceURL=webpack://meu-portfolio/./src/assets/helpers/components.ts?");

/***/ }),

/***/ "./src/assets/helpers/dados.ts":
/*!*************************************!*\
  !*** ./src/assets/helpers/dados.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getHabilidade = exports.minhasHabilidades = exports.meusProjetos = void 0;\nexports.meusProjetos = [\n    {\n        cod: 'gtx100',\n        nome: 'GTX100 Incentivos',\n        data: 'Fevereiro de 2022',\n        descr_breve: 'Site Institucional',\n        descr_compl: 'Empresa de marketind de incentivos',\n        tecnologias: [\n            'htm', 'css', 'sss'\n        ],\n        imgs: 6,\n        link_site: 'https://google.com',\n        link_git: 'google.com',\n        ativo: true\n    },\n    {\n        cod: 'spwork',\n        nome: 'SPWorking',\n        data: 'Novembro de 2024',\n        descr_breve: 'Site Institucional',\n        descr_compl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor feugiat mi, ut congue eros semper eget. Donec venenatis volutpat elementum. Suspendisse sed porttitor urna. In hac habitasse platea dictumst. Integer gravida ante et fringilla commodo.<br><br>Fusce vehicula enim at ligula ornare, vel dignissim nisl interdum. Nam eu sem id magna iaculis maximus.',\n        tecnologias: [\n            'htm', 'css', 'tsc', 'tai', 'web', 'jsn'\n        ],\n        link_site: 'google.com',\n        link_git: 'google.com',\n        imgs: 6,\n        ativo: true\n    },\n    {\n        cod: 'agr',\n        nome: 'Agro&Solar',\n        data: 'Outubro de 2024',\n        descr_breve: 'Site Institucional e Landing Page',\n        descr_compl: 'A Agro & Solar é uma empresa brasileira dedicada a integrar soluções inovadoras no agronegócio, combinando a produção agrícola com a geração de energia solar fotovoltaica. <br><br> Seu principal objetivo é enfrentar desafios globais relacionados à produção de alimentos e energia, promovendo o uso compartilhado do solo para essas finalidades. <br><br> A empresa oferece serviços que englobam desde estudos de viabilidade financeira até o projeto, financiamento, instalação e manutenção de sistemas agrivoltaicos, além da comercialização do excedente de energia gerada.',\n        tecnologias: [\n            'htm', 'css', 'tai', 'web'\n        ],\n        link_site: 'google.com',\n        link_git: 'google.com',\n        imgs: 3,\n        ativo: true\n    },\n    {\n        cod: 'post',\n        nome: 'Material GTX100',\n        data: 'Junho de 2023',\n        descr_breve: 'Material Promocional',\n        descr_compl: '',\n        tecnologias: [\n            'ill', 'psd'\n        ],\n        link_site: false,\n        link_git: false,\n        imgs: 10,\n        ativo: true\n    },\n    {\n        cod: 'logocasa',\n        nome: 'Espaço CasaAir',\n        data: 'Setembro de 2021',\n        descr_breve: 'Logotipo e Indetidade Visual',\n        descr_compl: '',\n        tecnologias: [\n            'ill',\n        ],\n        link_site: false,\n        link_git: false,\n        imgs: 6,\n        ativo: true\n    }\n];\nexports.minhasHabilidades = [\n    { id: 0, cod: 'htm', nome: 'HTML5', icone: 'brand-html5', tipo: 'front' },\n    { id: 1, cod: 'css', nome: 'CSS3', icone: 'brand-css3', tipo: 'front' },\n    { id: 2, cod: 'jsc', nome: 'JavaScript', icone: 'brand-javascript', tipo: 'front' },\n    { id: 3, cod: 'tsc', nome: 'TypeScript', icone: 'brand-typescript', tipo: 'front' },\n    { id: 4, cod: 'vue', nome: 'Vue.js 3', icone: 'brand-vue', tipo: 'front' },\n    { id: 5, cod: 'tai', nome: 'TailwindCSS', icone: 'brand-tailwind', tipo: 'front' },\n    { id: 6, cod: 'sss', nome: 'Sass', icone: 'brand-sass', tipo: 'front' },\n    { id: 7, cod: 'jsn', nome: 'JSON', icone: 'json', tipo: 'front' },\n    { id: 8, cod: 'npm', nome: 'NPM', icone: 'brand-npm', tipo: 'front' },\n    { id: 9, cod: 'psd', nome: 'Adobe Photoshop', icone: 'brand-adobe-photoshop', tipo: 'design' },\n    { id: 10, cod: 'ill', nome: 'Adobe Illustrator', icone: 'brand-adobe-illustrator', tipo: 'design' },\n    { id: 11, cod: 'pre', nome: 'Adobe Premiere', icone: 'brand-adobe-premier', tipo: 'design' },\n    { id: 12, cod: 'uix', nome: 'UI e UX', icone: 'layout-board', tipo: 'design' },\n    { id: 13, cod: 'git', nome: 'Git', icone: 'brand-git', tipo: 'outro' },\n    { id: 14, cod: 'hub', nome: 'GitHub', icone: 'brand-github', tipo: 'outro' },\n    { id: 15, cod: 'wss', nome: 'WordPress', icone: 'brand-wordpress', tipo: 'outro' },\n    { id: 16, cod: 'sql', nome: 'SQL', icone: 'file-type-sql', tipo: 'outro' },\n    { id: 17, cod: 'php', nome: 'PHP', icone: 'brand-php', tipo: 'outro' },\n    { id: 17, cod: 'web', nome: 'Webpack', icone: 'package', tipo: 'outro' },\n];\nconst getHabilidade = (cod, dado) => {\n    let resposta = '';\n    for (let index = 0; index < exports.minhasHabilidades.length; index++) {\n        const element = exports.minhasHabilidades[index];\n        if (element.cod == cod) {\n            switch (dado) {\n                case 'id':\n                    resposta = element.id;\n                    break;\n                case 'código':\n                    resposta = element.cod;\n                    break;\n                case 'nome':\n                    resposta = element.nome;\n                    break;\n                case 'icone':\n                    resposta = element.icone;\n                    break;\n                case 'tipo':\n                    resposta = element.tipo;\n                    break;\n                default:\n                    resposta = 'Dado inválido';\n                    break;\n            }\n        }\n    }\n    return resposta;\n};\nexports.getHabilidade = getHabilidade;\n\n\n//# sourceURL=webpack://meu-portfolio/./src/assets/helpers/dados.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst dados_1 = __webpack_require__(/*! ./assets/helpers/dados */ \"./src/assets/helpers/dados.ts\");\nconst components_1 = __webpack_require__(/*! ./assets/helpers/components */ \"./src/assets/helpers/components.ts\");\nconst toggleMenu = () => {\n    const menu = document.getElementById('menu-mobile');\n    menu.classList.toggle('translate-x-full');\n};\nconst abrirMenu = document.getElementById('btn-abrir-menu');\nabrirMenu.addEventListener('click', () => toggleMenu());\nconst fecharMenu = document.getElementById('btn-fechar-menu');\nfecharMenu.addEventListener('click', () => toggleMenu());\nconst navLinksMobile = document.getElementsByClassName('nav-link-mobile');\nfor (let index = 0; index < navLinksMobile.length; index++) {\n    const element = navLinksMobile[index];\n    element.addEventListener('click', () => toggleMenu());\n}\nconst renderHabilidades = () => {\n    dados_1.minhasHabilidades.forEach(element => {\n        const habilidade = element;\n        const bloco = document.getElementById(`bloco-habilidades-${element.tipo}`);\n        bloco.appendChild((0, components_1.boxHabilidade)(habilidade));\n    });\n};\nconst renderProjetos = () => {\n    dados_1.meusProjetos.forEach(element => {\n        const projeto = element;\n        if (projeto.ativo) {\n            const bloco = document.getElementById(`bloco-projetos`);\n            bloco.appendChild((0, components_1.boxProjeto)(projeto));\n        }\n    });\n    const blocosProjetos = document.getElementsByClassName('box-projeto');\n    for (let index = 0; index < blocosProjetos.length; index++) {\n        const element = blocosProjetos[index];\n        element.addEventListener('click', () => visualizarProjetos(element.id));\n    }\n};\nconst visualizarProjetos = (cod) => {\n    const sessaoProjetos = document.getElementById('sessao-projetos');\n    const container = (0, components_1.projetoContainer)(cod);\n    sessaoProjetos.appendChild(container);\n    setTimeout(() => {\n        container.classList.toggle('translate-y-full');\n    }, 100);\n    const fecharProjeto = document.getElementById('fechar-projeto');\n    fecharProjeto.addEventListener('click', () => {\n        container.classList.toggle('translate-y-full');\n        setTimeout(() => {\n            sessaoProjetos.removeChild(container);\n        }, 1000);\n    });\n};\nwindow.addEventListener('DOMContentLoaded', () => {\n    renderHabilidades();\n    renderProjetos();\n});\n\n\n//# sourceURL=webpack://meu-portfolio/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;