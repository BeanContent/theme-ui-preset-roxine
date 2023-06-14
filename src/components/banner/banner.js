/** @jsx jsx */
import React from "react";
import "./banner.css";
import toCapitalize from "../../libs/toCapitalize";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import background from "../../images/backgrounds/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
const Banner = ({ data }) => {
  const { title, content } = data;
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="banner"
    >
      <div className="banner__wrapper">
        <h1 className="banner__title">{title && toCapitalize(title)}</h1>
        {content && <p className="banner__content">{content}</p>}
        <div className="banner__breadcrumb">
          <Breadcrumb />
        </div>
      </div>
    </section>
  );
};

export default Banner;
