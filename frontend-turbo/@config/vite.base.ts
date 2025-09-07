import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(process.cwd(), 'src/index.ts'),
			name: 'commonImplementation',
			fileName: 'common-implementation',
			formats: ['es'],
		},
		rollupOptions: {},
	},
});
