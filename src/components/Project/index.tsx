import React from "react";
import { ProjectInterface } from "../../interface/project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsList: React.FC<{ projectData: ProjectInterface }> = ({
  projectData,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={projectData.img}
          alt={projectData.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center hover:opacity-100">
          <a
            href={projectData.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full font-semibold flex items-center transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
          >
            View Project <FaExternalLinkAlt className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          {projectData.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {projectData.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {projectData.github ? (
            <a
              href={projectData.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 flex items-center"
            >
              <FaGithub className="mr-2 w-5 h-5" /> View Code
            </a>
          ) : (
            <div></div>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {projectData.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
