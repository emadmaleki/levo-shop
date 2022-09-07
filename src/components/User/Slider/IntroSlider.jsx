import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./../../../styles/sliders.css";
import slide1 from "./../../../assets/images/slide1.jpg";
import slide2 from "./../../../assets/images/slide2.jpg";
import { Link } from "react-router-dom";
const IntroSlider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="intro-slider"
    >
      <SwiperSlide>
        <section className="intro-slider-item">
          <Link to="/">
            <img src={slide1} alt="" />
          </Link>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="intro-slider-item">
          <Link to="/">
            <img src={slide2} alt="" />
          </Link>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="intro-slider-item">
          <Link to="/">
            <img src={slide1} alt="" />
          </Link>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroSlider;
