import React from "react";
import { BsMouse } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center mb-20">
      <div className="flex-1">
        <div className="p-[50px] h-1/2 ">
          <h2 className="text-3xl font-light">Hello, My Name is </h2>
          <h1 className="text-6xl font-semibold my-8">Ayush</h1>
          <div className="h-[50px] overflow-hidden">
            <div className="h-full title-wrapper">
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-primary h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
            </div>
          </div>
          <p className="flex flex-col justify-between mt-8 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tenetur
            aliquid, labore porro nobis quas vel amet necessitatibus eius
            distinctio, atque quibusdam minima debitis dolor deserunt molestiae
          </p>
        </div>
        <div className="text-3xl absolute bottom-4 left-1/4 ">
          <BsMouse />
        </div>
      </div>
      <div className="flex-1 h-fit w-full mb-10  md:h-full relative">
        <div className="clip-left  w-full h-full absolute top-0 right-0 "></div>
        <img
          src="https://www.seekpng.com/png/full/53-537858_monsters-png-1024x1024-monsters-illustration-flat-png.png"
          alt=""
          className="w-full h-full object-contain absolute"
        />
      </div>
    </div>
  );
};

export default Intro;
