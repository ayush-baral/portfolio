import React from "react";
import { Dark } from "../../interface/dark";
import Project from "../Project";
import { PROJECT } from "./project";

const ProjectsList: React.FC<{ dark: Dark }> = () => {
  return (
    <div className="py-[50px] px-[100px] flex flex-col items-center text-center">
      <div className="w-[65%]">
        <h1 className="text-5xl my-20 mx-0">Create & Inspire. It's Ayush</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam
          iste inventore mollitia voluptate laborum est natus? Quia nesciunt
          corporis, corrupti fugit labore sint officiis rem iure architecto
          magni maiores.
        </p>
      </div>
      <div className="grid grid-cols-3 w-full gap-8">
        {PROJECT?.map((project) => {
          return <Project key={project.id} projectData={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
