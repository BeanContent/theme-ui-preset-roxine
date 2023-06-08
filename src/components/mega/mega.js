import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import toUpperCase from "../../libs/toUpperCase";
import "./mega.css";
import useWindowSize from "../../libs/useWindowSize";
function MegaMenu({ indexItem, data, activeMenu, handleMenuOpen }) {
  const isOpen = activeMenu === indexItem;
  let windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    handleMenuOpen(indexItem);
  };
  useEffect(() => {
    setIsMobile(windowSize.width <= 1024);
  },[windowSize]);
  return (
    <>
      <a onClick={toggleMenu} href="#!" className="mega__toggle">
        {toUpperCase(data.name)}
      </a>
      <div
        className={
          isOpen && isMobile
            ? "mega__menu animate__animated animate__fadeIn show"
            : "mega__menu animate__animated animate__fadeIn"
        }
      >
        {data.mega.map((item, indexMenu) => {
          return (
            <div key={indexMenu} className="mega__menu-group">
              {item.dropdown.map((subItem, indexItem) => {
                return (
                  <div className="group__item" key={indexItem}>
                    <div className="group__item-container">
                      <i className={subItem.icon}></i>
                      <Link to={subItem.path} className="group__item-link">
                        {toUpperCase(subItem.name)}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MegaMenu;
