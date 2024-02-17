// Librairies
import Image from 'next/image';
import AnimatedText from './AnimatedText';

/* HERO COMPONENT */
const Hero = () => {

    return (
        <div className="w-full sm:w-7/12 md:w-9/12 lg:w-11/12 flex justify-center items-center h-2/3 sm:h-4/5 flex-col lg:flex-row gap-12 lg:gap-10 m-auto">
            <div className="flex justify-center items-center w-4/5 sm:w-full lg:w-2/5 xl:w-1/2">
                <Image src="/assets/pictures/me.png" width={500} height={500} priority={true} alt={"Photo de Théo Boutroux"} className="w-11/12 lg:w-4/5 xl:w-3/5 rounded-full border-4 border-black border-solid "/>
            </div>
            <div className="flex justify-center items-center flex-col w-4/5 lg:w-3/5 xl:w-1/2 lg:gap-2">
                <span className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-black text-center lg:text-left">Bienvenue sur mon Portfolio, je suis</span>
                <span className="w-full text-center lg:text-left">
                    <AnimatedText />
                </span>
            </div>
        </div>
    );
}

export default Hero;