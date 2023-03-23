import React from 'react';
import profileImage from '../assets/DSC_0109_.jpg';
import { SocialIcon } from 'react-social-icons';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      id='home'
      className='bg-primaryBackground py-12 flex flex-row justify-center center items-center gap-x-24 font-bold h-[100vh]'
    >
      <img
        src={profileImage}
        className='aspect-square rounded-full w-1/3'
      ></img>
      <div className='flex flex-col text-textColor gap-y-5'>
        <p className='text-4xl'>Hello, It's Me</p>
        <p className='text-5xl'>Michael The Hadinata</p>
        <p className='flex flex-row text-3xl'>
          And I'm a &nbsp;
          <TypeAnimation
            sequence={['Student', 500, 'Software Engineer']}
            wrapper='span'
            repeat={Infinity}
            className='text-mainColor'
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
          />
        </p>
        <p className='text-xl font-normal'>
          I'm a hardworker person interested in Software Engineer.
        </p>
        <div className='flex flex-row gap-x-5'>
          <SocialIcon
            url='https://www.instagram.com/michael.the/'
            bgColor='#1f242d'
            fgColor='#0ef'
            className='border border-solid border-2 border-mainColor rounded-full hover:bg-textColor hover:text-textColor transition-all ease-in duration-200 hover:shadow-[0_5px_5px_1px_#0ef]'
            target='_blank'
            rel='noopener noreferrer'
          ></SocialIcon>
          <SocialIcon
            url='https://www.linkedin.com/in/michael-the-hadinata/'
            bgColor='#1f242d'
            fgColor='#0ef'
            className='border border-solid border-2 border-mainColor rounded-full hover:bg-textColor hover:text-textColor hover:shadow-[0_5px_5px_1px_#0ef] transition-all ease-in duration-200'
            target='_blank'
            rel='noopener noreferrer'
          ></SocialIcon>
          <SocialIcon
            url='https://github.com/blitzen23'
            bgColor='#1f242d'
            fgColor='#0ef'
            className='border border-solid border-2 border-mainColor rounded-full hover:bg-textColor hover:text-textColor hover:shadow-[0_5px_5px_1px_#0ef] transition-all ease-in duration-200'
            target='_blank'
            rel='noopener noreferrer'
          ></SocialIcon>
        </div>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg bg-mainColor flex justify-center items-center py-2 px-5 w-40 text-primaryBackground hover:shadow-[0_0_5px_5px_#0ef] transition-all ease-in duration-200'
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
