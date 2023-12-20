import React from "react";
import { FadeInWhenVisible } from "../Motions/FadeInWhileVisible";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="h-auto md:h-screen flex flex-col md:flex-row items-center overflow-hidden">
      <FadeInWhenVisible>
        <div className="flex-1 flex items-center justify-center relative h-full w-full">
          <div className="w-[85%] md:w-[60%] h-[40vh] md:h-[70vh] rounded-[30px] absolute top-[50px] left-[50px] bg-[#333] "></div>
          <div className="w-[85%] md:w-[60%] h-[40vh] md:h-[70vh] rounded-[30px] relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Ayush Baral"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </FadeInWhenVisible>
      <div className="w-full md:w-[50%] m-0">
        <FadeInWhenVisible>
          <div className="flex-1 mt-20 md:mt-0 p-4">
            <h1 className="font-normal text-3xl">About Me</h1>
            <p className="my-5 mx-0">
              Hello i am ayush, I am a web developer. I am currently working
              with technologies like React, tailwindcss, typescript, next js
              chakra ui and more.
            </p>
            <p className="font-light">
              I graduated from the Informatics College Pokhara in the year 2022.
              Beside web development, I am also intrested in activities like
              Football, Video Games and so on.
            </p>
            <div className="w-full mt-6">
              <Skills />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default React.memo(About);
