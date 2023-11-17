import React from 'react'

import logo from "../../../public/assets/fotos/DIAGONAL-Imagotipo-Negativo.png"
import { Link, useNavigate } from 'react-router-dom';

export const Footer = ({ onBackToSliderClick, onArtistasClick }) => {

    const navigate = useNavigate();
    const handleBackToSliderClick = () => {
        navigate(`/`);
        window.scrollTo(0, 0);
    };

    const handleArtistasClick = () => {
        // Redirigir a la sección de artistas
        navigate(`/artists`);
        window.scrollTo(0, 0); // Ajusta la URL según la ubicación de tu sección de artistas
      };

    return (
        <div className='pb-20 mx-20 xl:mt-[-7rem] md:-mt-[9rem] max-lg:mt-[-11rem]  flex justify-around items-center max-lg:flex-col max-lg:landscape:mt-[-5rem]'>
            <div className='z-10'>
                <img className='w-[21rem] mb-8 max-lg:mb-16 cursor-pointer' src={logo} />
                <div className='flex flex-col'>
                <span className='font-Syne text-[1.2rem] text-[#ffffff5b] cursor-pointer max-lg:hidden'>Copyright © 2023</span>
                </div>
            </div>
            <div className='w-[1px] h-[11.7rem] bg-[#666] max-lg:hidden'>
            </div>

            <div className='flex w-[17rem] font-Syne text-[#ffffff5b] justify-between'>
                <div>
                    <span className='text-[1.2rem] cursor-pointer max-lg:text-[20px] hover:text-[#ffffffc2]'>Explore</span>
                    <ul className='text-[1.5rem] cursor-pointer mt-6'>
                        <li
                            className='max-lg:text-[20px] hover:text-[#ffffffc2]'
                            onClick={handleArtistasClick} // Llama a la función al hacer clic en "Artist"
                        >
                            <a>Artist</a>
                        </li>
                        <li
                            className='max-lg:text-[20px] hover:text-[#ffffffc2]'
                            onClick={handleBackToSliderClick} // Llama a la función al hacer clic en "Home"
                        >
                            <a>Home</a>
                        </li>
                    </ul>

                </div>
                <div className='w-[1px] h-[8.7rem] bg-[#666] lg:hidden '></div>
                <div>
                    <span className='text-[1.2rem] cursor-pointer max-lg:text-[20px] hover:text-[#ffffffc2]'>Social</span>
                    <ul className='text-[1.5rem] cursor-pointer mt-6'>
                        <li className='max-lg:text-[20px] hover:text-[#ffffffc2]'><a href='https://www.instagram.com/diagonal.bookings/' target={"_blank"}>Instagram</a></li>
                    </ul>
                </div>

            </div>
            <div className='mt-10 flex flex-col text-center'>
                <span className='flex-col text-[#666] lg:hidden'>Copyright © 2023</span>
                
            </div>
        </div>
    )
}
