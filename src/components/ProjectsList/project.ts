import { ProjectInterface } from "../../interface/project";
import Todo from "../../assets/projects/todo.png";
import hulu from "../../assets/projects/hulu.png";
import bandb from "../../assets/projects/bandb.png";
import googleSearch from "../../assets/projects/google-search.png";
import wordsandpages from "../../assets/projects/words-and-pages.png";
import netflixRedesign from "../../assets/projects/netflix-redesign.png";

export const PROJECT: ProjectInterface[] = [
  {
    id: 1,
    img: Todo,
    link: "https://ayus-to-do-app.netlify.app/",
  },
  {
    id: 2,
    img: hulu,
    link: "https://ayush-hulu-clone.vercel.app/",
  },
  {
    id: 3,
    img: bandb,
    link: "https://bandb.netlify.app/",
  },
  {
    id: 4,
    img: googleSearch,
    link: "https://google-search-ayush.vercel.app",
  },
  {
    id: 5,
    img: wordsandpages,
    link: "https://words-and-pages.vercel.app/",
  },
  {
    id: 6,
    img: netflixRedesign,
    link: "https://netflix-redesign-ayush.vercel.app",
  },
];
