import React from 'react';
import { FaJava } from 'react-icons/fa';
import {
  SiC,
  SiVisualstudiocode,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiAdobephotoshop,
  SiPhpmyadmin,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiLaravel,
  SiXampp,
  SiFigma,
  SiGithub,
} from 'react-icons/si';
import { RiEnglishInput } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Skills = () => {
  return (
    <div
      id='skills'
      className='flex flex-col justify-center items-center text-textColor bg-secondBackground transition-all ease-in duration-100 py-24 w-screen'
    >
      <h1 className='text-5xl font-bold text-center'>My Skills</h1>
      <p className='text-xl text-gray-400 mb-10 mt-2 text-center'>
        Click or hover to see more details
      </p>
      <div className='flex flex-col justify-center items-center gap-y-10 w-screen'>
        <div className='text-[#ccebff] text-3xl'>Programming</div>
        <Tooltip id='my-tooltip' />
        <div className='flex flex-row items-center justify-center md:gap-x-10 gap-x-6 w-full px-5'>
          <SiHtml5
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='HTML'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiCss3
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='CSS'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiJavascript
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='JavaScript'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiC
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='C Language'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <FaJava
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Java'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
        </div>
        <div className='flex flex-row items-center justify-center md:gap-x-10 gap-x-6 w-full px-5'>
          <SiPython
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Python'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiMicrosoftsqlserver
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='MsSQL'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiMysql
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='MySQL'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiMongodb
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='MongoDB'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiTailwindcss
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Tailwind CSS'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
        </div>
        <div className='flex flex-row items-center justify-center md:gap-x-10 gap-x-6 w-full px-5'>
          <SiBootstrap
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Bootstrap'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiJquery
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='JQuery (Basics)'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiReact
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='React.JS'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiNodedotjs
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Node.JS'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiExpress
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Express.JS'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
        </div>
        <div className='flex flex-row items-center justify-center md:gap-x-10 gap-x-6 w-full px-5'>
          <SiLaravel
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Laravel'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiAdobephotoshop
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Adobe Photoshop (Basics)'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiVisualstudiocode
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Visual Studio Code'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiPhpmyadmin
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='phpMyAdmin'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiXampp
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='XAMPP'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
        </div>
        <div className='flex flex-row items-center justify-center md:gap-x-10 gap-x-6 w-full px-5'>
          <SiFigma
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Figma'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
          <SiGithub
            className='aspect-square text-5xl p-2 bg-mainColor rounded-md text-primaryBackground hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Github'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-y-5 mt-10'>
        <div className='text-[#ccebff] text-3xl'>Languages</div>
        <div className='grid grid-cols-2 md:gap-x-10 gap-x-6 gap-y-10 font-bold'>
          <Tooltip id='my-tooltip' />
          <span
            className='aspect-square text-2xl p-2 bg-mainColor rounded-md text-primaryBackground flex justify-center items-center cursor-default w-[48px] hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='English (Fluent)'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          >
            En
          </span>
          <span
            className='aspect-square text-2xl p-2 bg-mainColor rounded-md text-primaryBackground flex justify-center items-center cursor-default w-[48px] hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
            data-tooltip-content='Indonesia (Native)'
            data-tooltip-id='my-tooltip'
            data-tooltip-place='top'
          >
            Id
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
