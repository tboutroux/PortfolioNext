import React from "react";

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

export default NavBar;