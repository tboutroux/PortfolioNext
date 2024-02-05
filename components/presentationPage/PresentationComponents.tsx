// Votre composant Next.js
import React, {useState, useEffect } from 'react';
import { faCode, faFutbol, faCar } from "@fortawesome/free-solid-svg-icons";
import PassionItem from './PassionItem';
import BoutonCv from './BoutonCV';
import Image from 'next/image';

const PresentationPage = () => {

    let birthDate = new Date("2005-01-21");
    let age = new Date().getFullYear() - birthDate.getFullYear();

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
        <div className='bg-gold w-full mb-20 sm:mb-40 xl:mb-80'>
            <div className="flex justify-center items-center">
                <h1 id='presentation-page' className="m-10 text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold xl:m-10 lg:m-8">Qui suis-je ?</h1>
            </div>

            <div className="flex justify-center items-center flex-col w-full lg:w-full m-auto gap-20">

                <div className="flex justify-between items-center flex-col gap-12">
                    
                    <div className="w-3/4 flex justify-center flex-col lg:flex-row lg:items-center items-start m-auto gap-6">

                        <div className="flex flex-col xl:gap-4 w-full">
                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Présentation</h2>
                            <p className='text-xs sm:text-sm lg:text-md xl:text-sm text-justify'>
                                
                                Bonjour à tous, je m'appelle Théo Boutroux, 
                                j'ai {age} ans et je suis actuellement en deuxième 
                                année d'informatique à l'EPSI Nantes. Mon intérêt 
                                principal se porte sur le développement web, 
                                domaine dans lequel je souhaite me spécialiser. 
                                Au fil de ce portfolio, vous aurez l'occasion de 
                                découvrir les différents projets sur lesquels j'ai 
                                travaillé ainsi que les compétences que j'ai développées 
                                dans ce domaine. Mon objectif est de partager mon parcours 
                                et ma passion pour le développement web. N'hésitez pas à 
                                explorer cet espace virtuel pour en savoir plus sur mes 
                                réalisations et mes aspirations professionnelles.

                            </p>
                        </div>

                        <div className="flex justify-center items-center w-full">
                            <BoutonCv />
                        </div>

                    </div>
                    
                </div>

                <div className="w-3/4 flex justify-center flex-col items-start m-auto">
                    <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-medium'>Mes Passions</h2>

                    <div className="flex justify-between lg:justify-between flex-col lg:flex-row xl:grid xl:grid-cols-3 xl:gap-5 lg:gap-4 h-full"> {/* lg:flex lg:flex-wrap xl:grid xl:grid-cols-3 xl:gap-5 lg:gap-4 */}
                        <PassionItem icon={faCode} title='Le développement Web' description="Passionné de développement web depuis plus de 4 ans, je suis vraiment dans mon élément. J'ai une solide maîtrise de l'HTML, du CSS et du JavaScript, en plus d'avoir utilisé des frameworks CSS tels que Bootstrap et Tailwind CSS." />
                        <PassionItem icon={faFutbol} title='Le Football' description="Je suis un énorme fan de football ! J'adore suivre les matchs, parler des équipes, et célébrer chaque moment excitant du jeu. Le foot, c'est bien plus qu'un hobby pour moi, c'est une véritable passion !" />
                        <PassionItem icon={faCar} title="L'automobile" description="Amateur d'automobile depuis mon plus jeune âge, ma passion pour les voitures a commencé tôt et ne cesse de grandir. Un fervent admirateur des bolides et de toute l'industrie automobile, j'ai une affection particulière pour cet univers depuis toujours." />
                    </div>
                    
                </div>

            </div>

            <Image src={waveSrc} width={500} height={800} alt={"Vague hero"} className="w-full rotate-180 absolute"/>

        </div>
    );
};

export default PresentationPage;
