import React from "react";
import MoveFromBottomOnView from "../Motions/MoveFromBottomOnView";
import Project from "../Project";
import { PROJECTS } from "./project";

const ProjectsList = () => {
  return (
    <div className='py-12 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center text-center'>
      <MoveFromBottomOnView>
        <div className='md:w-3/4 lg:w-2/3 mb-16'>
          <h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary'
            aria-label="Introduction to Ayush's projects"
          >
            Create & Inspire. It's Ayush
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl font-light'>
            Welcome to the projects section. Here you can see some of the
            projects that I have built while working as a web developer.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {PROJECTS.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </div>
      </MoveFromBottomOnView>
    </div>
  );
};

export default React.memo(ProjectsList);
