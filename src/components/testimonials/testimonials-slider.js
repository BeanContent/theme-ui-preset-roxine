/** @jsx jsx */

import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { jsx, useColorMode } from "theme-ui";
import "./testimonial.css";
// DUM DATA
let data = [
  {
    id: 1,
    firstName: "natalie",
    lastName: "fullick",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
  {
    id: 2,
    firstName: "khaby",
    lastName: "lame",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
  {
    id: 3,
    firstName: "john",
    lastName: "wick",
    image:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
  {
    id: 4,
    firstName: "adam",
    lastName: "stock",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
  {
    id: 5,
    firstName: "william",
    lastName: "paper",
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
  {
    id: 6,
    firstName: "john",
    lastName: "joden",
    image:
      "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    dob: "1999-03-19",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    pos: "ceo - evator inc",
  },
];
const toCapitalize = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};
const dumDATA = () => {
  data.map((item) => {
    item.firstName = toCapitalize(item.firstName);
    item.lastName = toCapitalize(item.lastName);
    item.fullName = `${item.firstName} ${item.lastName}`;
    item.dob = Date(item.dob);
    item.pos = item.pos.toUpperCase();
  });
  return data;
};

// COMPONENT
function Testimonials() {
  let colorMode = useColorMode()[0];
  const data = dumDATA();
  return (
    <section sx={{ backgroundColor: "secondary" }} className="testimonial">
      <div className="testimonial__wrapper">
        <div sx={{ marginBottom: "7rem" }} className="testimonial__heading">
          <h3
            sx={{
              color: "text",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
            }}
            className="testimonial__heading-subtitle"
          >
            HEAR FROM
          </h3>
          <h2
            sx={{
              color: "text",
              fontSize: "clamp(2.4rem, 3vw, 4.8rem)",
            }}
            className="testimonial__heading-title"
          >
            TESTIMONIALS
          </h2>
          <span
            sx={{
              color: "text",
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            }}
            className="testimonial__heading-des"
          >
            We always listen to our clients.
          </span>
          <StaticImage
            className="testimonial__heading-divider"
            style={{
              filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
            }}
            src="../../images/black-divider.png"
            alt="divider"
          />
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 3,
            },
          }}
          grabCursor={true}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="testimonial__wrapper swiper-wrapper"
        >
          {data.map((item, index) => {
            const img = item.image;
            return (
              <SwiperSlide
                key={index}
                className="testimonial__card swiper-slide"
              >
                <img
                  alt={item.fullName}
                  src={img}
                  className="testimonial__card-image"
                />
                <div className="testimonial__card-content">
                  <h2 className="content__name">{item.fullName}</h2>
                  <h4
                    sx={{
                      color: "text",
                    }}
                    className="content__pos"
                  >
                    {item.pos}
                  </h4>
                  <p
                    sx={{
                      color: "text",
                    }}
                    className="content__des"
                  >
                    {item.des}
                  </p>
                </div>
                {/* JUT FOR DEMO */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
