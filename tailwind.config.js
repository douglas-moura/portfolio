/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['selector', '[data-mode="dark"]'],
    content: [
    	"./src/**/*.{html,js,ts}",
    ],
    theme: {
        extend: {
        	backgroundImage: {
        		'foto-perfil': "url('/src/assets/img/foto-perfil.jpg')",
        		'circulos': "url('/src/assets/img/background-circulos.png')",
        		'cidade': "url('/src/assets/img/bg-cidade.jpg')",
        	},
            colors: {
                'laranja': '#f45714',
                'cinza': {
                    '50': '#FAFAFA',
                    '100': '#EDEDED',
                    '200': '#D3D3D3',
                    '500': '#878787',
                    '700': '#545454',
                    '800': '#3B3B3B',
                    '900': '#212121'
                }
            },
        },
        fontFamily: {
        	'poppins': ['Poppins', 'Helvetica', 'sans-serif']
        }
    },
    plugins: []
};