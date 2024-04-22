'use client'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Project() {

    type Project = {
        id_projet: number;
        nom: string;
        lieu: string;
        dates: string;
        technos: string[];
        cadre: string;
        description: string;
        documents: {
            rapportDeStage: string;
        };
        heroImg: string;
    };
    
    const [projectId, setProjectId] = useState<number>(0);

    useEffect(() => {
        // Récupérez les paramètres de recherche de l'URL
        const params = new URLSearchParams(window.location.search);

        console.log(params.get('id'));
        setProjectId(Number(params.get('id')));

        console.log(projectId);

        // On actualise les données
        if (projectId !== Number(params.get('id'))) {
            setProjectId(Number(params.get('id')));
        }

    }, []);

    const projectsObject: Record<number, Project> = {
        0: {
            id_projet: 1,
            nom: 'Main Courante',
            lieu: 'Tibco Services',
            dates: 'janvier 2024 - février 2024',
            technos: ['HTML', 'CSS', 'JavaScript', 'Python', 'Bootstrap', 'JQuery'],
            cadre: 'Stage de seconde année',
            description: "La main courante est une application web de gestion d'entrées et de sorties au sein d'un service cybersécurité certifié ISO27001. Elle permet de créer des autorisations d'accès, de planifier des visites clients, et de gérer les engagements de confidentialité. Elle permet également de loguer les entrées et sorties au sein du service.",
            documents: {
                rapportDeStage: '/assets/pictures/projects/main-courante/rapport-de-stage-seconde-annee-theo-boutroux.pdf',
            },
            heroImg: '/assets/pictures/projects/main-courante/new-index.png',
        },
        1: {
            id_projet: 2,
            nom: 'Console SentinelOne',
            lieu: 'OMR Infogérance',
            dates: 'mai 2023 - juin 2023',
            technos: ['HTML', 'CSS', 'JavaScript', 'Python', 'Bootstrap'],
            cadre: 'Stage de première année',
            description: "La console SentinelOne est une application web de gestion des agents SentinelOne. Elle permet de gérer les agents, de les déployer, de les configurer, de les mettre à jour, et de les désinstaller. Elle permet également de gérer les incidents, de les analyser, et de les résoudre.",
            documents: {
                rapportDeStage: '/assets/pictures/projects/console-sentinel-one/rapport-de-stage-premiere-annee-theo-boutroux.pdf',
            },
            heroImg: '/assets/pictures/projects/console-sentinel-one/index.png',
        },
        2: {
            id_projet: 3,
            nom: 'Retarrosoir',
            lieu: 'EPSI Nantes',
            dates: 'février 2024 - mai 2024',
            technos: ['Symfony', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery'],
            cadre: 'Projet de BTS',
            description: "Retarrosoir est un réseau social de partage de retards. Il permet à ses utilisateurs de partager leurs retards, de les justifier, et de les commenter. Il permet également de suivre les retards de ses amis, de les commenter, et de les liker.",
            documents: {
                rapportDeStage: '',
            },
            heroImg: '/assets/pictures/projects/retarrosoir/account-page.png',
        }
    }

    return (
        <div className='w-full'>
            
            <main>

                <div className='flex flex-col justify-center items-center h-screen w-full'>
                    <Image src={projectsObject[projectId].heroImg} width={1920} height={500} alt="Hero picture" className='object-cover aspect-square md:aspect-video w-full blur-sm overflow-hidden' />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 h-full flex justify-center items-center flex-col gap-6 text-white p-2 ">
                            <h1 className="text-3xl md:text-6xl font-semibold">{projectsObject[projectId].nom}</h1>
                        </div>
                    </div>

                    <Link href="#project" className="w-full absolute bottom-0 flex flex-col justify-center items-center p-8 gap-3 cursor-pointer">
                        <span className="text-md lg:text-4xl hover:translate-y-3 duration-300 text-white"><FontAwesomeIcon icon={faChevronDown} /></span>
                    </Link>
                </div>

                <section id="project" className="flex flex-col justify-center items-center gap-6 p-8">
                    <h2 className="text-3xl md:text-4xl font-bold m-8">Description</h2>

                    <div className="w-2/3 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-start">

                        <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-4 h-full">
                            <p className='text-justify text-sm md:text-base xl:text-lg'>{projectsObject[projectId].description}</p>

                            <div className='w-full flex justify-center items-center gap-5'>
                                <Link href={projectsObject[projectId].documents.rapportDeStage} download target='_blank' className='w-full'>
                                    <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-gray-900 text-white px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 xl:shadow-xl">
                                        <h1 className='text-sm lg:text-sm'>Télécharger le rapport de stage</h1>
                                    </button>
                                </Link>
                            </div>

                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 h-full">
                            <p className='text-base lg:text-xl font-bold'>Lieu: <br></br> <span className='text-base font-normal'>{projectsObject[projectId].lieu}</span></p>
                            <p className='text-base lg:text-xl font-bold'>Dates: <br></br> <span className='text-base font-normal'>{projectsObject[projectId].dates}</span></p>
                            <p className='text-base lg:text-xl font-bold'>Cadre: <br></br> <span className='text-base font-normal'>{projectsObject[projectId].cadre}</span></p>
                            <p className='text-base lg:text-xl font-bold'>Technologies: <br></br> <span className='text-base font-normal'>{projectsObject[projectId].technos.join(' | ')}</span></p>
                        </div>

                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold m-8">Découvrir d'autres projets</h2>

                    {/* Je veux avoir le projet suivant (en respectant l'ordre du dictionnaire contenant les données) et si c'est le dernier, ça doit renvoyer le premier */}
                    <Link href={`/projects?id=${(projectId + 1) % Object.keys(projectsObject).length}`} className='rounded-xl'>
                        <div className="relative w-full rounded-xl">
                            {/* Image de fond avec un filtre */}
                            <div className="relative">
                                <Image src={projectsObject[(projectId + 1) % Object.keys(projectsObject).length].heroImg} width={500} height={500} alt="Hero picture" className='object-cover aspect-square md:aspect-video w-full' />
                                <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl"></div> {/* Filtre sombre */}
                            </div>
                            {/* Nom du projet au premier plan */}
                            <div className="absolute inset-0 flex justify-center items-center flex-col gap-2 text-white p-2">
                                <h1 className="text-xl lg:text-3xl font-semibold">{projectsObject[(projectId + 1) % Object.keys(projectsObject).length].nom}</h1>
                                <p className="text-sm lg:text-base">{projectsObject[(projectId + 1) % Object.keys(projectsObject).length].lieu}</p>
                            </div>
                        </div>
                    </Link>


                </section>

            </main>

            <Footer />
        </div>
    );
}
