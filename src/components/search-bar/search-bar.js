/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import "./search-bar.css";
import useScroll from "../../libs/isScrolled";
import useWindowSize from "../../libs/useWindowSize";

function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();

  const isScrolled = useScroll(".navbar");

  const handleToggleSearchBar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsMobile(windowSize.width <= 1024);
  });
  return (
    <div className="search">
      <button
        sx={{
          i: {
            color: (isScrolled && !isMobile) || isMobile ? "#55565b" : "white",
          },
        }}
        onClick={handleToggleSearchBar}
        className="search__btn"
      >
        <i className="custom-icon-search"></i>
      </button>
      <div
        style={{ display: isOpen ? "flex" : "none" }}
        className={
          isOpen
            ? "search__container animate__animated animate__fadeIn"
            : "search__container"
        }
      >
        <input placeholder="Type & Press Enter" className="search__input" />
        <button
          onClick={handleToggleSearchBar}
          className="x-search icon-close-round search__close"
        >
          {/* {""} */}
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
