import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

const images = [
    {
        src: '/assets/pictures/projects/main-courante/new-index.png',
        caption: 'Main Courante',
        projectId: 1,
    },
    {
        src: '/assets/pictures/projects/main-courante/new-index.png',
        caption: 'Main Courante',
        projectId: 1,
    },
];

const Carrousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1); // Index de l'image survolée, initialisé à -1 pour indiquer aucun survol

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage === images.length - 1 ? 0 : prevPage + 1));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? images.length - 1 : prevPage - 1));
    };

    const goToPage = (pageIndex: SetStateAction<number>) => {
        setCurrentPage(pageIndex);
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index); // Lorsque la souris entre dans l'image, mettez à jour l'index de l'image survolée
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1); // Lorsque la souris quitte l'image, réinitialisez l'index de l'image survolée à -1
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextPage(),
        onSwipedRight: () => prevPage(),
    });

    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full max-w-3xl" {...handlers}>
                <div className="overflow-hidden relative rounded-xl">
                    <ul className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                        {images.map((image, index) => (
                            <li key={index} className="w-full flex-shrink-0 relative">
                                <Image src={image.src} alt={image.caption} width={800} height={450} className={`object-cover aspect-square md:aspect-video w-full duration-500 carrousel-img transform transition-transform ${hoveredIndex === index ? 'scale-125' : ''}`} key={index} />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <div className="absolute bottom-0 left-0 right-0 bg-gray-950 bg-opacity-80 h-full flex justify-center items-center flex-col gap-6 text-white p-2">
                                        <span className="text-xl md:text-2xl font-semibold">{image.caption}</span>
                                        <Link href={`/projects?id=${index}`}>
                                            <span className="bg-black hover:opacity-80 text-white font-semibold duration-150 ease-in py-1 px-3 rounded transition-opacity caption-btn" key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} >Voir le Projet</span>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={prevPage} className="absolute md:top-1/2 left-0 bottom-0 md:bottom-auto md:left-4 transform md:-translate-y-1/2 bg-black hover:bg-gray-800 duration-200 ease-in bg-opacity-50 text-white font-semibold text-xl px-2 py-2 rounded-full">
                    <MdOutlineNavigateBefore />
                </button>
                <button onClick={nextPage} className="absolute md:top-1/2 right-0 bottom-0 md:bottom-auto md:right-4 transform md:-translate-y-1/2 bg-black hover:bg-gray-800 duration-200 ease-in bg-opacity-50 text-white font-semibold text-xl px-2 py-2 rounded-full">
                    <MdOutlineNavigateBefore className="transform rotate-180" />
                </button>

                <div className="flex justify-center mt-4 mb-4">
                    {images.map((_, index) => (
                        <div key={index} className={`w-4 h-4 mx-1 rounded-full ${index === currentPage ? 'bg-black cursor-pointer' : 'bg-gray-200 cursor-pointer'}`} onClick={() => goToPage(index)}></div>
                    ))}
                </div>

            </div>
            
        </div>
    );
}

export default Carrousel;
