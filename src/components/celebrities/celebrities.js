/** @jsx jsx */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";
// import "swiper/css";
import "swiper/css/autoplay";
import "./celebrities.css";
import { Autoplay } from "swiper";
import { Image, jsx } from "theme-ui";

const dumData = [
  {
    name: "logo-1",

    image: "images/celebrities/logo-01.png",
  },
  {
    name: "logo-2",

    image: "images/celebrities/logo-02.png",
  },
  {
    name: "logo-3",

    image: "images/celebrities/logo-03.png",
  },
  {
    name: "logo-4",

    image: "images/celebrities/logo-02.png",
  },
  {
    name: "logo-5",

    image: "images/celebrities/logo-04.png",
  },
  {
    name: "logo-6",

    image: "images/celebrities/logo-03.png",
  },
  {
    name: "logo-7",

    image: "images/celebrities/logo-01.png",
  },
  {
    name: "logo-8",

    image: "images/celebrities/logo-02.png",
  },
];

function Celebrities() {
  // const query = useStaticQuery(graphql`
  //   query {
  //     allCelebritiesJson {
  //       edges {
  //         node {
  //           image
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);
  // const data = query.allCelebritiesJson.edges;
  return (
    <section sx={{ backgroundColor: "background" }} className="celebrities">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: "2",
          },
          768: {
            slidesPerView: "3",
          },
          1024: {
            slidesPerView: "5",
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
        {dumData.map((item, index) => {
          console.log(`${__dirname}${item.image}`);
          return (
            <SwiperSlide key={index} className="celebrities__slide">
              <Image
                className="celebrities__slide-img"
                alt={item.name}
                src={`${__dirname}${item.image}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Celebrities;
