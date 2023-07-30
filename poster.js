const poster = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    // marginBottom: '10rem',
    padding: "10rem 0rem",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
    backgroundPositionY: "3em",
    overflow: "auto",
    textAlign: "center",
    zIndex: 1,
    "::before": {
        content: '""',
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: -1,
    },
    "h3, h2, p": {
        color: "white",
        lineHeight: 1.5,
    },
    p: {
        fontSize: 8,
    },
    '@media only screen and (min-width: 768px)': {
        padding: '10rem 20rem'
    },
    summary: {
        fontStyle: 'italic'
    }
}

export default poster;