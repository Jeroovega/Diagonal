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
      <div className="w-full mt-28 flex justify-evenly  max-lg:mt-20 max-lg:flex-col flex-w z-10 mb-[2rem] max-md:mb-[-2rem]">
        <div className='w-[30%] flex max-lg:w-[100%] max-lg:px-5 max-lg:justify-center flex-wrap lg:hidden'>
          <img className='w-[32rem] h-[36rem] rounded-3xl max-lg:h-[34rem] max-lg:w-[34rem] xl:min-h-[36rem] lg:min-w-[23rem] lg-min-h-[23rem] xl:min-w-[32rem] lg:hidden  object-cover max-lg:mb-[3rem]' src={artista.foto} alt={artista.nombre} />
        </div>

          <div className='w-[30rem] max-lg:w-[100%] max-lg:px-5 z-10'>
          <h2 className='text-[#D5B9FC] font-Sora font-[600] text-[4rem] max-lg:text-center max-lg:text-[3rem] cursor-pointer'>{artista.nombre}</h2>
          <p className='text-[#757575] font-[500] text-[1.2rem] font-Syne max-lg:text-center'>{artista.bio}</p>

          {/* Mostrar las redes sociales */}
          <div className='flex my-6 text-4xl w-[15rem] justify-around text-[#D5B9FC] cursor-pointer max-lg:w-[100%] max-lg:justify-evenly'>
            <a><BiLogoSoundcloud /></a>
            <a><BiLogoInstagram /></a>
            <a><BiLogoFacebook /></a>
            <a href="https://ra.co/" className='flex' target={'_blank'}><img
              src={advisor}
              className=' object-contain'
            /></a>

          </div>
          <p className='bg-[#D5B9FC] font-Syne text-[1.2rem] cursor-pointer w-[42%] text-center py-2 px-4 rounded-lg max-lg:w-[100%] max-lg:rounded-full max-lg:mt-12 max-lg:mb-12 font-bold'>
            Book Artist
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

        <div className='w-[30%] flex max-lg:w-[100%] max-lg:px-5 max-lg:justify-center flex-wrap' >
          <img className='w-[32rem] h-[36rem] rounded-3xl max-lg:h-[34rem] max-lg:w-[34rem] xl:min-h-[36rem] lg:min-w-[23rem] lg-min-h-[23rem] xl:min-w-[32rem] max-lg:hidden object-cover' src={artista.foto} alt={artista.nombre} />
        </div>
        {/* Mostrar información del artista seleccionado */}
      </div>
      <Divisor />

      <Footer className="max-lg:mt-0" />
    </div>
  );
};

export default ArtistaDetalle;
