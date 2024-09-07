import React from "react";
import { FadeInWhenVisible } from "../Motions/FadeInWhileVisible";
import Skills from "./Skills";

const About = () => {
  return (
    <div className='h-auto md:h-screen flex flex-col md:flex-row items-center overflow-hidden p-4 bg-gray-50 dark:bg-gray-900'>
      <FadeInWhenVisible>
        <div className='flex-1 flex items-center justify-center relative h-full w-full mb-8 md:mb-0'>
          <div className='absolute top-[40px] left-[40px] md:top-[60px] md:left-[60px] bg-primary bg-opacity-20 rounded-[20px] md:rounded-[30px] w-[90%] md:w-[60%] h-[35vh] md:h-[70vh] transform rotate-3'></div>
          <div className='relative overflow-hidden rounded-[20px] md:rounded-[30px] w-[90%] md:w-[60%] h-[35vh] md:h-[70vh] shadow-lg '>
            <img
              src='https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Ayush Baral'
              className='h-full w-full object-cover transform scale-105 hover:scale-100 transition-transform duration-500'
            />
          </div>
        </div>
      </FadeInWhenVisible>
      <div className='w-full md:w-[50%] flex flex-col justify-center p-4 md:p-8'>
        <FadeInWhenVisible>
          <AboutText />
          <div className='mt-6'>
            <Skills />
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

const AboutText = React.memo(() => (
  <div className='text-left'>
    <h1 className='text-2xl md:text-4xl font-semibold mb-4 text-primary'>
      About Me
    </h1>
    <p className='mb-4 text-base md:text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-300'>
      Hello, I am Ayush, a professional web developer specializing in modern
      technologies such as React, Next.js, TypeScript, Chakra UI, Docker, and
      more.
    </p>
    <p className='text-base md:text-lg font-light leading-relaxed text-justify text-gray-700 dark:text-gray-300'>
      I have a strong background in front-end development and a keen eye for
      creating user-friendly, responsive interfaces. My expertise includes
      building scalable web applications, optimizing performance, and
      implementing best practices in coding standards. I am dedicated to
      continuous learning and staying updated with the latest industry trends
      and advancements.
    </p>
  </div>
));

export default React.memo(About);
