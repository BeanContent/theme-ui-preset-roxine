/** @jsx jsx */
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { jsx } from "theme-ui";
import toUpperCase from "../../libs/toUpperCase";
import useWindowSize from "../../libs/useWindowSize";
import "./dropdown.css";
import useScroll from "../../libs/isScrolled";
import useCheckDevice from "../../libs/isMobile";
const Dropdown = ({ indexItem, data, activeMenu, handleMenuOpen }) => {
  
  const [localActiveMenu, setLocalActiveMenu] = useState(null);
  
  const isMobile = useCheckDevice();

  const isScrolled = useScroll(".navbar");
  const isOpen = activeMenu === indexItem;
  let windowSize = useWindowSize();
  
  function ELMOutOfViewPort(e) {
    e.stopPropagation();
    
    const dropdownMenu = e.target.nextElementSibling;
    const menuWidth = Math.floor(
      dropdownMenu.getBoundingClientRect().width +
        dropdownMenu.getBoundingClientRect().x
    );
    if (menuWidth > windowSize.width) {
      dropdownMenu.style.left = `${-100}%`;
    }
  }

  const localHandleMenuOpen = (index) => {
    setLocalActiveMenu((prevMenu) => (prevMenu === index ? null : index));
  };
  const toggleMenu = () => {
    handleMenuOpen(indexItem);
  };
  useEffect(() => {
      
      
  });

  return (
    <>
      <a
        onMouseEnter={ELMOutOfViewPort}
        onClick={toggleMenu}
        href="#!"
        className="dropdown__toggle"
      >
        {toUpperCase(data.name)}
        {data.dropdown ? <i className="icon-ios-more icn-right"></i> : null}
      </a>
      {isOpen}
      {
        <ul
          
          
          
          className={
            isOpen && isMobile
              ? "show dropdown__menu animate__animated animate__fadeIn"
              : "dropdown__menu animate__animated animate__fadeIn"
          }
        >
          {data.dropdown.map((item, index) => {
            if (item.dropdown) {
              return (
                <li key={index} className="dropdown__menu-item">
                  <Dropdown
                    indexItem={index}
                    data={item}
                    activeMenu={localActiveMenu}
                    handleMenuOpen={localHandleMenuOpen}
                  />
                </li>
              );
            } else {
              return (
                <li key={index} className="dropdown__menu-item">
                  <Link
                    sx={{ color: isScrolled && "text" }}
                    className="item__link"
                    to={item.path}
                  >
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
