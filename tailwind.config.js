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
        	}
        },
        fontFamily: {
        	'poppins': ['Poppins', 'Helvetica', 'sans-serif']
        }
    },
    plugins: []
};