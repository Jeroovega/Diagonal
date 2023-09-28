import React from 'react'

export const Footer = ({ onBackToSliderClick, onArtistasClick }) => {

    const handleBackToSliderClick = () => {
        onBackToSliderClick();
    };

    return (
        <div className='mt-40 pb-20 mx-20  flex justify-around items-center max-md:flex-col max-md:mt-20'>
            <div className=''>
                <img className='w-[21rem] mb-8 max-md:mb-16 cursor-pointer' src='../../../public/assets/fotos/DIAGONAL-Imagotipo-Negativo.png' />
                <span className='font-Syne text-[1.2rem] text-[#ffffff5b] cursor-pointer max-md:hidden'>Copyright © 2023</span>
            </div>
            <div className='w-[1px] h-[11.7rem] bg-[#666] max-md:hidden'>
            </div>

            <div className='flex w-[17rem] font-Syne text-[#ffffff5b] justify-between'>
                <div>
                    <span className='text-[1.2rem] cursor-pointer max-md:text-[20px] hover:text-[#ffffffc2]'>Explore</span>
                    <ul className='text-[1.5rem] cursor-pointer mt-6'>
                        <li
                            className='max-md:text-[20px] hover:text-[#ffffffc2]'
                            onClick={onArtistasClick} // Llama a la función al hacer clic en "Artist"
                        >
                            <a>Artist</a>
                        </li>
                        <li
                            className='max-md:text-[20px] hover:text-[#ffffffc2]'
                            onClick={handleBackToSliderClick} // Llama a la función al hacer clic en "Home"
                        >
                            <a>Home</a>
                        </li>
                    </ul>

                </div>
                <div className='w-[1px] h-[8.7rem] bg-[#666] md:hidden lg:hidden'></div>
                <div>
                    <span className='text-[1.2rem] cursor-pointer max-md:text-[20px] hover:text-[#ffffffc2]'>Social</span>
                    <ul className='text-[1.5rem] cursor-pointer mt-6'>
                        <li className='max-md:text-[20px] hover:text-[#ffffffc2]'><a>Instagram</a></li>
                    </ul>
                </div>

            </div>
            <div className='mt-10'>
                <span className='flex-col text-[#666] md:hidden lg:hidden'>Copyright © 2023</span>
            </div>
        </div>
    )
}
