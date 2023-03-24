import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <div
      ref={ref}
      id='navbar'
      className='w-[100vw] flex flex-row justify-between bg-primaryBackground fixed text-textColor px-10 py-5 z-50'
    >
      <a href='#' className='text-3xl'>
        Portfolio.
      </a>
      <div className='hidden md:flex flex-row gap-x-5 text-xl'>
        <a
          href='#home'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Home
        </a>
        <a
          href='#skills'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Skills
        </a>
        <a
          href='#projects'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Projects
        </a>
        <a
          href='#contact'
          className='hover:text-mainColor transition-all ease-in duration-100'
        >
          Contact
        </a>
      </div>
      <div
        className='text-2xl cursor-pointer flex md:hidden'
        onClick={() => setIsClick(!isClick)}
      >
        <GiHamburgerMenu className={!isClick ? '' : 'hidden'} />
        <RxCross2 className={!isClick ? 'hidden' : ''} />
        <div
          className={
            !isClick
              ? 'top-[-200px] flex flex-col z-50 w-full px-10 py-5 gap-y-3 absolute transition-all ease-in duration-500 left-0'
              : 'top-[60px] flex flex-col absolute left-0 transition-all ease-in duration-500 bg-primaryBackground z-50 w-full px-10 py-5 gap-y-3'
          }
        >
          <a
            href='#home'
            className='hover:text-mainColor transition-all ease-in duration-100'
          >
            Home
          </a>
          <a
            href='#skills'
            className='hover:text-mainColor transition-all ease-in duration-100'
          >
            Skills
          </a>
          <a
            href='#projects'
            className='hover:text-mainColor transition-all ease-in duration-100'
          >
            Projects
          </a>
          <a
            href='#contact'
            className='hover:text-mainColor transition-all ease-in duration-100'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
