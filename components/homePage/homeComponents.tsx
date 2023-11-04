"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./animatedText";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false

/* NAVLINK COMPONENT */ 
interface NavLinkProps {
    link: string,
    title: string
}

const NavLink: React.FC<NavLinkProps> = ( {link, title} ) => {

    if (title === "Accueil") {
        return (
            <Link href={link} className="text-white px-[15px] py-[6px] bg-gold rounded-3xl font-medium">{title}</Link>
        );
    }
    else {
        return (
            <Link href={link} className="text-black font-medium hover:text-stone-700 transition-all duration-200">{title}</Link>
        );
    }

}

/* NAVBAR COMPONENT */

const NavBar = () => {

    document.getElementById("open-burger")?.addEventListener("click", () => {
        document.getElementById("burger-menu")?.classList.remove("hidden");
        document.getElementById("burger-menu")?.classList.add("flex");
    })

    return (
        <header className="w-full h-10 px-5 py-10 lg:px-[100px] lg:py-[30px] flex justify-between items-center">

            <div>
                <span className="text-black text-2xl font-bold">Théo Boutroux</span>
            </div>

            <nav className="hidden lg:flex justify-between items-center w-2/5 text-base">
                <NavLink link="/" title="Accueil" />
                <NavLink link="/" title="Qui suis-je" />
                <NavLink link="/" title="Compétences" />
                <NavLink link="/" title="Portfolio" />
                <NavLink link="/" title="Contact" />
            </nav>

            <span id="open-burger" className="lg:hidden text-2xl"><FontAwesomeIcon icon={faBars}/></span>

            <div id="burger-menu" className="hidden lg:hidden w-full h-screen bg-white fixed top-0 left-0 justify-center items-center flex-col gap-5 text-2xl font-bold">
                <NavLink link="/" title="Accueil" />
                <NavLink link="/" title="Qui suis-je" />
                <NavLink link="/" title="Compétences" />
                <NavLink link="/" title="Portfolio" />
                <NavLink link="/" title="Contact" />
            </div>

        </header>
    );
}

/* HERO COMPONENT */
const Hero = () => {

    return (
        <div className="w-4/5 h-4/5 flex justify-center items-center flex-col lg:flex-row gap-12 m-auto">
            <div className="flex justify-center items-center lg:w-1/2 w-3/4">
                <Image src="/assets/pictures/me.png" width={500} height={500} alt={"Photo de Théo Boutroux"} className="w-full lg:w-4/5 rounded-full border-4 border-black border-solid grayscale hover:grayscale-0"/>
            </div>
            <div className="flex justify-center items-center flex-col w-4/5 lg:w-1/2 lg:gap-2">
                <span className="text-4xl xl:text-6xl font-bold text-black text-center">Bienvenue sur mon Portfolio, je suis</span>
                <span className="lg:text-left w-full text-center">
                    <AnimatedText />
                </span>
            </div>
        </div>
    );
}

/* HERO BOTTOM COMPONENT */
const Discover = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
    }

    let waveSrc = "/assets/pictures/hero-wave.svg";

    if (screenWidth < 768) {
        waveSrc = "/assets/mobilePictures/wave.svg";
    }

    return (
        <div>

            <div className="w-full absolute bottom-0 flex flex-col justify-center items-center z-10 mb-10 gap-3">
                <span className="text-3xl font-bold text-black">Découvrez mon parcours</span>
                <span className="text-3xl animate-bounce"><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>

            <div className="w-full absolute bottom-0">
                <Image src={waveSrc} width={500} height={500} alt={"Vague hero"} className="w-full -z-10"/>
            </div>
        </div>
    );
}

/* HOMEPAGE COMPONENT */
const HomePage = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <Discover />
        </div>
    );
}


export default HomePage;