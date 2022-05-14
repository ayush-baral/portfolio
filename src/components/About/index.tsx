import React from "react";
import Award from "../../assets/award.png";

const About = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="flex-1 flex items-center justify-center relative h-full">
        <div className="w-[60%] h-[70vh] rounded-[30px] absolute top-[50px] left-[50px] bg-[#333] "></div>
        <div className="w-[60%] h-[70vh] rounded-[30px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-normal text-3xl">About Me</h1>
        <p className="my-5 mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque
          omnis incidunt. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          voluptatibus vitae vel et? Fugit vero odit sequi unde hic ex ratione
          rerum nobis sapiente pariatur! Explicabo nihil aliquam odio, incidunt
          odit provident dolor dicta tenetur Lorem ipsum dolor sit amet Lorem.
        </p>
        <div className="mt-12 flex items-center justify-between">
          <img
            src={Award}
            alt=""
            className="h-[120px] w-[120px] rounded-[20px]"
          />
          <div className="w-[70%]">
            <h4 className="font-bold color:[#555] mb-3">
              International Design Awards 2021
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae aliquam fuga ullam officiis! Atque, aspernatur? Culpa
              quae atque neque veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
