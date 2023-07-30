const monialSlider = {
    ".swiper-button-prev, .swiper-button-next": {
      display: "none",
    },
    ".swiper-slide-active": {
      img: {
        width: "20rem",
        height: "20rem",
        transform: "translateY(0)",
      },
      "h2,h4,p": {
        display: "block",
      },
    },
    slide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      content: {
        marginLeft: "unset",
        marginRight: "unset",
        "h2,h4,p": {
          display: "none",
        },
        h2: {
          fontFamily: "heading",
          fontWeight: "slim",
          fontSize: 4,
          marginTop: "2rem",
          color: "accent",
        },
        h4: {
          fontWeight: "primary",
          fontSize: 6,
        },
        "@media only screen and (min-width: 767px)": {
          marginLeft: "-80%",
          marginRight: "-80%",
        },
      },
    },

    img: {
      borderRadius: "100%",
      width: "15rem",
      height: "15rem",
      objectFit: "cover",
      objectPosition: "center",
      transform: "translateY(1.7rem)",
    },
    "@media only screen and (min-width: 767px)": {
      ".swiper-button-prev, .swiper-button-next": {
        display: "block",
      },
    },
  }
  export default monialSlider;