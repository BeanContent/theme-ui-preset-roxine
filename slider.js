const slider = {
    ".swiper-wrapper": {
        display: "flex",
    },
    ".swiper-slide": {
        display: "flex",
        // height: "100vh !important",
        minHeight: "525px",
        maxHeight: "600px",
        width: "100%",
        "&:hover": {
            ".slider__card-content": {
                transform: "translateY(-50%)",
                opacity: 1,
            },
        },
    },
    ".slider__card-content": {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "30px 30px",
        width: "100%",
        alignSelf: "flex-end",
        backgroundColor: "accent",
        transform: "translateY(200%)",
        opacity: 0,
        transition: "transform 0.3s ease, opacity 0.5s ease-in-out",
        h4: {
            fontFamily: "body",
            fontWeight: "primary",
            fontSize: 3,
        },
        h5: {
            variant: "text.summary",
            fontFamily: "body",
            fontWeight: "slim",
            fontSize: "1.4rem",
        },
    },
    ".slider__card-image": {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
    },
    '.swiper-button-prev, .swiper-button-next':{
        display: 'none',
        color: 'accent',
        '@media only screen and (min-width: 768px)': {
            display: 'block'
        }
    }
};
export default slider;