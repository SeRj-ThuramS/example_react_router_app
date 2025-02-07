import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/app.css';
import App from './App';
import { GlobalProvider } from './context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</StrictMode>
);
