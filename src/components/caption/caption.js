/** @jsx jsx */
import { Button, jsx, useColorMode } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "./caption.css";
import { Container, Link } from "theme-ui";

function Caption({ data }) {
  const bgImage = getImage(data.imageCaption.gatsbyImageData);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage.images.fallback.src})` }}
      className="caption"
    >
      <Container className="caption__info">
        <div className="caption__subtitle animate__animated animate__fadeInLeft">
          <h2 className="caption__subtitle-text">{data.subtitle}</h2>
        </div>
        <div className="caption__maintitle animate__animated animate__zoomIn">
          <h1 className="caption__maintitle-text">{data.title}</h1>
        </div>
        <div className="caption__description animate__animated animate__fadeInRight">
          <p className="caption__description-text">{data.description}</p>
        </div>
        <a
          sx={{ variant: "buttons.primary" }}
          href="#!"
          className="caption__link-btn animate__animated animate__fadeInUp"
        >
          {data.button}
        </a>
      </Container>
    </div>
  );
}

export default Caption;
