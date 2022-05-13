import React from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/intro";
import ProjectsList from "./components/ProjectsList";
import Toggle from "./components/toggle";

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
      <Toaster position="top-right" />
      <Toggle onSetDark={setDark} dark={dark} />
      <Intro dark={dark} />
      <About dark={dark} />
      <ProjectsList dark={dark} />
      <Contact dark={dark} />
    </div>
  );
}

export default App;
