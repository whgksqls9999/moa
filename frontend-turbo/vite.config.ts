import { defineConfig } from 'vite';
import path from 'path';
import baseConfig from './@config/vite.base';

export default defineConfig({
	...baseConfig,
	// build: {
	// 	lib: {
	// 		entry: path.resolve(
	// 			__dirname,
	// 			'@source/common/implementation/src/index.ts'
	// 		),
	// 		name: 'commonImplementation',
	// 		fileName: 'common-implementation',
	// 		formats: ['es'],
	// 	},
	// 	rollupOptions: {},
	// },
});
