import React, { useState, useRef, useEffect } from "react";
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoJquery, BiLogoVuejs } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaPython, FaSymfony } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import SkillItem from "./SkilItem";


const SkillsPage = () => {
    
    const competenceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (competenceRef.current) {
                const elementRect = competenceRef.current.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = elementRect.top + scrollTop;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full bg-white mb-10 relative">
            <div className="flex flex-col justify-center items-center">
                <h1 ref={competenceRef} id="competences" className="m-10 text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold xl:m-10 lg:m-10">Mes Compétences</h1>

                <div className="flex flex-col items-center justify-center w-3/4">

                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full m-auto gap-12">

                        <div className="flex flex-col items-start justify-center w-full gap-6">
                            <h2 className="text-xl sm:text-2xl font-medium">Langages</h2>

                            <div className="flex flex-col items-center justify-center w-full">
                                <SkillItem technology="HTML" icon={<FaHtml5 />} width={80}/>
                                <SkillItem technology="CSS" icon={<FaCss3Alt />} width={80}/>
                                <SkillItem technology="JS" icon={<BiLogoJavascript />} width={70} />
                                <SkillItem technology="TS" icon={<BiLogoTypescript />} width={50} />
                                <SkillItem technology="PHP" icon={<FaPhp />} width={40}/>
                                <SkillItem technology="SQL" icon={<DiMysql />} width={60}/>
                                <SkillItem technology="Python" icon={<FaPython />} width={70}/>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center w-full gap-6">
                            <h2 className="text-xl sm:text-2xl font-medium">Frameworks</h2>

                            <div className="flex flex-col items-center justify-center w-full">
                                
                                <SkillItem technology="Bootstrap" icon={<FaBootstrap />} width={70}/>
                                <SkillItem technology="Tailwind" icon={<BiLogoTailwindCss />} width={60}/>
                                <SkillItem technology="React" icon={<BiLogoReact />} width={40}/>
                                <SkillItem technology="Next.js" icon={<TbBrandNextjs />} width={50}/>
                                <SkillItem technology="jQuery" icon={<BiLogoJquery />} width={60}/>
                                <SkillItem technology="Vue.js" icon={<BiLogoVuejs />} width={30}/>
                                <SkillItem technology="Symfony" icon={<FaSymfony />} width={50}/>
                                
                            </div>
                        </div>
                    
                    </div>

                </div>

            </div>

        </div>
        
    );
}

export default SkillsPage;