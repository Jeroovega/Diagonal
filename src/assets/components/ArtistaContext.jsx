import React, { createContext, useContext, useState } from 'react';

const ArtistaContext = createContext();

export const ArtistaProvider = ({ children }) => {
  const [artistaId, setArtistaId] = useState(null);

  return (
    <ArtistaContext.Provider value={{ artistaId, setArtistaId }}>
      {children}
    </ArtistaContext.Provider>
  );
};

export const useArtista = () => {
  const context = useContext(ArtistaContext);
  if (!context) {
    throw new Error('useArtista debe usarse dentro de un ArtistaProvider');
  }
  return context;
};
