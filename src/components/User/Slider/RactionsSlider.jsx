import React from "react";
import { Autoplay } from "swiper";
import { SwiperSlide,Swiper } from "swiper/react";
const Reactions = ({ items }) => {
  return <Swiper slidesPerView={1} spaceBetween={10} autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }} modules={[Autoplay]}>
    {items.map((item,index) => (
      <SwiperSlide key={index}>
        <section className="rc-box" key={item.id}>
        <p className="rc-text">{item.text}</p>
        <section className="rc-author">
          <img src={item.img} alt="" />
          <span>
            <p className="rc-a-name">{item.author}</p>
            <p className="rc-a-job">{item.job}</p>
          </span>
        </section>
      </section>
      </SwiperSlide>
    ))}

  </Swiper>;
};
export default Reactions;


// spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"