// ListaArtistas.jsx
import React from 'react';

const ListaArtistas = ( { artistas, onArtistaClick } ) => {

  const handleArtistaClick = (nombre) => {
    onArtistaClick(nombre);
  };
  
  
  return (
    <div className='text-[#fff] mx-36 flex flex-col mt-16 max-md:mx-0 flex-wrap '>
      <h1 className='text-[#828282] text-[20px] font-[400] mb-8 max-md:text-center max-md:font-bold '>Our Artists</h1>
      <ul>
        {Object.keys(artistas).map((nombre) => (
          <h2 key={nombre}
          className='text-[#fff] font-Sora font-[400] text-[4rem] border-b-2 py-2 hover:text-[#bb90f8] transition-all max-md:flex-wrap max-md:text-center max-md:text-[2.5rem] max-md:mx-4'>
            <button onClick={() => handleArtistaClick(nombre)}>
              {artistas[nombre].nombre}
            </button>
          </h2>
        ))}
      </ul>
    </div>
  );
};

export default ListaArtistas;
