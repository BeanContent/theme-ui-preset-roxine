/** @jsx jsx */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";
// import "swiper/css";
import "swiper/css/autoplay";
import "./celebrities.css";
import { Autoplay } from "swiper";
import { jsx } from "theme-ui";
function Celebrities() {
  const query = useStaticQuery(graphql`
    query {
      allCelebritiesJson {
        edges {
          node {
            image
            name
          }
        }
      }
    }
  `);
  const data = query.allCelebritiesJson.edges;
  return (
    <section sx={{ backgroundColor: "background" }} className="celebrities">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: "1",
          },
          768: {
            slidesPerView: "3",
          },
          1024: {
            slidesPerView: "4",
          },
        }}
        slidesPerView="5"
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        a11y={false}
        freeMode={true}
        speed={500}
        // centeredSlides={true}
        className="celebrities__wrapper"
        modules={[Autoplay]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="celebrities__slide">
              <img
                sx={{ mixBlendMode: "hue" }}
                className="celebrities__slide-img"
                alt={item.node.name}
                src={item.node.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Celebrities;
