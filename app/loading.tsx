// loading.tsx
import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        
        <div className="flex flex-col gap-7 items-center justify-center h-screen bg-gray-900">
            <div className="w-16 h-16">
                <div className="animate-spin3d w-full h-full">
                    <div className="absolute w-full h-full bg-gray-100 rounded-lg"></div>
                </div>
            </div>
            <div className="ml-4 text-xl font-semibold text-gray-100">Chargement en cours...</div>
        </div>

    );
};

export default Loading;
