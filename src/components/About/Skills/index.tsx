import React from "react";
import { Autoplay, Navigation } from "swiper";
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
import "swiper/css/bundle";

const Skills = () => {
  return (
    <>
      <Swiper
        className="w-full overflow-hidden"
        // install Swiper modules
        // centeredSlides={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        // navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        width={1000}
        autoplay={{ disableOnInteraction: false, delay: 500 }}
      >
        {[react, tailwind, HTML, CSS, JS, TS, Next, react].map(
          (item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="" className={`w-10 object-cover `} />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
};

export default Skills;
