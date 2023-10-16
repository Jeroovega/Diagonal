import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../public/assets/fotos/DIAGONAL-Isotipo-Negativo.png"


const Navbar = () => {
  const navigate = useNavigate();

  const handleBackToSliderClick = () => {
    // Redirigir de nuevo al Slider
    navigate(`/`);; // Ajusta la URL según la ubicación de tu Slider
  };

  const handleArtistasClick = () => {
    // Redirigir a la sección de artistas
    navigate(`/artistas`);; // Ajusta la URL según la ubicación de tu sección de artistas
  };
  return (
    <nav className='bg-[#000] text-[#fff] flex justify-between px-6 sm:px-24 py-4 sm:py-10 items-center w-full max-sm:pt-6'>
      <div>
        <Link to="/"> {/* Enlace al Slider */}
          <img
            src={logo}
            className='w-[91px] h-[51px] cursor-pointer max-w-full max-sm:w-[80px] max-sm:h-[40px]'
            alt='Logo'
          />
        </Link>
      </div>
      <div className='w-full flex justify-end font-Syne text-2xl font-[400]'>
        <ul className='flex w-[40%] sm:w-[20%] justify-evenly items-center gap-9'>
          <button onClick={handleBackToSliderClick} className="max-md:hidden">
            Home
          </button>
          <button
            onClick={handleArtistasClick}
            className='bg-[#D5B9FC] py-3 px-6 rounded-full font-[400] text-[#000] max-sm:text-[20px] max-sm:px-4 max-sm:py-2 mr-3'
          >
            <a className='flex w-[9rem] max-md:w-[8rem] justify-center'>ARTISTS ></a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
