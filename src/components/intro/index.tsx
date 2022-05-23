import React from "react";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

export const leftSlide = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 0.5,
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const rightSlide = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 0.5,
      duration: 2,
      ease: "easeOut",
    },
  },
};

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center mb-20">
      <motion.div
        className="flex-1"
        variants={leftSlide}
        initial="hidden"
        animate="visible"
      >
        <div className="p-[50px] h-1/2">
          <h2 className="text-3xl font-light">Hello, My Name is </h2>
          <h1 className="text-6xl font-semibold my-8">Ayush</h1>
          <div className="h-[50px] overflow-hidden">
            <div className="h-full title-wrapper">
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
            </div>
          </div>
          <p className="flex flex-col justify-between mt-8 ">
            Hello and welcome to my portfolio. I am a web developer. I am
            currently working with technologies like React, tailwindcss,
            typescript, next js chakra ui and more. You can contact me from
            contact section on this website.
          </p>
        </div>
        <motion.div
          className="text-3xl absolute bottom-4 left-1/4"
          drag
          dragElastic={0.8}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <BsMouse />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 h-fit w-full mb-10  md:h-full relative"
        variants={rightSlide}
        initial="hidden"
        animate="visible"
      >
        <div className="clip-left  w-full h-full absolute top-0 right-0 "></div>
        <img
          src="https://www.seekpng.com/png/full/53-537858_monsters-png-1024x1024-monsters-illustration-flat-png.png"
          alt=""
          className="w-full h-full object-contain absolute"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
