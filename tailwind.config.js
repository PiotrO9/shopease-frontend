/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				gray300: 'var(--gray-300)',
				gray500: 'var(--gray-500)',
				gray600: 'var(--gray-600)',
				gray700: 'var(--gray-700)',
				inputColor: 'var(--input-color)',
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
