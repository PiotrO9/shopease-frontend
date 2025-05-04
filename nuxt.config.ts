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

	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				// You can add more favicon formats here:
				// { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				// { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				// { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
			],
		},
	},
	css: ['./assets/styles/app.css'],

	runtimeConfig: {
		public: {
			graphqlEndpoint: process.env.BACKEND_SERVER || '',
		},
	},

	future: {
		compatibilityVersion: 4,
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
