import React from 'react';
import video from "../../../public/assets/fotos/DIAGONAL-Animacion-Home1.mp4"

export const Divisor = () => {
    return (
            <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className='w-full relative bottom-28 max-md:h-[30vh] object-cover'
            />
    );
}