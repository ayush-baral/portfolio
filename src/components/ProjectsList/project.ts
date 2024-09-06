import { ProjectInterface } from "../../interface/project";
import hulu from "../../assets/projects/hulu.png";
import bandb from "../../assets/projects/bandb.png";
import taskTracker from "../../assets/projects/task-tracker.png";
import wordsandpages from "../../assets/projects/words-and-pages.png";
import netflixRedesign from "../../assets/projects/netflix-redesign.png";
import socialMediaApp from "../../assets/projects/socialMediaApp.png";

export const PROJECTS: ProjectInterface[] = [
  {
    id: 1,
    title: "Hulu Clone",
    description:
      "A responsive clone of the Hulu streaming platform, showcasing modern web development techniques.",
    img: hulu,
    link: "https://ayush-hulu-clone.vercel.app/",
    github: "https://github.com/ayush-baral/Hulu-Clone",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "B and B",
    description:
      "A platform for efficiently managing and showcasing item stock listings.",
    img: bandb,
    link: "https://bandb.netlify.app/",
    technologies: ["React", "redux", "css modules"],
    date: "2023-07-22",
  },
  {
    id: 3,
    title: "Task Tracker",
    description:
      "A simple yet powerful task tracking application to help users manage their daily activities.",
    img: taskTracker,
    link: "https://task-tracker-ayush-baral.vercel.app",
    technologies: ["React", "Node js", "Tailwind"],
    date: "2023-09-10",
  },
  {
    id: 4,
    title: "Words and Pages",
    description:
      "An online ecommerce platform for To buy your faviourite book.",
    img: wordsandpages,
    link: "https://words-and-pages.vercel.app/",
    // github: "https://github.com/ayush-baral/words-and-pages",
    technologies: [
      "React.js",
      "Typescript",
      "Redux",
      "Tailwind",
      "node js",
      "express js",
    ],
    date: "2023-11-05",
  },
  {
    id: 5,
    title: "Netflix Redesign",
    description:
      "A conceptual redesign of the Netflix user interface, focusing on improved user experience.",
    img: netflixRedesign,
    link: "https://netflix-redesign-ayush.vercel.app",
    // github: "https://github.com/ayush-baral/netflix-redesign",
    technologies: ["React", "Redux"],
    date: "2024-01-20",
  },
  {
    id: 6,
    title: "Social Media App",
    description:
      "A full-stack social media application with real-time post sharing capabilities.",
    img: socialMediaApp,
    link: "https://social-media-app-zeta.vercel.app",
    github: "https://github.com/ayush-baral/social-media-app",
    technologies: ["React", "Firebase", "Tailwind"],
    date: "2024-03-08",
  },
];
