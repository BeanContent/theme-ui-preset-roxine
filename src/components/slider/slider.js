import React from "react";
// import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

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
        spaceBetween={25}
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
              <div className="slider__card-content">
                <h3 className="content__name">{item.fullName}</h3>
                <h4 className="content__pos">{item.pos}</h4>
              </div>
              <GatsbyImage
                alt={item.fullName}
                image={img}
                className="slider__card-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
