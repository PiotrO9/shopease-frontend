export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/apollo',
	],

	plugins: ['~/plugins/pinia.js'],
	devtools: { enabled: true },
	css: ['./assets/styles/app.css'],

	compatibilityDate: '2024-12-22',

	typescript: {
		typeCheck: true,
	},

	apollo: {
		clients: {
			default: {
				cookieAttributes: {
					httpOnly: true,
				},
				httpEndpoint: process.env.BACKEND_SERVER ?? '',
			},
		},
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
