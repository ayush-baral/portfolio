import React from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/intro";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
      <Toaster position="top-right" />
      {/* <Intro />
      <About /> */}
      {/* <ProjectsList /> */}
      <Contact />
    </div>
  );
}

export default App;
