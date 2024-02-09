import React, { ReactNode } from 'react'
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface SkillItemProps {
    technology: string,
    icon: ReactNode,
    width: number
}

const SkillItem: React.FC<SkillItemProps> = ({technology, icon, width}) => {

    return (
        <div className="flex items-center justify-between gap-4 w-full border-b pb-2 m-2">

            <div className="w-1/5 flex flex-col justify-center items-center">
                <span className="text-3xl xl:text-4xl">{icon}</span>
                <h3 className="text-xs sm:text-sm xl:text-md font-medium">{technology}</h3>
            </div>

            <div className="progress-bar w-4/5 bg-black rounded-2xl h-2 relative">
                <div style={{ width: `${width}%` }} className="w-3/4 bg-gold h-2 rounded-2xl top-0 left-0 relative">
                    <div className="absolute -top-1/2 right-0 w-4 h-4 bg-gold rounded-full"></div>
                </div>
            </div>

        </div>
    )

}

export default SkillItem