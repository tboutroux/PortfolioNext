import React from 'react';
import Link from 'next/link';

const DocumentComponent = () => {
    return (
        <section className='w-full'>
            <div className='w-4/5 lg:w-3/5 flex justify-center items-center flex-col m-auto gap-5'>
                <h1 id="documents-bts" className="m-10 text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold xl:m-10 lg:m-10">Documents</h1>

                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4">

                    <div className='flex flex-col w-full lg:w-1/2 gap-4'>
                        <Link href='/assets/file/veille-technologique-theo-boutroux.pdf' download target='_blank' className='w-full'>
                            <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-gray-900 text-white px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 xl:shadow-xl">
                                <h1 className='text-sm lg:text-sm'>Veille</h1>
                            </button>
                        </Link>

                        <Link href='/assets/file/portefeuille-de-competences-theo-boutroux.pdf' download target='_blank' className='w-full'>
                            <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-gray-900 text-white px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 xl:shadow-xl">
                                <h1 className='text-sm lg:text-sm'>Portefeuille de compétences</h1>
                            </button>
                        </Link>
                    </div>

                    <div className='flex flex-col w-full lg:w-1/2 gap-4'>
                        <Link href='/assets/file/controle-de-conformite-1.pdf' download target='_blank' className='w-full'>
                            <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-gray-900 text-white px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 xl:shadow-xl">
                                <h1 className='text-sm lg:text-sm'>Contrôle de conformité 1</h1>
                            </button>
                        </Link>

                        <Link href='/assets/file/controle-de-conformite-2.pdf' download target='_blank' className='w-full'>
                            <button className="flex justify-center items-center w-full shadow-sm gap-5 bg-gray-900 text-white px-5 py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 xl:shadow-xl">
                                <h1 className='text-sm lg:text-sm'>Contrôle de conformité 2</h1>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DocumentComponent;