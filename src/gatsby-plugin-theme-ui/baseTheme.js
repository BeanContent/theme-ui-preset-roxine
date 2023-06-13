export const baseTheme = {
  config: {
    initialColorModeName: "light",
  },
  colors: {
    text: "#55565b", //Grey 1
    primary: "#212121", //Black 0.7
    secondary: "#f8f8f8", //Grey 0.5
    accent: "#5645FF", //PurleBlue 1
    hightlight: "#000000", //Black 1
    background: "#fff", //White 1
    link: "#55565b",
    // link: "#5645FF",
    modes: {
      dark: {
        text: "white",
        background: "#000000", //#201f30,
        secondary: "#000000",
        link: "white",
      },
    },
  },
  fonts: {
    heading: "Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
    body: "Josefin Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  text: {
    background: {
      bg: "background",
    },
    content: {
      color: "text",
    },
  },
  layouts: {
    container: {
      margin: "auto",
      height: "100%",
    },
  },
  buttons: {
    link: {
      color: "link",
      backgroundColor: "transparent",
      "&:hover": {
        color: "#5645FF",
      },
    },
    primary: {
      color: "white", // use the page background color for an inverted effect
      backgroundColor: "accent",

      "&:hover": {
        bg: "#56459f",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
    },
  },
};

export default baseTheme;
