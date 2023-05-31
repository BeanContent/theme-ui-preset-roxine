/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { jsx } from "theme-ui";
import toUpperCase from "../../libs/toUpperCase";
import useWindowSize from "../../libs/useWindowSize";
import "./dropdown.css";
const Dropdown = ({ name, menu = [], isActive, index, onShow }) => {
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  let windowSize = useWindowSize();
  let isMobile = windowSize.width <= 768;
  function ELMOutOfViewPort(e) {
    e.stopPropagation();
    const dropdownMenu = e.target.nextElementSibling;
    const totalWidth =
      dropdownMenu.getBoundingClientRect().width +
      dropdownMenu.getBoundingClientRect().x;
    if (totalWidth > windowSize.width) {
      dropdownMenu.style.left = `${
        dropdownMenu.getBoundingClientRect().x - windowSize.width
      }px`;
    }
  }
  function showByClick(e) {
    e.stopPropagation();
    const dropdownMenu = e.target.nextElementSibling;
    if (isMobile) {
      dropdownMenu.classList.toggle("show");
    }
  }
  return (
    <>
      <a
        onMouseEnter={(e) => ELMOutOfViewPort(e)}
        onClick={(e) => {
          showByClick(e);
          onShow();
        }}
        href="#!"
        className="dropdown__toggle"
      >
        {toUpperCase(name)}
        {isMobile ? <i className="icon-ios-more icn-right"></i> : null}
      </a>
      {
        <ul
          className={
            isActive && isMobile
              ? "show dropdown__menu animate__animated animate__fadeIn"
              : "dropdown__menu animate__animated animate__fadeIn"
          }
        >
          {menu.map((item, index) => {
            if (item.dropdown) {
              return (
                <li key={index} className="dropdown__menu-item">
                  <Dropdown
                    name={item.name}
                    menu={item.dropdown}
                    onShow={() => setIsActiveIndex(index)}
                    isActive={isActiveIndex === index}
                  />
                </li>
              );
            } else {
              return (
                <li key={index} className="dropdown__menu-item">
                  <Link className="item__link" to={item.path}>
                    {toUpperCase(item.name)}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      }
    </>
  );
};

export default Dropdown;
