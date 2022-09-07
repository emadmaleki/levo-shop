import React from "react";
import MobileCard from "./../MobileCard/MobileCard";
import { SwiperSlide, Swiper } from "swiper/react";

const MobileSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      draggable={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        500: {
         slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <MobileCard mobile={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSlider;
