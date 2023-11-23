"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./animatedText";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(fab);
config.autoAddCss = false

/* NAVLINK COMPONENT */ 
interface NavLinkProps {
    link: string,
    title: string
}

const NavLink: React.FC<NavLinkProps> = ( {link, title} ) => {

    if (title === "Accueil") {
        return (
            <Link href={link} className="lg:text-xs 2xl:text-base text-white px-[15px] py-[6px] bg-gold rounded-3xl font-medium">{title}</Link>
        );
    }
    else {
        return (
            <Link href={link} className="lg:text-xs 2xl:text-base text-black font-medium hover:text-stone-700 transition-all duration-200">{title}</Link>
        );
    }

}

interface MobileNavLinkProps {
    link: string,
    title: string
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ( {link, title} ) => {

    return (
            <Link href={link} className="lg:text-xs text-white font-medium hover:text-stone-700 transition-all duration-200">{title}</Link>
        );

}

/* NAVBAR COMPONENT */

const NavBar = () => {

    function openBurger() {
        const burgerMenu = document.getElementById('burger-menu');
        burgerMenu?.classList.remove('close-burger');
        burgerMenu?.classList.add('open-burger');
      }
      
      function closeBurger() {
        const burgerMenu = document.getElementById('burger-menu');
        burgerMenu?.classList.remove('open-burger');
        burgerMenu?.classList.add('close-burger');
      }

    return (
        <header className="w-full h-10 px-5 sm:px-10 py-10 lg:px-[100px] lg:py-[30px] flex justify-between items-center animate__animated animate__slideInDown">

            <div>
                <span className="text-black text-2xl font-bold">Théo Boutroux</span>
            </div>

            <nav className="hidden lg:flex justify-between items-center w-2/5 lg:w-3/5 xl:w-2/5  text-base">
                <NavLink link="#home" title="Accueil" />
                <NavLink link="#presentationPage" title="Qui suis-je" />
                <NavLink link="/" title="Compétences" />
                <NavLink link="/" title="Portfolio" />
                <NavLink link="/" title="Contact" />
            </nav>

            <span id="open-burger" className="lg:hidden text-2xl cursor-pointer" onClick={() => openBurger()}><FontAwesomeIcon icon={faBars}/></span>

            <div id="burger-menu" className="flex lg:hidden w-2/3 h-screen bg-black fixed top-0 right-0 justify-between py-5 items-center flex-col gap-5 text-2xl font-bold translate-x-full">
                
                <div className="flex justify-end w-full px-5 sm:px-10 py-1">
                    <FontAwesomeIcon icon={faXmark} className="text-white text-3xl cursor-pointer" id="close-burger" onClick={() => closeBurger()}/>
                </div>

                <div className="flex flex-col justify-around items-center h-2/5">
                    <MobileNavLink link="/" title="Accueil" />
                    <MobileNavLink link="/" title="Qui suis-je" />
                    <MobileNavLink link="/" title="Compétences" />
                    <MobileNavLink link="/" title="Portfolio" />
                    <MobileNavLink link="/" title="Contact" />
                </div>
                
                <div className="flex justify-end w-full px-10 gap-5">
                    <FontAwesomeIcon icon={["fab", "github"]} className="text-white font-2xl"/>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-white font-2xl" />
                </div>
            
            </div>

        </header>
    );
}

/* HERO COMPONENT */
const Hero = () => {

    return (
        <div className="w-full sm:w-4/5 lg:w-11/12 h-4/5 flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-10 m-auto">
            <div className="flex justify-center items-center w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/2 animate__animated animate__fadeInLeft">
                <Image src="/assets/pictures/me.png" width={500} height={500} alt={"Photo de Théo Boutroux"} className="w-11/12 lg:w-4/5 xl:w-3/5 rounded-full border-4 border-black border-solid grayscale hover:grayscale-0"/>
            </div>
            <div className="flex justify-center items-center flex-col w-4/5 lg:w-3/5 xl:w-1/2 lg:gap-2 animate__animated animate__fadeInRight">
                <span className="text-3xl lg:text-5xl xl:text-6xl font-bold text-black text-center lg:text-left">Bienvenue sur mon Portfolio, je suis</span>
                <span className="w-full text-center lg:text-left">
                    <AnimatedText />
                </span>
            </div>
        </div>
    );
}

/* HERO BOTTOM COMPONENT */
const Discover = () => {

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

            <Link href="#presentationPage">

                <div className="w-full absolute bottom-0 flex flex-col justify-center items-center mb-10 sm:mb-8 gap-3 cursor-pointer">
                    <span className="text-xl lg:text-3xl font-bold text-black animate-pulse">Découvrez mon parcours</span>
                    <span className="text-xl lg:text-3xl animate-pulse"><FontAwesomeIcon icon={faChevronDown} /></span>
                </div>

            </Link>
            
            <div className="w-full absolute bottom-0 -z-10">
                <Image src={waveSrc} width={500} height={800} alt={"Vague hero"} className="w-full"/>
            </div>
        </div>
    );
}

/* HOMEPAGE COMPONENT */
const HomePage = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden" id="home">
            <NavBar />
            <Hero />
            <Discover />
        </div>
    );
}


export default HomePage;