import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface PassionItemProps {
    title: string,
    description: string,
    icon: IconProp
}

const PassionItem: React.FC<PassionItemProps> = ({title, description, icon}) => {

    console.log(icon);

    return (
        <div className="flex justify-between items-center flex-col sm:flex-row lg:flex-col mt-5 gap-5 xl:border-4 border-gray-900 rounded-lg bg-gray-900 text-white lg:w-5/12 xl:w-full p-5 sm:p-7 lg:py-8 xl:p-10 xl:shadow-md">
            
            <div className='flex flex-col justify-center items-center w-full lg:gap-5 xl:w-full'>
                <div className="w-14 h-14 sm:w-20 sm:h-20 flex justify-center items-center rounded-full border-4 border-white bg-yellow-500 ">
                    <FontAwesomeIcon icon={icon} className='xl:text-4xl lg:text-3xl' />
                </div>
                <div className="w-full">
                    <h3 className='xl:text-xl font-medium text-center hidden lg:block'>{title}</h3>
                </div>
            </div>

            <div className="flex justify-center items-start flex-col gap-4 xl:w-3/4 lg:px-5 xl:px-0">
                <h3 className='lg:text-lg font-medium text-center lg:hidden'>{title}</h3>
                <p className='text-xs xl:text-sm lg:text-xs text-justify'>
                    {description}
                </p>
            </div>
            
        </div>
    );
}

export default PassionItem;

// https://tailwindcomponents.com/component/slider-2 Pour le responsive du slider