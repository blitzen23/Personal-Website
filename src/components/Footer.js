import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
    return (
        <div
            id='footer'
            className='flex w-full px-10 justify-between text-3xl text-textColor py-5 items-center'
        >
            <p className='font-semibold'>MTH.</p>
            <a href='#'>
                <AiOutlineArrowUp className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200 cursor-pointer' />
            </a>
        </div>
    );
};

export default Footer;
