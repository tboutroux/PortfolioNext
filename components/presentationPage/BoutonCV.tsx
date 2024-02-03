import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const BoutonCV = () => {
    return (
        <div className="flex justify-center items-center w-3/4">
            <Link href="assets/file/CV_Théo_Boutroux_Etudiant_en_informatique.pdf" download target='_blank' className='w-full'>
                <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-white text-black px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 xl:shadow-xl">
                    <h1 className='sm:text-lg lg:text-sm'>Télécharger mon CV</h1>
                    <span className='xl:text-2xl lg:text-xl'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                </button>
            </Link>
        </div>
    );
}

export default BoutonCV;