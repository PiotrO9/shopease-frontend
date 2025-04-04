export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],

	plugins: ['~/plugins/pinia.js'],

	ssr: true,

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	devtools: { enabled: true },
	css: ['./assets/styles/app.css'],

	runtimeConfig: {
		public: {
			graphqlEndpoint: process.env.BACKEND_SERVER || '',
		},
	},

	compatibilityDate: '2024-12-22',

	typescript: {
		typeCheck: true,
	},

	eslint: {
		checker: true,
		config: {
			stylistic: true,
		},
	},

	googleFonts: {
		families: {
			Geist: true,
		},
	},
});
