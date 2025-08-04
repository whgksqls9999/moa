import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [],
			// manifest: {
			// 	name: 'Moa',
			// 	short_name: 'Moa',
			// 	start_url: '.',
			// 	display: 'standalone',
			// 	background_color: '#ffffff',
			// 	theme_color: '#4A90E2',
			// 	icons: [],
			// },
		}),
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@application': path.resolve(__dirname, 'src/application'),
			'@global': path.resolve(__dirname, 'src/global'),
		},
	},
});
