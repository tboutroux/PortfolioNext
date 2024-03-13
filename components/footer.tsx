import React from 'react';
import { FaLinkedin, FaGithub, FaMapMarkedAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";


const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <div className='w-full flex justify-center items-center bg-black'>
            <footer className='flex flex-col m-16 gap-10'>
                <div className='flex justify-center items-start gap-16'>

                    <div className='flex flex-col'>
                        <h4 className='text-white text-md font-bold mb-3'>Menu</h4>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Accueil</span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Qui suis-je</span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Parcours</span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Compétences</span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Portfolio</span> 
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Contact</span>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-white text-md font-bold mb-3'>Retrouvez-moi</h4>
                        <span className='text-gray-300 text-sm flex w-full items-center hover:text-gray-100 duration-300 cursor-pointer'><FaLinkedin className='me-3 text-sm' /> LinkedIn</span>
                        <span className='text-gray-300 text-sm flex w-full items-center hover:text-gray-100 duration-300 cursor-pointer'><FaGithub className='me-3 text-sm' /> Github</span>
                        <span className='text-gray-300 text-sm flex w-full items-center hover:text-gray-100 duration-300 cursor-pointer'><BiMailSend className='me-3 text-sm' /> Mail</span>
                    </div>
                    <div>
                        <h4 className='text-white text-center text-md font-bold mb-3'>Où suis-je ?</h4>
                        <span className='text-gray-300 text-4xl flex w-full items-center justify-center'><FaMapMarkedAlt /></span>
                        <span className='text-gray-300 text-sm flex w-full items-center hover:text-gray-100 duration-300 cursor-pointer'>Nantes, Pays de la Loire, France</span>
                    </div>

                </div>

                <div className='flex items-center justify-center'>
                    <h3 className='text-gray-300'>© Théo Boutroux - Tous droits réservés - {date}</h3>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer;