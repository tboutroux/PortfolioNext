import React, { useEffect } from "react";
import ParcoursCard from "./ParcoursCard";
import ParcoursItem from "./ParcoursItem";
import { faHtml5, faCss3Alt, faJs, faPhp, faPython } from "@fortawesome/free-brands-svg-icons";
import { createRoot } from "react-dom/client";

const ParcoursPage = () => {

    const ParcoursCardObject = [
        {
            id: 'parcours-tibco',
            date: 'janvier 2024 - février 2024',
            entreprise: 'TIBCO Services',
            adresse: 'Le Bois Cholet, BP9 2 Route de la Forêt Batiment, 44860 Saint-Aignan-Grandlieu',
            competences: [faHtml5, faCss3Alt, faJs, faPython],
            missions: 'Réalisation d\'une main courante',
            logo: '/assets/pictures/logo-tibco.png'
        },
        {
            id: 'parcours-omr',
            date: 'mai 2023 - juin 2023',
            entreprise: 'OMR Infogérance',
            adresse: '14 Av. Jules Verne, 44230 Saint-Sébastien-sur-Loire',
            competences: [faHtml5, faCss3Alt, faJs, faPython],
            missions: 'Réalisation d\'une application interne',
            logo: '/assets/pictures/logo-omr.png'
        },
        {
            id: 'parcours-epsi',
            date: 'En Cours',
            entreprise: 'EPSI Nantes',
            adresse: '16 Boulevard Général De Gaulle, 44300 Nantes',
            competences: [faHtml5, faCss3Alt, faJs, faPhp, faPython],
            missions: 'Projets divers',
            logo: '/assets/pictures/logo-epsi.png'
        }
    ]

    useEffect(() => {

        // On va créer un composant ParcoursCard lorsque l'on clique sur un ParcoursItem
        let allParcoursItems = document.querySelectorAll('.parcours-item');
        let parcoursCardContainer = document.querySelector('#parcours-card-container');

        allParcoursItems[0].classList.add('bg-gray-950');
        let parcoursCard = <ParcoursCard date={ParcoursCardObject[0].date} entreprise={ParcoursCardObject[0].entreprise} adresse={ParcoursCardObject[0].adresse} competences={ParcoursCardObject[0].competences} missions={ParcoursCardObject[0].missions} logo={ParcoursCardObject[0].logo} />
        if (parcoursCardContainer) {
            // Utiliser createRoot au lieu de ReactDOM.render
            parcoursCardContainer.innerHTML = '';
            const root = createRoot(parcoursCardContainer);
            root.render(parcoursCard);
        }

        allParcoursItems.forEach((parcoursItem) => {
            parcoursItem.addEventListener('click', (e) => {

                // On retire la couleur de fond de tous les ParcoursItem
                allParcoursItems.forEach((parcoursItem) => {
                    parcoursItem.classList.remove('bg-gray-950');

                })

                // On ajoute la couleur de fond au ParcoursItem cliqué
                parcoursItem.classList.add('bg-gray-950');

                // On récupère l'id du ParcoursItem cliqué
                let id = parcoursItem.id;

                // On vide le container de la ParcoursCard
                if (parcoursCardContainer) {
                    parcoursCardContainer.innerHTML = '';
                }

                let parcoursItemDatas = ParcoursCardObject.filter((parcoursCardObject) => parcoursCardObject.id === id)[0];
                console.log(parcoursItemDatas);
                let parcoursCard = <ParcoursCard entreprise={parcoursItemDatas.entreprise} date={parcoursItemDatas.date} adresse={parcoursItemDatas.adresse} competences={parcoursItemDatas.competences} missions={parcoursItemDatas.missions} logo={parcoursItemDatas.logo} />
                
                if (parcoursCardContainer) {
                    // Utiliser createRoot au lieu de ReactDOM.render
                    const root = createRoot(parcoursCardContainer);
                    root.render(parcoursCard);
                }
                
            })
        })

    
    }, [])

    return (
        <div className='w-full h-screen bg-white mb-60'>
            
            <div className="flex justify-center items-center">
                <h1 id="mon-parcours" className="m-10 text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold xl:m-10 lg:m-8">Mon Parcours</h1>
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-8 xl:justify-between xl:align-center w-3/4 m-auto xl:mt-10 xl:h-1/2">

                <div className="flex flex-1 overflow-scroll xl:overflow-visible xl:flex-col justify-between items-center w-full xl:w-1/3 gap-2 lg:gap-6 h-full">

                    <ParcoursItem id="parcours-tibco" date='2024' entreprise='TIBCO Services' poste='Stage' />
                    <ParcoursItem id="parcours-omr" date='2023' entreprise='OMR Infogérance' poste='Stage' />
                    <ParcoursItem id="parcours-epsi" date='2022' entreprise='EPSI Nantes' poste='Études' />    

                </div>

                <div id="parcours-card-container" className="flex flex-1 justify-center items-center w-full xl:w-2/3 h-full">
                    
                    
                </div>

            </div>

        </div>
    )
}

export default ParcoursPage;