import React from "react";
import About from "./components/About";
import Intro from "./components/intro";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
      {/* <Intro />
      <About /> */}
      <ProjectsList />
    </div>
  );
}

export default App;
