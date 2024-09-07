import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "../../context";
import me from "../../assets/my-photo.jpg";

interface SlideVariants {
  hidden: (direction: "left" | "right") => {
    opacity: number;
    x: string;
  };
  visible: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

const slideVariants: SlideVariants = {
  hidden: (direction) => ({
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

const Intro: React.FC = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } p-4 md:p-8 lg:p-16 relative overflow-hidden`}
    >
      <div className='max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 z-10'>
        {/* Left Section */}
        <motion.div
          className='w-full lg:w-1/2 text-center lg:text-left'
          initial='hidden'
          animate='visible'
          custom='left'
        >
          <h2
            className={`text-2xl md:text-3xl font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hello, My Name is
          </h2>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ayush Baral
          </h1>
          <TitleAnimation darkMode={darkMode} />
          <p
            className={`text-sm md:text-base mt-6 max-w-md mx-auto lg:mx-0 text-justify ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed`}
          >
            Motivated professional offering expertise in HTML5, CSS3,
            JavaScript, TypeScript, and React.js. Adept at troubleshooting and
            resolving complex technical issues while consistently meeting
            deadlines and client expectations. Proven ability to quickly learn
            and apply new technologies and techniques to enhance user experience
            and enable website optimization.
          </p>
          <div className='mt-8 flex justify-center lg:justify-start space-x-4'>
            <SocialIcon Icon={FaGithub} href='#' darkMode={darkMode} />
            <SocialIcon Icon={FaLinkedin} href='#' darkMode={darkMode} />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className='w-full lg:w-1/2 flex justify-center items-center'
          initial='hidden'
          animate='visible'
          custom='right'
        >
          <div
            className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ${
              darkMode ? "ring-4 ring-gray-700" : "ring-4 ring-gray-200"
            }`}
          >
            <img
              src={me}
              alt='Ayush Baral'
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div
          className={`absolute -top-16 -left-16 w-64 h-64 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          } opacity-50 rounded-full`}
        ></div>
        <div
          className={`absolute -bottom-32 -right-32 w-96 h-96 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          } opacity-50 rounded-full`}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <BsMouse
          className={`text-3xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        />
      </motion.div>
    </div>
  );
};

const TitleAnimation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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
          className={`text-xl md:text-2xl font-semibold text-primary`}
        >
          {title}
        </motion.div>
      ))}
    </div>
  );
};

interface SocialIconProps {
  Icon: React.ComponentType<{ className: string }>;
  href: string;
  darkMode: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, darkMode }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`${
      darkMode
        ? "text-gray-400 hover:text-blue-400"
        : "text-gray-600 hover:text-blue-600"
    } transition-colors duration-300`}
  >
    <Icon className='text-2xl text-primary' />
  </a>
);

export default Intro;
