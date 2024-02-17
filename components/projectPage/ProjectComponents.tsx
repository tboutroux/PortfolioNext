import React, { useState, useEffect } from 'react';
import Carrousel from './Carrousel';
import Image from 'next/image';

const ProjectPage = () => {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Vérifiez si window est défini avant d'y accéder
        if (typeof window !== 'undefined') {
          // Mettez à jour la largeur de l'écran lors du chargement initial
            setScreenWidth(window.innerWidth);

          // Ajoutez un écouteur d'événement de redimensionnement
            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

          // Nettoyez l'écouteur d'événement lors de la suppression du composant
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // Le tableau vide signifie que cet effet n'a besoin de s'exécuter qu'une seule fois au montage

    let waveSrc = "/assets/pictures/hero-wave.svg";

    if (screenWidth < 768) {
        waveSrc = "/assets/mobilePictures/wave.svg";
    }

    return (
        <div className='w-full'>
            <Image src={waveSrc} width={500} height={800} alt={"Vague hero"} className="w-full relative"/>
            <div className='bg-gold'>
                <div className="flex justify-center items-center w-3/4 flex-col m-auto gap-20">
                    <h1 id="projets" className="text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold ">Mes Projets</h1>
                    <Carrousel />
                </div>
            </div>
            <Image src={waveSrc} width={500} height={800} alt={"Vague hero"} className="w-full rotate-180 relative"/>
        </div>
    );
};

export default ProjectPage;