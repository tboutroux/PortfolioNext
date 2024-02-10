// loading.tsx
import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="text-center">
                <div className="mb-4">
                    <svg className="animate-spin h-12 w-12 text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.004 0-3.86-.738-5.291-1.709zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291C16.14 6.738 14.284 6 12 6V2c4.418 0 8 3.582 8 8h-4z"></path>
                    </svg>
                </div>
                <p className="text-lg text-gray-600">Veuillez patienter pendant que la page se charge...</p>
            </div>
        </div>
    );
};

export default Loading;
