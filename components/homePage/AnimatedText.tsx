'use client'

import TypeIt from 'typeit-react';

const AnimatedText = () => {

    return (
        <div className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl text-gold font-bold">
            <TypeIt
                options={
                    {
                        strings: ["Développeur Web", "Étudiant"],
                        breakLines: false,
                        loop: true,
                        waitUntilVisible: true,
                        cursor: false
                    }
                }
            />
        </div>
    );
}

export default AnimatedText;