import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tailwind from "../../../assets/skills/Tailwind_CSS_Logo.svg";
import react from "../../../assets/skills/React-icon.svg";
import HTML from "../../../assets/skills/HTML5_logo_and_wordmark.svg";
import CSS from "../../../assets/skills/CSS3_logo.svg";
import JS from "../../../assets/skills/Unofficial_JavaScript_logo_2.svg";
import TS from "../../../assets/skills/typescript_plain_logo_icon_146316.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

const Skills = () => {
  return (
    <>
      <Swiper
        className="w-full overflow-x-hidden"
        // install Swiper modules
        // centeredSlides={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={8}
        // width={1000}
        // navigation
        // pagination={{ clickable: true }}
        width={1000}
        autoplay={{ disableOnInteraction: false, delay: 800 }}
      >
        {[react, tailwind, HTML, CSS, JS, TS].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt="" className="h-1/3 w-1/3 object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Skills;
