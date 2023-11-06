import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importa React Helmet
import ArtistaDetalle from './assets/components/ArtistaDetalle';
import ListaArtistas from './assets/components/SeccionArtistas';
import { Slider } from './assets/components/Slider';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Slider />} />
        <Route path="/artistas/:nombre" element={<ArtistaDetalle />} />
        <Route path="/artistas" element={<ListaArtistas />} />
      </Routes>
    </Router>
  );
}

export default App;
