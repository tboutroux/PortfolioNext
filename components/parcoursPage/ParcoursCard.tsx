import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ParcoursCardProps {
    date: string,
    entreprise: string,
    adresse: string,
    competences: Array<IconProp>,
    missions: string,
    logo: string
}

const ParcoursCard: React.FC<ParcoursCardProps> = ({ date, entreprise, adresse, competences, missions, logo }) => {
    return (
                                
        <div className="w-full h-full rounded-xl bg-gray-900 xl:p-8">

            <div className="flex flex-col justify-between items-center w-full h-full">
                <div className="flex justify-center items-center w-full text-white">
                    <h2 className="font-bold text-4xl">{entreprise}</h2>
                </div>

                <div className="flex justify-between items-center w-full h-4/5">

                    <div className="flex flex-col justify-center items-start gap-4 w-1/2 px-8">
                        <div>
                            <h4 className="text-white font-bold text-xl">Dates :</h4>
                            <span className="text-gray-500 text-md">{date}</span>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-xl">Adresse :</h4>
                            <span className="text-gray-500 text-md text-justify">{adresse}</span>
                        </div>

                        <Image src={logo} width={100} height={50} alt="Logo de l'EPSI (Ecole prévée des sciences de l'informatique)"/>
                        
                    </div>

                    <div className="bg-white w-0.5 h-3/4"></div>

                    <div className="flex flex-col justify-around items-start gap-4 w-1/2 px-8">
                        <div className="w-3/4">
                            <h4 className="text-white font-bold text-xl">Compétences :</h4>
                            <span className="text-gray-500 flex justify-between items-center mt-2 w-full">

                                {
                                    competences.map((competence) => (
                                        <FontAwesomeIcon icon={competence} className="xl:text-4xl" />
                                    ))
                                }

                            </span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl">Missions :</h4>
                            <span className="text-gray-500 text-md text-justify">{missions}</span>
                        </div>

                    </div>

                </div>

                <div className="w-full flex justify-center items-center">
                    <Link href="#portfolio" className="bg-white px-8 py-3 rounded-xl shadow-2xl hover:bg-gray-100 hover:tracking-wide hover:text-md transition-all duration-300 w-full text-center">
                        <span>Voir mes projets</span>
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default ParcoursCard;