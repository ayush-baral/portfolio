import React from "react";
import { FaBriefcase, FaCalendar } from "react-icons/fa";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface TimelineProps {
  experiences: WorkExperience[];
}

const TimelineItem: React.FC<WorkExperience & { isLeft: boolean }> = ({
  company,
  position,
  duration,
  description,
  isLeft,
}) => {
  const contentClasses =
    "bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4";

  return (
    <div className="mb-8 flex justify-between items-center w-full">
      {isLeft ? (
        <div className={`order-1 ${contentClasses}`}>
          <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">
            {company}
          </h3>
          <h4 className="mb-3 font-semibold text-gray-700 dark:text-gray-300 text-md">
            {position}
          </h4>
          <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-400 text-opacity-100 flex items-center mb-3">
            <FaCalendar className="mr-2" /> {duration}
          </p>
          <ul className="list-disc pl-5">
            {description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-600 dark:text-gray-400 mb-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="order-1 w-5/12"></div>
      )}
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <FaBriefcase className="text-white mx-auto" />
      </div>
      {!isLeft ? (
        <div className={`order-1 ${contentClasses}`}>
          <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">
            {company}
          </h3>
          <h4 className="mb-3 font-semibold text-gray-700 dark:text-gray-300 text-md">
            {position}
          </h4>
          <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-400 text-opacity-100 flex items-center mb-3">
            <FaCalendar className="mr-2" /> {duration}
          </p>
          <ul className="list-disc pl-5">
            {description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-600 dark:text-gray-400 mb-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="order-1 w-5/12"></div>
      )}
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border"
          style={{ left: "50%" }}
        ></div>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

const WorkExperienceTimeline: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Frontend Developer",
      duration: "Jan 2022 - Present",
      description: [
        "Led the development of a new customer-facing dashboard using React and TypeScript.",
        "Implemented state management using Redux and improved overall application performance.",
        "Mentored junior developers and conducted code reviews.",
      ],
    },
    {
      company: "Web Solutions LLC",
      position: "Frontend Developer",
      duration: "Mar 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple client websites using Vue.js and Nuxt.",
        "Collaborated with UX designers to implement responsive designs.",
        "Integrated RESTful APIs and GraphQL endpoints.",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Junior Web Developer",
      duration: "Jun 2017 - Feb 2019",
      description: [
        "Assisted in building and maintaining company website using HTML, CSS, and JavaScript.",
        "Learned and implemented modern frontend frameworks like React.",
        "Participated in agile development processes and sprint planning.",
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Work Experience
      </h2>
      <Timeline experiences={experiences} />
    </div>
  );
};

export default WorkExperienceTimeline;
