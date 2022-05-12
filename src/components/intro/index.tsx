import React from "react";
import Me from "../../assets/Me.png";
import { BsMouse } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex-1">
        <div className="p-[50px] h-1/2 ">
          <h2 className="text-3xl font-light">Hello, My Name is </h2>
          <h1 className="text-6xl font-semibold my-8">Ayush</h1>
          <div className="h-[50px] overflow-hidden">
            <div className="h-full title-wrapper">
              <div className="text-green-500 h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-green-500 h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-green-500 h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
              <div className="text-green-500 h-[50px] text-3xl font-bold flex items-center">
                Web Developer
              </div>
            </div>
          </div>
          <p className="flex flex-col justify-between mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tenetur
            aliquid, labore porro nobis quas vel amet necessitatibus eius
            distinctio, atque quibusdam minima debitis dolor deserunt molestiae
          </p>
        </div>
        <div className="text-black text-3xl absolute bottom-30 left-1/4">
          <BsMouse />
        </div>
      </div>
      <div className="flex-1 h-full relative">
        <div className="clip-left bg-green-400 w-full h-full absolute top-0 right-0"></div>
        <img src={Me} alt="" className="w-full h-full object-cover absolute" />
      </div>
    </div>
  );
};

export default Intro;
