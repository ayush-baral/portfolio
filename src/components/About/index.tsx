import React from "react";
import Award from "../../assets/award.png";

const About = () => {
  return (
    <div className="h-auto md:h-screen flex flex-col md:flex-row items-center">
      <div className="flex-1 flex items-center justify-center relative h-full">
        <div className="w-[90%] md:w-[60%] h-[40vh] md:h-[70vh] rounded-[30px] absolute top-[50px] left-[50px] bg-[#333] "></div>
        <div className="w-[90%] md:w-[60%] h-[40vh] md:h-[70vh] rounded-[30px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 mt-20 md:mt-0 p-4">
        <h1 className="font-normal text-3xl">About Me</h1>
        <p className="my-5 mx-0">
          Hello i am ayush, I am a web developer. I am currently working with
          technologies like React, tailwindcss, typescript, next js chakra ui
          and more.
        </p>
        <p className="font-light">
          I graduated from the Informatics College Pokhara in the year 2022.
          Beside web development, I am also intrested in activities like
          Football, Video Games and so on.
        </p>
        {/* <div className="mt-12 flex flex-col md:flex-row gap-y-10 items-center justify-between">
          <img
            src={Award}
            alt=""
            className="h-full mw-full md:h-[120px] md:w-[120px] rounded-[20px]"
          />
          <div className="w-full md:w-[70%]">
            <h4 className="font-bold color:[#555] mb-3">
              International Design Awards 2021
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae aliquam fuga ullam officiis! Atque, aspernatur? Culpa
              quae atque neque veritatis.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default React.memo(About);
