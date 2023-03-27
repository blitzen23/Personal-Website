import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import barbatosShop from '../assets/barbatos-shop.png';
import clusterinAja from '../assets/clusterin-aja.jpg';
import devConnector from '../assets/dev-connector.png';
import kenshinImpact from '../assets/kenshin-impact.png';
import opinio from '../assets/opinio.png';
import personalWebsite from '../assets/personal-website.png';

const Projects = () => {
  const projects = [
    {
      title: 'Dev Connector',
      technologies: ['React.JS', 'CSS', 'Node.JS', 'Express.JS', 'MongoDB'],
      type: 'Website Application',
      github: [
        'https://github.com/blitzen23/DevConnector',
        'https://github.com/blitzen23/DevConnector-react',
      ],
      link: 'https://dev-connector-react.vercel.app/',
      image: devConnector,
      description: 'A website application created to connect developers',
    },
    {
      title: 'Personal Website',
      technologies: ['React.JS', 'Tailwind CSS'],
      type: 'Website Application',
      github: ['https://github.com/blitzen23/Personal-Website'],
      link: 'https://michael-the-hadinata.vercel.app/',
      image: personalWebsite,
      description: 'A website application created to show my portfolio',
    },
    {
      title: 'Barbatos Shop',
      technologies: ['HTML', 'Tailwind CSS', 'Laravel', 'MySQL'],
      type: 'Website Application',
      github: ['https://github.com/RyneFerdinand/barbatos-shop'],
      link: '',
      image: barbatosShop,
      description:
        'A website application for people to buy items like an e-commerce',
    },
    {
      title: 'Opinio',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Laravel', 'MySQL'],
      type: 'Website Application',
      github: ['https://github.com/RyneFerdinand/opinio'],
      link: '',
      image: opinio,
      description:
        'A website application allowing people to share their opinions',
    },
    {
      title: 'ClusterinAja',
      technologies: [],
      type: 'Website Design',
      github: [],
      link: 'https://www.figma.com/file/rDjT91orCLSIXjTczp4r0D/Software-Engineering?node-id=29-1074&t=HYFrcFvsUL0VYUFQ-0',
      image: clusterinAja,
      description:
        'A website design in smartphone for an application used to help people in clusters live easier than ever',
    },
    {
      title: 'Kenshin Impact',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      type: 'Website Application',
      github: ['https://github.com/blitzen23/Kenshin-Impact'],
      link: '',
      image: kenshinImpact,
      description:
        'A website application created as a cloning of Genshin Impact website',
    },
  ];

  const [flipList, setFlipList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center bg-primaryBackground text-textColor py-24'
    >
      <h1 className='text-5xl font-bold mb-2'>My Projects</h1>
      <p className='text-xl mb-10 text-gray-400'>Click to see more details</p>
      <div className='flex flex-row flex-wrap w-screen px-5 md:px-20 justify-center items-stretch gap-x-16 gap-y-16'>
        {projects.map((project, idx) => (
          <ReactCardFlip
            isFlipped={flipList[idx]}
            flipDirection='horizontal'
            containerClassName='flex flex-col bg-secondBackground w-full lg:w-4/5 2xl:w-2/5 rounded-md p-10 gap-y-5 hover:shadow-[0_0_2px_2px_#0ef] transition-all ease-in duration-200'
          >
            <div
              className='flex flex-col bg-secondBackground w-full rounded-md gap-y-5'
              onClick={() => {
                const tempFlipList = [...flipList];
                tempFlipList[idx] = !tempFlipList[idx];
                setFlipList(tempFlipList);
              }}
            >
              <img src={project.image} className='w-full rounded-md'></img>
              <p className='text-3xl md:text-4xl text-mainColor break-normal font-bold cursor-default'>
                {project.title}
              </p>
              <p className='text-xl md:text-2xl cursor-default'>
                {project.type}
              </p>
              <p className='text-lg md:text-xl w-full text-gray-400 cursor-default'>
                {project.description}
              </p>
            </div>

            <div
              className='flex flex-col bg-secondBackground w-full rounded-md gap-y-5 justify-center items-center'
              onClick={() => {
                const tempFlipList = [...flipList];
                tempFlipList[idx] = !tempFlipList[idx];
                setFlipList(tempFlipList);
              }}
            >
              <span className='text-3xl font-bold'>Made with </span>
              <p className='text-3xl text-gray-400 break-normal font-bold cursor-default flex flex-col justify-center gap-y-5'>
                {project.technologies.map((technology) => (
                  <p className='cursor-default'>{technology}</p>
                ))}

                <div className=''>
                  {project.github.length === 1 ? (
                    <a
                      className='underline text-blue-400'
                      href={project.github[0]}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Github Repository
                    </a>
                  ) : (
                    <div></div>
                  )}

                  {project.github.length === 2 ? (
                    <div className='flex flex-col items-center'>
                      <a
                        className='underline text-blue-400 mb-5'
                        href={project.github[1]}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        Frontend Github
                      </a>
                      <a
                        className='underline text-blue-400'
                        href={project.github[0]}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        Backend Github
                      </a>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                {project.link !== '' ? (
                  <a
                    className='underline text-blue-400'
                    href={project.link}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Project Link
                  </a>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default Projects;
