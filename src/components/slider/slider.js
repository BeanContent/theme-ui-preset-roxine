import React, { useEffect } from "react";
// import { Swiper } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Slider({ data }) {
  return (
    <div className="slider__container">
      <Swiper
        breakpoints={{
          "@0": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1": {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="slider__wrapper swiper-wrapper"
      >
        {data.map((item, index) => {
          const img = getImage(item.profile_img.gatsbyImageData);
          return (
            <SwiperSlide key={index} className="slider__card swiper-slide">
              <GatsbyImage image={img} className="slider__card-image" />
              <div className="slider__card-content">
                <h3 className="content__name">{item.fullName}</h3>
                <h4 className="content__pos">{item.pos}</h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
