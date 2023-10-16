import React from 'react';
import { useNavigate } from 'react-router-dom';
import {artistas} from './artistas'; // Asegúrate de importar artistas adecuadamente
import { Divisor } from './Divisor';
import { Footer } from './Footer';
import Navbar from './Navbar';

const ListaArtistas = () => {
  const history = useNavigate();

  const handleArtistaClick = (nombre) => {
    // Navegar a la página de detalle del artista cuando se hace clic en un nombre
    history(`/artistas/${nombre}`);
    window.scrollTo(0, 0)
  };

  return (
    <div className='bg-[#000]'>
    <Navbar />
    <div className='text-[#fff] bg-[#000] mx-36 mb-20 flex flex-col mt-16 max-lg:mx-0 flex-wrap max-md:mb-[-0rem]'>
      <h1 className='text-[#828282] text-[20px] font-[400] mb-8 max-lg:text-center max-lg:font-bold '>Our Artists</h1>
      <ul className='z-10'>
        {Object.keys(artistas).map((nombre) => (
          <h2
            key={nombre}
            className='text-[#fff] font-Sora font-[400] text-[4rem] border-b-2 py-2 hover:text-[#bb90f8] transition-all max-lg:flex-wrap max-lg:text-center max-lg:text-[2.5rem] max-lg:mx-4'
          >
            <button onClick={() => handleArtistaClick(nombre)}>
              {artistas[nombre].nombre}
            </button>
          </h2>
        ))}
      </ul>
    </div>
    <Divisor/>
    <Footer />
    </div>
  );
};

export default ListaArtistas;
