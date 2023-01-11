/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1.25rem',
			},
		},
	},
	plugins: [],
};
