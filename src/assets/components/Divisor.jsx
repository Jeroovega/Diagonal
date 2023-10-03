import React from 'react';
import video from "../../../public/assets/fotos/DIAGONAL-Animacion-Home.mp4"

export const Divisor = () => {
    return (
            <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className='w-full relative bottom-12 max-md:h-[30vh] object-cover'
            />
    );
}