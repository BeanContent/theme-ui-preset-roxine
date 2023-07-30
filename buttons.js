const buttons = {
    primary: {
      display: "inline-block",
      color: "white", // use the page background color for an inverted effect
      textAlign: "center",
      fontWeight: "highlight",
      fontSize: 3,
      backgroundColor: "accent",
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      paddingBottom: 1,
      marginTop: 2,
      whiteSpace: "nowrap",
      letterSpacing: 1,
      borderRadius: ".3rem",
      textTransform: "uppercase",
      width: "auto",
      maxWidth: "27rem",
      "&:hover": {
        bg: "#56459f",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      "@media only screen and (min-width: 768px)": {
        padding: 2,
      },
    },
    highlight: {
      display: "inline-block",
      color: "white", // use the page background color for an inverted effect
      textAlign: "center",
      fontWeight: "highlight",
      fontSize: 3,
      backgroundColor: "highlight",
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      paddingBottom: 1,
      marginTop: 2,
      whiteSpace: "nowrap",
      letterSpacing: 1,
      borderRadius: ".3rem",
      textTransform: "uppercase",
      width: "auto",
      maxWidth: "27rem",
      "&:hover": {
        bg: "#56459f",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      "@media only screen and (min-width: 768px)": {
        padding: 2,
      },
    },
  }
  export default buttons;