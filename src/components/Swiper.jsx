import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  "어떤 집을 찾고 계신가요?",
  "원룸부터 오피스텔까지 다양한 매물을 찾아보세요.",
  "전국에 위치한 모든 매물과 단지정보를 확인해보세요.",
  "소중한 내 전세보증금 무료로 보호받는 법",
];

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <Swiper
      //spaceBetween={30}
      direction={"vertical"}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3600,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      //navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
    >
      {slides.map((text, index) => (
        <SwiperSlide key={index} className="">
          <div
            className={`pt-20 text-3xl text-center slider-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
