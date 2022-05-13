import React from "react";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const Toggle = () => {
  return (
    <div className="w-[50px] h-[25px] rounded-[20px] border-2 border-[#999] fixed top-3 right-3 z-10 flex items-center justify-around">
      <img src={sun} alt="" className="w-4" />
      <img src={moon} alt="" className="w-4" />
      <div className="w-6 h-6 rounded-full bg-[#999] absolute cursor-pointer left-6"></div>
    </div>
  );
};

export default Toggle;
