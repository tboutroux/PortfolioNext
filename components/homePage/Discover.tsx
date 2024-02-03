/* Librairies */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Image from 'next/image';

/* HERO BOTTOM COMPONENT */
export const Discover = () => {

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
        <div>

            <Link href="#presentation-page" className="w-full absolute bottom-0 flex flex-col justify-center items-center mb-10 sm:mb-8 gap-3 cursor-pointer">
                <span className="text-md sm:text-2xl xl:text-3xl font-bold text-black animate-pulse">Découvrez mon parcours</span>
                <span className="text-md lg:text-3xl animate-pulse"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Link>
            
            <Image src={waveSrc} width={500} height={800} alt={"Vague hero"} className="w-full absolute bottom-0 -z-20"/>
        </div>
    );
}