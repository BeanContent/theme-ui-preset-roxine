/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import React from "react";
import "./category.css";
function Category({ category }) {
  return (
    <div className="category">
      <div className="category__title">
        <i className={category.iconClass + " category__title-icon"}></i>
        <Link to={"/"} className="category__title-text">
          {category.title}
        </Link>
      </div>
      <div className="category__description">
        <p className="category__description-text">{category.description}</p>
      </div>
      <div className="category__link">
        <Link className="category__link-btn" to={category.link}>
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default Category;
