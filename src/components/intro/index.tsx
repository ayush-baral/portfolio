import React from "react";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import me from "../../assets/my-photo.jpg";

const slideVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? "-100%" : "100%",
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Intro = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-32'>
      {/* Left Section */}
      <motion.div
        className='w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0'
        initial='hidden'
        animate='visible'
        variants={slideVariants}
        custom='left'
      >
        <h2 className='text-xl md:text-2xl font-semibold mb-2'>
          Hello, My Name is
        </h2>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Ayush Baral</h1>
        <TitleAnimation />
        <p className='text-sm md:text-base mt-4 max-w-md mx-auto md:mx-0 text-justify'>
          Motivated professional offering expertise in HTML5, CSS3, JavaScript,
          TypeScript, and React.js. Adept at troubleshooting and resolving
          complex technical issues while consistently meeting deadlines and
          client expectations. Proven ability to quickly learn and apply new
          technologies and techniques to enhance user experience and enable
          website optimization.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className='w-full md:w-1/2 flex justify-center items-center'
        initial='hidden'
        animate='visible'
        variants={slideVariants}
        custom='right'
      >
        <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden'>
          <img
            src={me}
            alt='Ayush Baral'
            className='w-full h-full object-cover'
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <BsMouse className='text-3xl' />
      </motion.div>
    </div>
  );
};

const TitleAnimation = () => {
  const titles = ["Web Developer", "Learner", "Technophile"];
  return (
    <div className='h-8 overflow-hidden'>
      {titles.map((title, index) => (
        <motion.div
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            delay: index * 2,
          }}
          className='text-lg md:text-xl font-semibold text-primary'
        >
          {title}
        </motion.div>
      ))}
    </div>
  );
};

export default Intro;
