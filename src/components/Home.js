import React from 'react';
import profileImage from '../assets/DSC_0109_.jpg';
import { SocialIcon } from 'react-social-icons';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      id='home'
      className='bg-primaryBackground flex flex-col xl:flex-row justify-center xl:items-center gap-x-24 font-bold min-h-[100vh] gap-y-5 lg:gap-y-0 py-20 xl:px-12 px-5 w-full'
    >
      <img
        src={profileImage}
        className='aspect-square rounded-full w-8/12 lg:w-6/12 xl:w-2/5'
      ></img>
      <div className='flex flex-col text-textColor gap-y-5 px-5'>
        <p className='text-4xl xl:mt-0 mt-5'>Hello, It's Me</p>
        <p className='text-5xl'>Michael The Hadinata</p>
        <p className='text-2xl flex flex-row'>
          And I'm a &nbsp;
          <span className='block md:hidden whitespace-pre-line'></span>
          <TypeAnimation
            sequence={['Student', 500, 'Software Engineer']}
            wrapper='span'
            repeat={Infinity}
            className='text-mainColor'
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
          />
        </p>
        <p className='text-xl font-normal text-gray-400'>
          Hardworking and passionate job seeker from Bina Nusantara University
          majoring in Computer Science Global Class with strong organizational
          skills eager to secure internship of Software Engineer. Ready to help
          team achieve company goals.
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
          href='https://drive.google.com/file/d/1haBrWb7jG0hF0LmbEIL_Ts0YimA59vIt/view?usp=sharing'
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
