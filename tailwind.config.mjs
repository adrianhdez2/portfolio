/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fill: {
				"perso": '#CC522B',
				"perso-hover": "#cf3d0c"
			},
			textColor: {
				"perso": '#CC522B',
				"perso-hover": "#cf3d0c"
			},
			backgroundColor: {
				"perso": '#CC522B',
				"perso-hover": "#cf3d0c"
			}
		},
	},
	plugins: [],
}
