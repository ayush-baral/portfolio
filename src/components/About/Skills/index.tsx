import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tailwind from "../../../assets/skills/Tailwind_CSS_Logo.svg";
import react from "../../../assets/skills/React-icon.svg";
import HTML from "../../../assets/skills/HTML5_logo_and_wordmark.svg";
import CSS from "../../../assets/skills/CSS3_logo.svg";
import JS from "../../../assets/skills/Unofficial_JavaScript_logo_2.svg";
import TS from "../../../assets/skills/typescript_plain_logo_icon_146316.svg";
import Next from "../../../assets/skills/next-js-seeklogo.com.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Skills = () => {
  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      spaceBetween={5}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      autoplay={{ disableOnInteraction: false, delay: 2000 }}
      loop
    >
      {[react, tailwind, HTML, CSS, JS, TS, Next].map((item, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img
            src={item}
            alt="Software skill"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Skills;
