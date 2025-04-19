/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		screens: {
			xxs: '420px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				gray300: 'var(--gray-300)',
				gray500: 'var(--gray-500)',
				gray600: 'var(--gray-600)',
				gray700: 'var(--gray-700)',
				gray900: 'var(--gray-900)',
				gold: 'var(--color-gold)',
				error: 'var(--color-error)',
				inputColor: 'var(--input-color)',
				linkBase: 'var(--link-color-hover)',
			},
			container: {
				center: true,
				screens: {
					sm: '1536px',
				},
			},
		},
	},
	plugins: [],
};
