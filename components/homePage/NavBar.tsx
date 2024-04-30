/* Librairies */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
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
            <Link href={link} className="lg:text-2xl text-white font-medium hover:text-gold transition-all duration-200">{title}</Link>
        );

}

/* NAVBAR COMPONENT */

const NavBar = () => {

    function openBurger() {
        const burgerMenu = document.getElementById('burger-menu');

        // On supprime la classe lg:hidden pour afficher le menu burger
        burgerMenu?.classList.remove('lg:hidden');
        burgerMenu?.classList.remove('close-burger');
        burgerMenu?.classList.add('open-burger');
    }
    
    function closeBurger() {
        const burgerMenu = document.getElementById('burger-menu');

        // On ajoute la classe lg:hidden pour cacher le menu burger
        burgerMenu?.classList.remove('open-burger');
        burgerMenu?.classList.add('close-burger')
    }

    // On affiche le menu burger quand on commence à scroller
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            const burgerMenu = document.getElementById('open-burger');
            if (window.scrollY > 800) {
                burgerMenu?.classList.remove('lg:hidden');
                burgerMenu?.classList.add('fixed');
                burgerMenu?.classList.add('top-6');
                burgerMenu?.classList.add('right-9');
                burgerMenu?.classList.add('z-10');
            }
            else {
                burgerMenu?.classList.add('lg:hidden');
            }
        })
    }

    return (
        <header className="w-full h-10 px-5 sm:px-10 py-10 lg:px-[100px] lg:py-[30px] flex justify-between items-center z-20">

            <div>
                <span className="text-black text-2xl font-bold">Théo Boutroux</span>
            </div>

            <nav className="hidden lg:flex justify-between items-center w-2/5 lg:w-3/5 xl:w-2/5  text-base">
                <NavLink link="#home" title="Accueil" />
                <NavLink link="#presentation-page" title="Qui suis-je" />
                <NavLink link="#mon-parcours" title="Parcours" />
                <NavLink link="#competences" title="Compétences" />
                <NavLink link="#projets" title="Portfolio" />
                <NavLink link="#documents-bts" title="Documents" />
                <NavLink link="#contact" title="Contact" />
            </nav>

            <span id="open-burger" className="lg:hidden text-lg lg:text-2xl cursor-pointer w-8 h-8 flex justify-center items-center bg-gray-200 lg:bg-transparent rounded-full lg:bg-none lg:rounded-none lg:px-0 lg:py-0" onClick={() => openBurger()}><FontAwesomeIcon icon={faBars}/></span>

            <div id="burger-menu" className="flex lg:hidden w-full lg:w-1/5 z-20 lg:z-20 h-screen bg-black opacity-90  fixed top-0 right-0 justify-between py-5 items-center flex-col gap-5 text-2xl font-bold translate-x-full">
                
                <div className="flex justify-end w-full px-10 py-1">
                    <FontAwesomeIcon icon={faXmark} className="text-white text-3xl cursor-pointer hover:text-gold transition-all duration-300" id="close-burger" onClick={() => closeBurger()}/>
                </div>

                <div className="flex flex-col justify-around items-center h-2/5">
                    <MobileNavLink link="#home" title="Accueil" />
                    <MobileNavLink link="#presentation-page" title="Qui suis-je" />
                    <MobileNavLink link="#mon-parcours" title="Parcours" />
                    <MobileNavLink link="#competences" title="Compétences" />
                    <MobileNavLink link="#projets" title="Portfolio" />
                    <MobileNavLink link="#documents-bts" title="Documents" />
                    <MobileNavLink link="#contact" title="Contact" />
                </div>
                
                <div className="flex justify-end w-full px-10 gap-5">
                    <Link href={'https://www.github.com/tboutroux'} target='_blank'>
                        <FontAwesomeIcon icon={["fab", "github"]} className="text-white font-2xl hover:text-gold transition-all duration-300"/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/th%C3%A9o-boutroux/'} target='_blank'>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-white font-2xl hover:text-gold transition-all duration-300" />
                    </Link>
                </div>
            
            </div>

        </header>
    );
}

export default NavBar;