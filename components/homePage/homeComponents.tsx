import React, { use } from "react";
import Image from "next/image";
import AnimatedText from "./animatedText";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false


const NavBar = () => {
    return (
        <header className="w-full h-10 px-[100px] py-[30px] flex justify-between items-center">

            <div>
                <span className="text-black text-2xl font-bold">Théo Boutroux</span>
            </div>

            <nav className="flex justify-between items-center w-2/5 text-base">
                <a href="" className="text-white px-[15px] py-[6px] bg-gold rounded-3xl font-medium">Accueil</a>
                <a href="" className="text-black font-medium">Qui suis-je</a>
                <a href="" className="text-black font-medium">Compétences</a>
                <a href="" className="text-black font-medium">Expériences</a>
                <a href="" className="text-black font-medium">Contact</a>
            </nav>

        </header>
    );
}

const Hero = () => {
    return (
        <div className="w-4/5 h-4/5 flex justify-center items-center gap-12 m-auto">
            <div className="flex justify-center items-center w-1/2">
                <Image src="/assets/pictures/me.png" width={500} height={500} alt={"Photo de Théo Boutroux"} className="rounded-full border-4 border-black border-solid grayscale hover:grayscale-0"/>
            </div>
            <div className="flex justify-center items-center flex-col w-1/2 gap-2">
                <span className="text-6xl font-bold text-black">Bienvenue sur mon Portfolio, je suis</span>
                <span className="text-left w-full">
                    <AnimatedText />
                </span>
            </div>
        </div>
    );
}

const Discover = () => {
    return (
        <div>

            <div className="w-full absolute bottom-0 flex flex-col justify-center items-center z-10 mb-10 gap-3">
                <span className="text-3xl font-bold text-black">Découvrez mon parcours</span>
                <span className="text-3xl animate-bounce"><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>

            <div className="w-full absolute bottom-0">
                <Image src="/assets/pictures/hero-wave.svg" width={500} height={500} alt={"Vague hero"} className="w-full -z-10"/>
            </div>
        </div>
    );
}

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
export { NavBar, Hero };