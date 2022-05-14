import React from "react";
import { ProjectInterface } from "../../interface/project";

const Project: React.FC<{ projectData: ProjectInterface }> = ({
  projectData,
}) => {
  return (
    <div className="w-full h-[40vh] my-5  border-2 rounded-tl-xl rounded-tr-xl overflow-hidden">
      <div className="h-5 flex items-center bg-gray-100 sticky z-10">
        <div className="w-[6px] h-[6px] rounded-full bg-red-600 m-1"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-yellow-400 m-1"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-purple-500 m-1"></div>
      </div>
      <a
        href={projectData.link}
        target="_blank"
        rel="noreferrer"
        className="w-full "
      >
        <img
          src={projectData?.img}
          alt="project"
          className="w-full transition-all duration-[5s] ease-in bg-cover hover:translate-y-[-60%]"
        />
      </a>
    </div>
  );
};

export default Project;
