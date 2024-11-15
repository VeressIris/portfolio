/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			black: '#000000',
			gray: {
				100: '#282C34',
				200: '#252931',
				300: '#1D2025'
			},
			'light-gray': {
				100: '#CCCCCC',
				200: '#ABB2BF'
			},
			cyan: '#56B6C2',
			blue: {
				100: '#61AFEF',
				200: '#528BFF'
			},
			purple: '#C678DD',
			green: '#98C379',
			rose: '#E06C75',
			red: '#BE5046',
			orange: '#D19A66',
			gold: '#E5C07B'
		}
	},

	plugins: []
};
