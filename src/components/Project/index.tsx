import React, { useContext } from "react";
import { ProjectInterface } from "../../interface/project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../context";

const ProjectsList: React.FC<{ projectData: ProjectInterface }> = ({
  projectData,
}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-primary`}
    >
      <div className='relative aspect-video overflow-hidden'>
        <img
          src={projectData.img}
          alt={projectData.title}
          className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center hover:opacity-100'>
          <a
            href={projectData.link}
            target='_blank'
            rel='noreferrer'
            className={`bg-primary text-white px-4 py-2 rounded-full font-semibold flex items-center transition-all duration-300 hover:bg-green-600`}
          >
            View Project <FaExternalLinkAlt className='ml-2 w-4 h-4' />
          </a>
        </div>
      </div>
      <div className='p-6'>
        <h3
          className={`text-xl font-bold mb-2 ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {projectData.title}
        </h3>
        <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {projectData.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-200 text-gray-800"
              } px-2 py-1 rounded-full text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex justify-between items-center'>
          {projectData.github ? (
            <a
              href={projectData.github}
              target='_blank'
              rel='noreferrer'
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-800"
              } transition-colors duration-300 flex items-center`}
            >
              <FaGithub className='mr-2 w-5 h-5' /> View Code
            </a>
          ) : (
            <div></div>
          )}
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {projectData.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
