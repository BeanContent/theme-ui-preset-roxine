export const baseTheme = {
  config: {
    initialColorModeName: "light",
  },
  colors: {
    text: "#55565b",
    primary: "#2812ff",
    secondary: "#55565b",
    accent: "#000",
    hightlight: "#2812ff",
    background: "#fff",
    link: "#161716",
    modes: {
      dark: {
        text: "white",
        link: "white",
        background: "#202124", //#201f30
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
    link: {
      color: "link",
    },
  },
  buttons: {
    primary: {
      color: "white", // use the page background color for an inverted effect
      backgroundColor: "#5645FF",

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
