const config = {

    styles: {
        root: {
            fontSize: "10px",
            fontFamily: "body",
            lineHeight: 1.5,
            color: 'text',
            "h1,h2,h3,h4,h5,h6": {
                fontFamily: "heading",
            },
            body: {
                margin: 'auto'
            },
            h1: {
                lineHeight: 1.5,
            },
            h2: {
                fontSize: 4,
                lineHeight: 1.5,
                letterSpacing: ".2rem",
                marginTop: "0px",
                marginBottom: "2",
            },
            h3: {
                fontSize: 5,
                fontWeight: "slim",
                letterSpacing: ".3rem",
                margin: "0px",
            },
            h4: {
                marginTop: "0px",
                marginBottom: "2",
                color: "white",
            },
            h5: {
                marginTop: "0px",
                marginBottom: "2",
                color: "white",
            },
            p: {
                lineHeight: 2.4,
                fontSize: 7,
                fontWeight: "primary",
            },
            ul: {
                padding: '0rem',
            },
            li: {
                listStyle: "none",
            },
            a: {
                textDecoration: "none",
                cursor: 'pointer'
            },
            ".swiper-slide": {
                display: "flex",
                justifyContent: "space-around",
            },
            button: {
                margin: 'auto',
                lineHeight: 0,
                background: "none",
                border: "none",
                cursor: 'pointer',
                ":focus-visible": {
                    outline: 0
                },
                i: {
                    fontSize: '2rem'
                }

            },
            input: {
                border: "none",
                ":focus": {
                    outline: 0
                }
            },
            hr: {
                width: '100%',
                height: '.1rem',
                borderColor: 'rgb(239 239 239 / 15%)'
            },
        },
    },
    colors: {
        text: "#55565b", //Grey 1
        primary: "#212121", //Black 0.7
        secondary: "#f8f8f8", //Grey 0.5
        accent: "#5645FF", //PurleBlue 1
        highlight: "#000000", //Black 1
        background: "#fff", //White 1
        emphasize: "#5645FF",
        // modes: {
         
        // },
    },
    space: [
        ".3rem",
        "1rem",
        "1.5rem",
        "2.5rem",
        "3rem",
        "7rem",
        "8rem",
        "9rem",
        "12rem",
    ],
    fontWeights: {
        slim: 300,
        primary: 400,
        highlight: 500,
        bold: 700,
        bolder: 900,
    },
    letterSpacings: [
        "clamp(.1rem, .5vw, .22684rem)",
        ".34288rem",
        "clamp(.3rem, .5vw, .5rem)",
        "clamp(.6rem, 1.4vw, 2.5rem)",
    ],
    fontSizes: [
        "clamp(1.3rem, 3vw, 3rem)",
        "clamp(3.2rem, 13.7vw, 16rem)",
        "clamp(.9rem, 3vw, 1.6rem)",
        "clamp(1.4rem, 3vw, 1.8rem)",
        "clamp(2.4rem, 4vw, 4.8rem)",
        "clamp(1.8rem, 2.734379vw, 3rem)",
        "clamp(1.2rem, 2vw, 1.4rem)",
        "clamp(1.2rem, 2vw, 1.3rem)",
        "clamp(1.2rem, 2vw, 1.6rem)",
        "clamp(1rem, 3vw, 1.4rem)",
        "clamp(1.2rem, 3vw, 1.375rem)",
        "clamp(3rem, 4vw, 6rem)"
    ],
    fonts: {
        body: "Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
        heading: "Josefin Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    },
    layouts: {
        container: {
            lg: {
                // margin: '10rem 0rem'
            }
        }
    }

};

export default config;