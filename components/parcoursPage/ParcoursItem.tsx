import React from "react";

interface PassionItemProps {
    id: string,
    date: string,
    entreprise: string,
    poste: string
}

const ParcoursItem: React.FC<PassionItemProps> = ({ id, date, entreprise, poste }) => {
    return (
        <div id={id} className="flex justify-between items-center gap-8 bg-gray-900 py-10 px-20 rounded-xl w-full shadow-xl cursor-pointer hover:tracking-wide hover:bg-gray-950 transition-all duration-300 parcours-item">
            <div className="flex justify-center items-center w-2/5">
                <div className="text-white font-bold flex items-center justify-between gap-8">
                <h1 className="xl:text-3xl">{date}</h1>
                <span>|</span>
                </div>
            </div>

            <div className="flex justify-center items-start flex-col w-3/5">
                <h1 className="xl:text-xl text-white font-medium">{entreprise}</h1>
                <span className="xl:text-sm text-gray-400 font-medium">{poste}</span>
            </div>
        </div>
    );
    };

export default ParcoursItem;
