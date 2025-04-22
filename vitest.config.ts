import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./app/tests/setup.ts'],
		include: ['app/tests/**/*.test.ts'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'app/tests/__mocks__/**'],
		},
		alias: {
			'~': path.resolve(__dirname, '.'),
			'@': path.resolve(__dirname, '.'),
		},
	},
});
