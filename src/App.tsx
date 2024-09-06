import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/intro";
import ProjectsList from "./components/ProjectsList";
import ScrollProgress from "./components/ScrollProgress";
import Toggle from "./components/toggle";
import { ThemeContext } from "./context";
import WorkExperienceTimeline from "./components/Experience";

function App() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.darkMode;

  return (
    <>
      <ScrollProgress />
      <div
        className={` overflow-hidden ${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        }`}
      >
        <Toaster position='top-right' />
        <Toggle />
        <Intro />
        <About />
        <ProjectsList />
        <WorkExperienceTimeline />
        <Contact />
      </div>
    </>
  );
}

export default App;
