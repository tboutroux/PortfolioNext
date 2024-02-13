// pages/index.js
import { SetStateAction, useState } from 'react';
import Link from 'next/link';

const images = [
    {
        src: 'https://via.placeholder.com/600x400?text=Image+1',
        caption: 'Image 1',
        projectId: 1,
    },
    {
        src: 'https://via.placeholder.com/600x400?text=Image+2',
        caption: 'Image 2',
        projectId: 2,
    },
    {
        src: 'https://via.placeholder.com/600x400?text=Image+3',
        caption: 'Image 3',
        projectId: 3,
    },
    {
        src: 'https://via.placeholder.com/600x400?text=Image+4',
        caption: 'Image 4',
        projectId: 4,
    },
];

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage === images.length - 1 ? 0 : prevPage + 1));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? images.length - 1 : prevPage - 1));
    };

    const goToPage = (pageIndex: SetStateAction<number>) => {
        setCurrentPage(pageIndex);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-full max-w-3xl">
                <div className="overflow-hidden relative">
                    <ul className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                        {images.map((image, index) => (
                        <li key={index} className="w-full flex-shrink-0 relative">
                            <img src={image.src} alt={image.caption} className="w-full" />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 h-1/4 flex justify-center items-center text-white p-2">
                                    {image.caption}
                                    <Link href={`/projects?id=${index}`}>
                                        <span className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View Project</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                        {images.map((_, index) => (
                            <div key={index} className={`w-4 h-4 mx-1 rounded-full ${index === currentPage ? 'bg-blue-500 cursor-pointer' : 'bg-gray-300 cursor-pointer'}`} onClick={() => goToPage(index)}></div>
                        ))}
                    </div>
                </div>
                    <button onClick={prevPage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded">
                        Prev
                    </button>
                    <button onClick={nextPage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded">
                        Next
                    </button>
            </div>
        </div>
    );
}
