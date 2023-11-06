import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom
import App from './App';
import './index.css';
import { ArtistaProvider } from './assets/components/ArtistaContext';

const root = createRoot(document.getElementById('root')); // Utiliza createRoot
root.render(
  <ArtistaProvider>
    <App />
  </ArtistaProvider>
);
