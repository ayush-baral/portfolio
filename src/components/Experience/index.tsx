import React, { useContext } from "react";
import { FaBriefcase, FaCalendar } from "react-icons/fa";
import { ThemeContext } from "../../context";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface TimelineProps {
  experiences: WorkExperience[];
}

const experiences: WorkExperience[] = [
  {
    company: "Khalti",
    position: "Frontend Developer",
    duration: "July 2023 -- Current",
    description: [
      "Worked in an agile environment, collaborating closely with stakeholders to gather requirements and deliver high-quality frontend solutions.",
      "Engineered new systems with Next.js, utilizing React Query for data fetching, Zustand for state management, React Hook Form for form handling, and Zod for schema validation, optimizing performance and scalability for modern web applications.",
      "Directed the creation of a centralized login system with HTTP-only cookies, ensuring enhanced security and seamless user authentication across subdomains.",
      "Designed and implemented a streamlined architecture for merchant and admin systems, optimizing build processes with Vite; while supporting over 1000 concurrent users across subdomains.",
      "Boosted project performance by reducing build times by 87.5% through migrating from Webpack to Vite.",
      "Refined development workflows by implementing CI/CD pipelines with Husky, ESLint, Prettier, and Commitlint.",
      "Leveraged Docker for containerization and deployment, maintaining consistent environments across development and production.",
      "Authored comprehensive test suites using Vitest, Jest, and React Testing Library to achieve 95% test coverage, significantly enhancing code reliability and quality.",
      "Conducted thorough code reviews to ensure adherence to best practices, identify issues early, and maintain high standards of code quality.",
    ],
  },
  {
    company: "Venture Four Technology Pvt Ltd",
    position: "Frontend Developer (Part-Time)",
    duration: "March 2024 -- Present",
    description: [
      "Developed and maintained various projects using Next.js, TypeScript, and similar technologies, ensuring high-quality frontend solutions.",
      "Led a team of 3 frontend developers, coordinating tasks and providing guidance to achieve project goals efficiently.",
      "Contributed to project architecture, optimizing design and implementation strategies to enhance performance and scalability.",
      "Collaborated with cross-functional teams to integrate frontend features with backend services, ensuring seamless functionality.",
      "Implemented best practices in coding and design, resulting in improved maintainability and code quality.",
    ],
  },
  {
    company: "Dhuni Software",
    position: "Frontend Developer",
    duration: "July 2022 -- June 2023",
    description: [
      "Built and maintained high-quality frontend code using React, TypeScript, and modern best practices.",
      "Collaborated in an agile team environment to translate design requirements into functional features.",
      "Developed technical specifications and coordinated with engineers to ensure timely feature delivery.",
      "Enhanced application performance with techniques like code splitting and lazy loading, reducing initial load times.",
      "Designed and implemented new features to improve existing systems and user experiences.",
      "Deployed real-time chat and notifications using WebSockets to keep users engaged.",
      "Utilized try-catch blocks and promise chaining to handle errors effectively and improve system reliability.",
      "Contributed to the successful launch of vocalpanda.com.",
    ],
  },
  {
    company: "Clinch Tech",
    position: "Frontend Developer / Intern",
    duration: "Sept. 2021 -- June 2022",
    description: [
      "Crafted client-facing websites and dashboards using Next.js, Chakra UI, TypeScript, and Redux Toolkit, creating responsive and dynamic user interfaces.",
      "Developed an in-house CRM system with React, React Hook Form, React Query, TypeScript, and Tailwind CSS, improving internal productivity and data management.",
      "Engaged in client meetings and team discussions, contributing to project scope and design, and providing valuable feedback.",
      "Tested new features to identify and resolve bugs, ensuring high functionality and user satisfaction.",
      "Built a markdown text editor and a movie seat booking app during the internship, gaining practical experience with React and Redux Toolkit.",
      "Constructed a catalog website for a client, enhancing the client’s online presence and user engagement.",
    ],
  },
];

const TimelineItem: React.FC<WorkExperience & { isLeft: boolean }> = ({
  company,
  position,
  duration,
  description,
  isLeft,
}) => {
  const { darkMode } = useContext(ThemeContext);

  const contentClasses = `${
    darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
  } rounded-lg shadow-xl w-full md:w-[45%] px-6 py-4 border-l-4 border-primary`;

  const Content = () => (
    <>
      <div className='md:hidden flex justify-center mb-4'>
        <div className='z-20 flex items-center bg-primary shadow-xl w-8 h-8 rounded-full'>
          <FaBriefcase className='text-white mx-auto' />
        </div>
      </div>
      <h3 className='mb-3 font-bold text-xl text-primary'>{company}</h3>
      <h4
        className={`mb-3 font-semibold text-md ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {position}
      </h4>
      <p
        className={`text-sm leading-snug tracking-wide ${
          darkMode ? "text-gray-400" : "text-gray-600"
        } text-opacity-100 flex items-center mb-3`}
      >
        <FaCalendar className='mr-2 text-primary' /> {duration}
      </p>
      <ul className='list-disc pl-5'>
        {description.map((item, idx) => (
          <li
            key={idx}
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } mb-1`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className='mb-8 flex justify-between items-center w-full'>
      {isLeft ? (
        <div className={`order-1 ${contentClasses}`}>
          <Content />
        </div>
      ) : (
        <div className='order-1 w-5/12 hidden md:block'></div>
      )}
      <div className='z-20 items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full hidden md:flex'>
        <FaBriefcase className='mx-auto text-white' />
      </div>
      {!isLeft ? (
        <div className={`order-1 ${contentClasses}`}>
          <Content />
        </div>
      ) : (
        <div className='order-1 w-5/12 hidden md:block'></div>
      )}
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className='container mx-auto w-full h-full'>
      <div className='relative wrap overflow-hidden p-4 md:p-16 h-full'>
        <div
          className={`border-2-2 absolute border-opacity-20 border-primary h-full border hidden md:block`}
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
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } py-8`}
    >
      <h2 className='text-3xl font-bold text-center mb-8 text-primary'>
        Work Experience
      </h2>
      <Timeline experiences={experiences} />
    </div>
  );
};

export default WorkExperienceTimeline;
