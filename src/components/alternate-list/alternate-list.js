/** @jsx jsx */
import React from "react";
import "./alternate-list.css";
import { StaticImage } from "gatsby-plugin-image";
import { Image, jsx } from "theme-ui";

const AlternateItem = ({ item }) => {
  const { title, contents, image } = item;
  return (
    <li
      //   style={{ flexDirection: idx % 2 !== 0 && "row-reverse" }}
      className="alternate__list-item"
    >
      <div className="item__col">
        <Image className="item__img" alt={title} src={image} />
      </div>
      <div className="item__col">
        <div className="item__wrapper">
          <h2 sx={{ color: "text" }} className="item__title">
            {title}
          </h2>
          {contents.map((content, index) => {
            return (
              <p sx={{ color: "text" }} key={index} className="item__content">
                {content}
              </p>
            );
          })}
        </div>
      </div>
    </li>
  );
};

const AlternateList = ({ data }) => {
  return (
    <section className="alternate">
      <ul className="alternate__list">
        {data.map((item, index) => {
          return <AlternateItem idx={index} key={index} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default AlternateList;
