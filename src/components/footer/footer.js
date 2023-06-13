import React from "react";
import "./footer.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const socialList = [
  {
    name: "facebook",
    slug: "",
    icon: "fab fa-facebook-f",
  },
  {
    name: "twitter",
    path: "",
    icon: "fab fa-twitter",
  },
  {
    name: "google+",
    path: "",
    icon: "fab fa-google-plus-g",
  },
  {
    name: "pinterest",
    path: "",
    icon: "fab fa-pinterest",
  },
  {
    name: "dribble",
    path: "",
    icon: "fas fa-basketball-ball",
  },
];
const navList = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "Contact",
    slug: "contact",
  },
];
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top-col">
            <StaticImage
              className="footer__top-brand"
              src="../../images/logo-dark.svg"
              alt="logo-brand"
            />
          </div>
          <div className="footer__top-col">
            <ul className="footer__top-navs">
              {navList.map((item, index) => {
                return (
                  <li key={index} className="navs__item">
                    <Link className="navs__item-link" to={item.slug}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__top-col">
            <ul className="footer__top-socials">
              {socialList.map((item, index) => {
                return (
                  <li key={index} className="socials__item">
                    <a className="socials__item-link" href={item.slug}>
                      <i className={`${item.icon} link__icon`}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-release">
            <p className="release__info">
              Copyright 2016 - Roxine - Multi Purpose Theme by DevCox
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
