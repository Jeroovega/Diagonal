import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { artistas } from './artistas';
import advisor from "../../../public/assets/fotos/resident.webp";
import { BiLogoSoundcloud, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import Navbar from './Navbar';
import { Footer } from './Footer';
import { Divisor } from './Divisor';
import { useArtista } from './ArtistaContext';
import { Helmet } from 'react-helmet';

const ArtistaDetalle = () => {
  const { nombre } = useParams();
  const artista = artistas[nombre];

  if (!artista) {
    return <div>Artista no encontrado</div>;
  }

  // Obtener el contexto de ArtistaProvider
  const { setArtistaId } = useArtista();

  useEffect(() => {
    // Almacenar el nombre del artista visitado recientemente en el Local Storage
    localStorage.setItem('recentlyVisitedArtist', nombre);

    // Llamar a setArtistaId después de que el componente se monte
    setArtistaId(artista.id - 1);
  }, [nombre, setArtistaId, artista.id]);
  

  if (!artista) {
    return <div>Artista no encontrado</div>;
  }

  useEffect(() => {
    // Almacenar el nombre del artista visitado recientemente en el Local Storage
    localStorage.setItem('recentlyVisitedArtist', nombre);
  }, [nombre]);

  const tituloSEO = `${artista.nombre} - Diagonal`;
  const descripcionSEO = ` ${artista.nombre} para SEO.`;

  const handleMailtoClick = () => {
    const email = 'jerovega2001@gmail.com';
    const body = encodeURIComponent(`Hola,

Gracias por tu interés. Si deseas reservar a [NOMBRE DE ARTISTA], por favor envíanos la siguiente información:

Fecha del evento:
Nombre del evento:
Lugar:
Capacidad:
Cantidad de escenarios/pistas:
Capacidad del escenario en el que actuará el/la artista:
Capacidad de otras salas/escenarios:
Horario de apertura y cierre del evento:
Precio de las entradas:
Lineup:
Set time:
Oferta económica:
¿Aplican impuestos? ¿En qué porcentaje y cuáles?:
Reservas recientes:
Página web:

Hi,
Thanks for showing interest! If you’d like to book [NOMBRE DE ARTISTA], please send us the following info.:

Date of the event:
Event name:
Venue:
Capacity:
Number of stages:
Capacity of stage artist will perform:
Capacity of other rooms/stages:
Event open & closing hours:
Ticket price:
Lineup:
Set time:
Offer:
Does withholding tax apply, if yes what %:
Recent bookings:
Website:
For invoicing and contracting, we also need to know:

Name of Organization:
Street:
Street Number:
Zip code:
City:
Country:
VAT ID:
Contact First & Last Names:
Phone Number:
Email:`);

    const mailtoLink = `mailto:${email}?body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='bg-[#000]'>
      <Navbar></Navbar>
      <Helmet>
        <title>{tituloSEO}</title>
        <meta name="description" content={descripcionSEO} />
      </Helmet>
      <div className="w-full mt-28 flex justify-evenly  max-lg:mt-20 max-lg:flex-col flex-w z-10 mb-[2rem] max-md:mb-[-4rem]">
        <div className='w-[30%] flex max-lg:w-[100%] max-lg:px-5 max-lg:justify-center flex-wrap lg:hidden'>
          <img className='w-[32rem] h-[36rem] rounded-3xl max-lg:h-[34rem] max-lg:w-[34rem] xl:min-h-[36rem] lg:min-w-[23rem] lg-min-h-[23rem] xl:min-w-[32rem] lg:hidden  object-contain max-lg:mb-[3rem]' src={artista.foto} alt={artista.nombre} />
        </div>

        <div className='w-[30rem] max-lg:w-[100%] max-lg:px-5 z-10'>
          <h2 className='text-[#D5B9FC] font-Sora font-[600] text-[4rem] max-lg:text-center max-lg:text-[3rem] cursor-pointer'>{artista.nombre}</h2>
          <p className='text-[#757575] font-[500] text-[1.2rem] font-Syne max-lg:text-center text-justify'>{artista.bio}</p>

          {/* Mostrar las redes sociales */}
          <div className='flex my-6 text-4xl w-[15rem] justify-around text-[#D5B9FC] cursor-pointer max-lg:w-[100%] max-lg:justify-evenly'>

            <ul className='text-[#fff] flex justify-evenly w-full'>
              {Object.entries(artista.redes).map(([red, url]) => (
                <li key={red} className="flex text-[#D5B9FC]">
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className='flex'>
                      {red === 'soundcloud' && <BiLogoSoundcloud />}
                      {red === 'instagram' && <BiLogoInstagram />}
                      {red === 'facebook' && <BiLogoFacebook />}
                      {red === 'advisor' && (
                        <img
                          src={advisor}
                          alt="Advisor Icon"
                          className="object-contain"
                        />
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>


          </div>
          <div className='bg-[#D5B9FC] font-Syne text-[1.2rem] cursor-pointer w-[42%] text-center py-2 px-4 rounded-lg max-lg:w-[100%] max-lg:rounded-full max-lg:mt-12 max-lg:mb-12 font-bold'>
            <a onClick={handleMailtoClick}>Book Artist</a>
          </div>



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
