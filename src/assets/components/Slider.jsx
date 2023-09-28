import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Navbar } from './Navbar';
import { artistas } from './artistas';
import { BiLogoSoundcloud, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import ListaArtistas from './SeccionArtistas';
import { Footer } from './Footer';
import { Divisor } from './Divisor';

export const Slider = () => {
    const [selectedArtista, setSelectedArtista] = useState(null);
    const swiperRef = useRef(null);
    const [currentArtista, setCurrentArtista] = useState(null);
    const [showArtistas, setShowArtistas] = useState(false); // Agregamos un estado para mostrar la sección de artistas

    const handleArtistaClick = (nombre) => {
        setSelectedArtista(artistas[nombre]);
    };

    const handleBackToSlider = () => {
        setSelectedArtista(null);
        setShowArtistas(false);
    };

    const handleMostrarArtistas = () => {
        setSelectedArtista(null); // Restablece selectedArtista a null
        setShowArtistas(true);
    };

    
    

    return (
        <div>
             <Navbar onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas} />
            {selectedArtista ? (
                <div>
                    <div className="w-full mt-28 mb-10 flex justify-evenly  max-md:mt-20 max-md:flex-col">

                        <div className='w-[30rem] max-md:w-[100%] max-md:px-5'>
                            <h2 className='text-[#D5B9FC] font-Sora font-[600] text-[4rem] max-md:text-center'>{selectedArtista.nombre}</h2>
                            <p className='text-[#757575] font-[500] text-[1.2rem] font-Syne max-md:text-center'>{selectedArtista.bio}</p>
                            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>LABEL:
                                <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {selectedArtista.label}</span>
                            </p>
                            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>PERFORMANCE:
                                <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {selectedArtista.performance}</span>
                            </p>
                            <p className='text-[#D5B9FC] mt-2 font-Sora font-[600] text-[1rem] max-md:hidden'>TRAVEL:
                                <span className='text-[#757575] font-[500] text-[1rem] font-Syne'> {selectedArtista.travel}</span>
                            </p>
                            {/* Mostrar las redes sociales */}
                            <div className='flex my-6 text-4xl w-[15rem] justify-around text-[#D5B9FC] cursor-pointer max-md:w-[100%] max-md:justify-evenly'>
                                <a><BiLogoSoundcloud /></a>
                                <a><BiLogoInstagram /></a>
                                <a><BiLogoFacebook /></a>
                                <a href="https://ra.co/" className='flex' target={'_blank'}><img
                                    src='../../../public/assets/fotos/resident.webp'
                                    className=' object-contain'
                                /></a>

                            </div>
                            <p className='bg-[#D5B9FC] font-Syne text-[1.2rem] cursor-pointer w-[42%] text-center py-2 px-4 rounded-md max-md:w-[100%] max-md:rounded-full max-md:mt-12'>
                                agustin@gmail.com
                            </p>
                            {/* Función para poner las redes de cada artista
                            
                             <ul className='text-[#fff] flex'>
                                {Object.entries(selectedArtista.redes).map(([red, url]) => (
                                    <li key={red}>
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            {red}
                                        </a>
                                    </li>
                                ))}
                            </ul>  */}
                        </div>

                        <div className='w-[30%] flex items-center max-md:w-[100%] max-md:px-5 max-md:mt-12 max-md:justify-center' >
                            <img className='w-[36rem] h-[36rem] rounded-3xl max-md:h-[34rem] max-md:w-[34rem]' src={selectedArtista.foto} alt={selectedArtista.nombre} />
                        </div>
                        {/* Mostrar información del artista seleccionado */}
                    </div>
                </div>
            ) : showArtistas ? (
                <ListaArtistas artistas={artistas} onArtistaClick={handleArtistaClick} />
            ) : (
                <div>
                    <Swiper
                        effect={'coverflow'}
                        initialSlide={9}
                        centeredSlides={true}
                        slidesPerView={'5'}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 200,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        slideToClickedSlide={true}
                        spaceBetween={1}
                        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="w-[80%] mx-auto mt-48 cursor-pointer max-sm:mt-20"
                        onSlideChange={(swiper) => {
                            const nombreArtista = Object.keys(artistas)[swiper.realIndex];
                            setCurrentArtista(artistas[nombreArtista].nombre);
                        }}
                        ref={swiperRef}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {Object.keys(artistas).map((nombre) => (
                            <SwiperSlide key={nombre}>
                                <img
                                    src={artistas[nombre].foto}
                                    alt={artistas[nombre].nombre}
                                    className="cursor-pointer rounded-2xl"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex justify-center mt-20 '>
                        <button
                            onClick={() => {
                                if (selectedArtista) {
                                    // Si ya hay un artista seleccionado, volver al slider
                                    setSelectedArtista(null);
                                } else {
                                    // Si no hay un artista seleccionado, seleccionar el artista de la diapositiva actual
                                    const nombreArtista = Object.keys(artistas)[swiperRef.current.swiper.realIndex];
                                    handleArtistaClick(nombreArtista);
                                }
                            }}
                            className='bg-[#D5B9FC] w-[270px] py-4 px-19 my-6 text-xl font-Syne rounded-full max-sm:text-2xl max-sm:w-[23rem]'
                        >
                            {selectedArtista ? 'Volver al Slider' : currentArtista || artistas.artista1.nombre}
                        </button>
                    </div>
                </div>
            )}
            <Divisor/>
            <Footer onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas}/>
        </div>
    );
};
