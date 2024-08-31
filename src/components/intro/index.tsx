import React from "react";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import developerImage from "../../assets/developer.png";

const slideVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? "-100vw" : "100vw",
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
    <div className="flex flex-col md:flex-row h-screen items-center justify-center mb-20">
      {/* Left Section */}
      <motion.div
        className="flex-1 p-[50px]"
        custom="left"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-light">Hello, My Name is </h2>
        <h1 className="text-6xl font-semibold my-8">Ayush Baral</h1>

        <TitleAnimation />

        <p className="text-lg mt-8 mb-4 leading-relaxed">
          Motivated professional offers expertise in HTML5, CSS3, JavaScript,
          TypeScript, and React.js. Adept at troubleshooting and resolving
          complex technical issues while consistently meeting deadlines and
          client expectations. Proven ability to quickly learn and apply new
          technologies and techniques to enhance user experience and enable
          website optimization.
        </p>

        <motion.div
          className="text-3xl absolute bottom-4 left-1/4"
          drag
          dragElastic={0.8}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <BsMouse />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 h-fit w-full mb-10 md:h-full relative"
        custom="right"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="clip-left w-full h-full absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <img
          src={developerImage}
          alt="Developer"
          className="w-full h-full object-contain absolute"
        />
      </motion.div>
    </div>
  );
};

const TitleAnimation = () => {
  return (
    <div className="h-[50px] overflow-hidden">
      <div className="h-full title-wrapper">
        {["Web Developer", "Learner", "Technophile"].map((title, index) => (
          <motion.div
            key={index}
            className="text-primary h-[50px] text-3xl font-bold flex items-center"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            {title}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
