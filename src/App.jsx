import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtistaDetalle from './assets/components/ArtistaDetalle';
import ListaArtistas from './assets/components/SeccionArtistas';
import { Slider } from './assets/components/Slider';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Slider/>} />
        <Route path="/artistas/:nombre" element={<ArtistaDetalle />} /> {/* Ajusta la ruta según tu configuración */}
        <Route path="/artistas" element={<ListaArtistas />} /> {/* Ajusta la ruta según tu configuración */}
      </Routes>
    </Router>
  );
}

export default App;
