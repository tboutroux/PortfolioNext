'use client'

import TypeIt from 'typeit-react';

const AnimatedText = () => {

    return (
        <div className="text-6xl text-gold font-bold">
            <TypeIt
                options={
                    {
                        strings: ["Développeur Web", "Étudiant"],
                        speed: 150,
                        deleteSpeed: 150,
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