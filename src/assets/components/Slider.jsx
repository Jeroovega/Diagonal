import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { artistas } from './artistas';
import { useNavigate } from 'react-router-dom';
import { useArtista } from './ArtistaContext'; 
import { Helmet } from 'react-helmet';



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
        if (window.innerWidth <= 768) { // Considera el ancho de la ventana, puedes ajustar este valor
            setSelectedArtista(artistas[nombre]);
            navigate(`/artistas/${nombre}`);
            window.scrollTo(0, 0)
        } else {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideToLoop(swiperRef.current.swiper.realIndex);
                setIsImageCentered(true);
                navigate(`/artistas/${nombre}`);
                window.scrollTo(0, 0)
            }
        }
    };

    const handleImageClick = (nombre) => {
        if (window.innerWidth <= 768) { // Considera el ancho de la ventana, puedes ajustar este valor
            setSelectedArtista(artistas[nombre]);
            navigate(`/artistas/${nombre}`);
            window.scrollTo(0, 0)
        } else {
            if (isImageCentered) {
                navigate(`/artistas/${nombre}`);
                window.scrollTo(0, 0)
                setIsImageCentered(false);
            } else {
                if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideToLoop(swiperRef.current.swiper.realIndex);
                    setIsImageCentered(true);
                }
            }
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

    const { artistaId } = useArtista();

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

    const tituloSEO = `Diagonal`;
    const descripcionSEO = `Diagonal para SEO.`;


    return (
        <div className='bg-[#000]'>
            <Helmet>
                <title>{tituloSEO}</title>
                <meta name="description" content={descripcionSEO} />
            </Helmet>
            <Navbar onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas} />
            {selectedArtista ? (
                <div>
                </div>
            ) : showArtistas ? (
                <ListaArtistas artistas={artistas} onArtistaClick={handleArtistaClick} />
            ) : (
                <div className='max-md:mb-[-3rem] max-lg:landscape:mb-[3rem]'>
                    <Swiper
                        effect={'coverflow'}
                        initialSlide={artistaId}
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
                            {selectedArtista ? 'Volver al Slider' : currentArtista || artistas.afemsyko.nombre}
                        </button>
                    </div>
                </div>
            )}
            <Divisor />
            <Footer onBackToSliderClick={handleBackToSlider} onArtistasClick={handleMostrarArtistas} />
        </div>
    );
};