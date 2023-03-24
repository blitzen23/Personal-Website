import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { SiPhonepe, SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col justify-center items-center bg-secondBackground text-textColor py-24'
    >
      <h1 className='text-5xl font-bold'>My Contact</h1>
      <p className='text-xl text-gray-400 mb-10 mt-2 text-center'>
        Click to directly contact me
      </p>
      <div className='flex flex-wrap xl:flex-nowrap md:flex-row flex-col justify-center xl:items-center gap-x-12 gap-y-10 px-5 xl:grid xl:grid-cols-3 w-full'>
        <a
          className='md:w-2/5 xl:w-auto flex flex-col justify-center items-center text-xl bg-primaryBackground rounded-md hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200 w-full'
          href='mailto:michaelthe23@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <AiOutlineMail className='mt-16 mb-5 aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground' />
          <p>Email</p>
          <p className='mx-16 md:mx-24 mb-16'>michaelthe23@gmail.com</p>
        </a>
        <a
          className='md:w-2/5 xl:w-auto flex flex-col justify-center items-center text-xl bg-primaryBackground rounded-md hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200 w-full'
          href='tel:6282280298885'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaPhone className='mt-16 mb-5 aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground' />
          <p>Phone Number</p>
          <p className='mx-16 md:mx-24 mb-16'>+6282280298885</p>
        </a>
        <a
          className='md:w-2/5 xl:w-auto flex flex-col justify-center items-center text-xl bg-primaryBackground rounded-md hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200 w-full'
          href='https://wa.me?6282280298885'
          target='_blank'
          rel='noreferrer noopener'
        >
          <SiWhatsapp className='mt-16 mb-5 aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground' />
          <p>WhatsApp</p>
          <p className='mx-16 md:mx-24 mb-16'>+6282280298885</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
