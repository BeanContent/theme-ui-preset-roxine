import "./src/styles/icomoon/icomoon.css";
import "./src/styles/roxine-font-icon/roxine-font.css";
// import './src/styles/custom/bootstrap.css';
import "./src/styles/custom/main.css";
import "./node_modules/swiper/swiper-bundle.min.css";
// import './node_modules/swiper/swiper-bundle.min.js';
import React from "react";
import { ThemeProvider } from "theme-ui";
import baseTheme from "./src/gatsby-plugin-theme-ui/baseTheme";
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={baseTheme}>{element}</ThemeProvider>
);
