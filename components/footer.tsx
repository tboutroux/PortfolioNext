import React from 'react';
import { FaLinkedin, FaGithub, FaMapMarkedAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Link from 'next/link';

interface MenuItemProps {
    text: string;
    href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({text, href}) => {
    return (
        <Link href={href}>
            <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'>{text}</span>
        </Link>
    )
}

const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <div className='w-full flex justify-center items-center bg-black'>
            <footer className='flex flex-col m-16 gap-10'>
                <div className='flex justify-center items-start flex-col lg:flex-row gap-16 w-full'>

                    <div className='flex flex-col items-center lg:items-start w-full'>
                        <h4 className='text-white text-md font-bold mb-3'>Menu</h4>
                        <MenuItem text='Accueil' href='/#'/>
                        <MenuItem text='Projets' href='/#presentation-page'/>
                        <MenuItem text='Parcours' href='/#mon-parcours'/>
                        <MenuItem text='Compétences' href='/#competences'/>
                        <MenuItem text='Portfolio' href='/#projets'/>
                        <MenuItem text='Documents' href='/#documents-bts'/>
                        <MenuItem text='Contact' href='/#contact'/>
                    </div>
                    <div className='flex flex-col items-center lg:items-start w-full'>
                        <h4 className='text-white text-md font-bold mb-3'>Retrouvez-moi</h4>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'><Link className="flex w-full items-center" target="_blank" href="https://www.linkedin.com/in/th%C3%A9o-boutroux/"><FaLinkedin className='me-3 text-sm' /> LinkedIn</Link></span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'><Link className="flex w-full items-center" target="_blank" href="https://github.com/tboutroux"><FaGithub className='me-3 text-sm' /> Github</Link></span>
                        <span className='text-gray-300 text-sm hover:text-gray-100 duration-300 cursor-pointer'><Link className="flex w-full items-center" target="_blank" href="mailto:boutrouxtheo@gmail.com"><BiMailSend className='me-3 text-sm' /> Mail</Link></span>
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <h4 className='text-white text-center text-md font-bold mb-3'>Où suis-je ?</h4>
                        <span className='text-gray-300 text-4xl flex w-full items-center justify-center'><FaMapMarkedAlt /></span>
                        <span className='text-gray-300 text-sm flex w-full items-center justify-center hover:text-gray-100 duration-300 cursor-pointer'>Nantes, Pays de la Loire, France</span>
                    </div>

                </div>

                <div className='flex items-center justify-center'>
                    <h3 className='text-gray-300 text-sm text-center'>Théo Boutroux <br className='md:hidden'></br> - Tous droits réservés - <br className='md:hidden'></br> {date}</h3>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer;