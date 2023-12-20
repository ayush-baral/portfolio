import React, { useContext } from "react";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <div className="w-[50px] h-[25px] rounded-[20px] border-2 border-[#999] fixed top-3 right-3 z-10 flex items-center justify-around">
      <img src={sun} alt="light" className="w-4" />
      <img src={moon} alt="dark" className="w-4" />
      <div
        className={`w-6 h-6 rounded-full bg-[#999] absolute cursor-pointer left-6 transition-all duration-300 ease-linear ${
          theme.darkMode ? "left-[-1px]" : "left-6"
        }`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
