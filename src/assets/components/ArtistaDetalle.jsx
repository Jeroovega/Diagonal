import React from 'react';
import { useParams } from 'react-router-dom';
import { artistas } from './artistas';
import advisor from "../../../public/assets/fotos/resident.webp"
import { BiLogoSoundcloud, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import Navbar from './Navbar';
import { Footer } from './Footer';
import { Divisor } from './Divisor';


const ArtistaDetalle = () => {
  const { nombre } = useParams();
  const artista = artistas[nombre];

  if (!artista) {
    return <div>Artista no encontrado</div>;
  }


  return (
    <div className='bg-[#000]'>
      <Navbar></Navbar>
        <div className="w-full mt-28 mb-28 flex justify-evenly  max-md:mt-20 max-md:flex-col z-10">

          <div className='w-[30rem] max-md:w-[100%] max-md:px-5 z-10'>
            <h2 className='text-[#D5B9FC] font-Sora font-[600] text-[4rem] max-md:text-center max-md:text-[3rem] cursor-pointer'>{artista.nombre}</h2>
            <p className='text-[#757575] font-[500] text-[1.2rem] font-Syne max-md:text-center'>{artista.bio}</p>
            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>LABEL:
              <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {artista.label}</span>
            </p>
            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>PERFORMANCE:
              <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {artista.performance}</span>
            </p>
            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>TRAVEL:
              <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {artista.travel}</span>
            </p>
            {/* Mostrar las redes sociales */}
            <div className='flex my-6 text-4xl w-[15rem] justify-around text-[#D5B9FC] cursor-pointer max-md:w-[100%] max-md:justify-evenly'>
              <a><BiLogoSoundcloud /></a>
              <a><BiLogoInstagram /></a>
              <a><BiLogoFacebook /></a>
              <a href="https://ra.co/" className='flex' target={'_blank'}><img
                src={advisor}
                className=' object-contain'
              /></a>

            </div>
            <p className='bg-[#D5B9FC] font-Syne text-[1.2rem] cursor-pointer w-[42%] text-center py-2 px-4 rounded-md max-md:w-[100%] max-md:rounded-full max-md:mt-12'>
              agustin@gmail.com
            </p>
            {/* Función para poner las redes de cada artista
                            
                             <ul className='text-[#fff] flex'>
                                {Object.entries(artista.redes).map(([red, url]) => (
                                    <li key={red}>
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            {red}
                                        </a>
                                    </li>
                                ))}
                            </ul>  */}
          </div>

          <div className='w-[30%] flex max-md:w-[100%] max-md:px-5 max-md:justify-center' >
            <img className='w-[36rem] h-[36rem] rounded-3xl max-md:h-[34rem] max-md:w-[34rem] max-md:object-contain' src={artista.foto} alt={artista.nombre} />
          </div>
          {/* Mostrar información del artista seleccionado */}
        </div>
        <Divisor />

        <Footer className="max-md:mt-0" />
      </div>
  );
};

export default ArtistaDetalle;
