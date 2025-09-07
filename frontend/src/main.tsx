import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './application/App.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
