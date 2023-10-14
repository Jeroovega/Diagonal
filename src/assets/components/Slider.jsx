import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { artistas } from './artistas';
import { BiLogoSoundcloud, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import advisor from "../../../public/assets/fotos/resident.webp"
import { useNavigate } from 'react-router-dom';



import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import ListaArtistas from './SeccionArtistas';
import { Footer } from './Footer';
import { Divisor } from './Divisor';
import Navbar from './Navbar';

export const Slider = () => {
    const [selectedArtista, setSelectedArtista] = useState(null);
    const swiperRef = useRef(null);
    const [currentArtista, setCurrentArtista] = useState(null);
    const [showArtistas, setShowArtistas] = useState(false);
    const [isImageCentered, setIsImageCentered] = useState(false);
    const navigate = useNavigate();

        const handleArtistaClick = (nombre) => {
        if (isImageCentered) {
            setSelectedArtista(artistas[nombre]);
            
            navigate(`/artistas/${nombre}`);
        } else if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(swiperRef.current.swiper.realIndex);
            setIsImageCentered(true);
        }
    };

    const handleImageClick = (nombre) => {
        
        
        if (isImageCentered) {
            navigate(`/artistas/${nombre}`);
            setSelectedArtista(artistas[nombre]);
        } else {
            setIsImageCentered(true);
        }
    };


    const handleBackToSlider = () => {
        setSelectedArtista(null);
        setShowArtistas(false);
};

    const handleMostrarArtistas = () => {
        setSelectedArtista(null);
        setShowArtistas(true);
    };


    useEffect(() => {
    const handlePopState = () => {
        // Manejar el evento popstate aquí, por ejemplo, regresar al slider si es necesario.
        handleBackToSlider();
    };

    // Agregar un escuchador de eventos para 'popstate' con { passive: true }
    window.addEventListener('popstate', handlePopState, { passive: true });

    // Eliminar el escuchador de eventos cuando el componente se desmonte
    return () => {
        window.removeEventListener('popstate', handlePopState);
    };
}, []);



    return (
        <div className='bg-[#000]'>
            <Navbar onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas} />
            {selectedArtista ? (
                <div>
                    <div className="w-full mt-28 mb-10 flex justify-evenly  max-md:mt-20 max-md:flex-col z-10">

                        <div className='w-[30rem] max-md:w-[100%] max-md:px-5 z-10'>
                            <h2 className='text-[#D5B9FC] font-Sora font-[600] text-[4rem] max-md:text-center max-md:text-[3rem]'>{selectedArtista.nombre}</h2>
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
                                    src={advisor}
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

                        <div className='w-[30%] flex max-md:w-[100%] max-md:px-5 max-md:justify-center' >
                            <img className='w-[36rem] h-[36rem] rounded-3xl max-md:h-[34rem] max-md:w-[34rem] max-md:object-contain' src={selectedArtista.foto} alt={selectedArtista.nombre} />
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
                        initialSlide={2}
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
                        className="w-[80%] mx-auto mt-20 cursor-pointer max-sm:mt-20"
                        onSlideChange={(swiper) => {
                            const nombreArtista = Object.keys(artistas)[swiper.realIndex];
                            setCurrentArtista(artistas[nombreArtista].nombre);
                            setIsImageCentered(false); // Restablecer el estado cuando cambies de diapositiva
                        }}

                        ref={swiperRef}
                    >
                        {Object.keys(artistas).map((nombre) => (
                            <SwiperSlide key={nombre}>
                                <img
                                    src={artistas[nombre].foto}
                                    alt={artistas[nombre].nombre}
                                    className={`cursor-pointer rounded-2xl`}
                                    onClick={() => handleImageClick(nombre)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex justify-center mt-20 '>
                        <button
                            onClick={() => {
                                if (selectedArtista) {
                                    setSelectedArtista(null);
                                } else {
                                    const nombreArtista = Object.keys(artistas)[swiperRef.current.swiper.realIndex];
                                    handleArtistaClick(nombreArtista);
                                }
                            }}
                            className='bg-[#D5B9FC] w-[270px] py-4 px-19 my-6 text-xl font-Syne rounded-full max-sm:text-2xl max-sm:w-[23rem] z-10'
                        >
                            {selectedArtista ? 'Volver al Slider' : currentArtista || artistas.artista1.nombre}
                        </button>
                    </div>
                </div>
            )}
            <Divisor />
            <Footer onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas} />
        </div>
    );
};