const card = {
    display: 'flex',
    flexDirection: 'column',
    bg: "secondary",
    position: "relative",
    padding: "40px 45px",
    textAlign: 'center',
    width: "100%",
    height: "clamp(150px, calc(25vw + 50px), 30rem)",
    minHeight: "25.5rem",
    borderRadius: "8px",
    transition: "box-shadow 0.3s ease",
    overflow: "hidden",
    marginTop: "auto",
    marginBottom: "auto",
    zIndex: 1,
    "::before": {
        content: '""',
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: " #fff",
        transition: "all 0.25s ease",
        transform: "translate(100%, 0)",
        zIndex: -1,
    },
    "&:hover": {
        boxShadow: "0 0.1429rem 0.6429rem 0.07143rem rgb(1 2 2 / 10%)",

        "i ~ a, i": {
            color: "accent",
        },
        "::before": {
            transform: "translate(0%)",
        },
    },
    wrapper: {
        margin: 'auto'
    },
    head: {
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        marginBottom: "0",
    },
    icon: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2rem",
        fontSize: "4.5rem",
    },
    name: {
        fontSize: 3,
        textTransform: "uppercase",
    },
    des: {
        textAlign: "center",
        lineHeight: "2",
        margin: "auto",
    },
    link: {
        color: "text",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "2px",
        transition: "0.5s ease",
        margin: "auto",
        "&:hover": {
            color: "#5645FF !important",
        },
    },
}
export default card