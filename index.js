/** @jsxImportSource theme-ui */
import { makeTheme } from "@theme-ui/css/utils";
import roxineFont from "./assets/roxine-font-icon/roxine-font.css";
import icoMoon from "./assets/icomoon/icomoon.min.css";
import animate from "./assets/animate.css";
import config from './config'
import footer from "./footer";
import banner from './banner';
import buttons from "./buttons";
import caption from './caption';
import card from "./card";
import celebrities from "./celebrities";
import container from "./container";
import divider from "./divider";
import gallery from "./gallery";
import grid from "./grid";
import header from './header';
import header2 from "./header-2";
import header3 from "./header-3";
import link from "./link";
import monialSlider from "./monialSlider";
import navSection from "./navSection";
import slider from "./slider";
import text from './text';
import flexGrid from "./flexGrid";
import navbar from "./navbar";
import sidebar from './sidebar';
import describe from "./describe";
import breadcrumb from "./breadcrumb";
import alternate from "./alternate-list";
import dropdown from './dropdown';
import member from './member';
import poster from './poster';
import categories from './categories';
import story from './story';
import work from "./work";
const fonts = [
  "https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
  "https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i",
  "https://fonts.googleapis.com/css?family=Just+Another+Hand",
  "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
  "https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
];
const icons = [roxineFont, icoMoon, animate];
fonts.forEach((font) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = font;
  document.head.appendChild(link);
});
icons.forEach((icon) => {
  const iconElm = document.createElement("link");
  iconElm.rel = "stylesheet";
  iconElm.href = icon;
  document.head.appendChild(iconElm);
});


export default makeTheme({
  ...config,
  style: {
    ...config.styles
  },
  banner,
  buttons,
  caption,
  card,
  celebrities,
  container,
  divider,
  gallery,
  grid,
  header,
  header2,
  header3,
  link,
  monialSlider,
  navSection,
  slider,
  text,
  footer,
  flexGrid,
  navbar,
  sidebar,
  describe,
  breadcrumb,
  alternate,
  dropdown,
  member,
  poster,
  categories,
  story,
  work
})
