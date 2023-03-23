import React from 'react';

const Navbar = () => {
  return (
    <div className='w-[100vw] flex flex-row justify-between bg-primaryBackground fixed text-textColor px-10 py-5'>
      <div className='text-3xl'>Portfolio.</div>
      <div className='flex flex-row gap-x-5 text-xl'>
        <a
          href='#home'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Home
        </a>
        <a
          href='#about'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          About
        </a>
        <a
          href='#skills'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Skills
        </a>
        <a
          href='#portfolio'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Portfolio
        </a>
        <a
          href='#contact'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
