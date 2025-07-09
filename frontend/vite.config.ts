import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
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
});
