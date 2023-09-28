import React from 'react';

export const Navbar = ({ onBackToSliderClick, onArtistasClick }) => {
  const handleBackToSliderClick = () => {
    // Llama a la función proporcionada desde el componente padre (Slider.jsx)
    onBackToSliderClick();
  };

  return (
    <nav className='bg-[#000] text-[#fff] flex justify-between px-6 sm:px-24 py-4 sm:py-10 items-center w-full max-sm:pt-6'>
      <div>
        <img
          src='../../../public/assets/fotos/DIAGONAL-Isotipo-Negativo.png'
          className='w-[91px] h-[51px] cursor-pointer max-w-full max-sm:w-[80px] max-sm:h-[40px]'
          onClick={handleBackToSliderClick}
          alt='Logo'
        />
      </div>
      <div className='w-full flex justify-end font-Syne text-2xl font-[400]'>
        <ul className='flex w-[40%] sm:w-[20%] justify-evenly items-center gap-[2rem]'>
          <button onClick={handleBackToSliderClick} className='max-md:hidden'>
            Home
          </button>
          <button
            onClick={onArtistasClick}
            className='bg-[#D5B9FC] py-3 px-6 rounded-full font-[400] text-[#000] max-sm:text-[20px] max-sm:px-4 max-sm:py-2' 
          >
            <a className='flex w-[7rem] justify-center'>ARTISTS ></a>
          </button>
        </ul>
      </div>
    </nav>
  );
};
