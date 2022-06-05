import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/intro";
import ProjectsList from "./components/ProjectsList";
import ScrollProgress from "./components/ScrollProgress";
import Toggle from "./components/toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.darkMode;

  return (
    <>
      <ScrollProgress />
      <div
        className={` overflow-hidden ${
          darkMode ? "bg-[#222] text-white" : "bg-white"
        }`}
      >
        <Toaster position="top-right" />
        <Toggle />
        <Intro />
        <About />
        <ProjectsList />
        <Contact />
      </div>
    </>
  );
}

export default App;
