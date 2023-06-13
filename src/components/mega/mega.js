import { Link } from "gatsby";
import React, { useEffect } from "react";
import useCheckDevice from "../../libs/isMobile";
import toUpperCase from "../../libs/toUpperCase";
import useWindowSize from "../../libs/useWindowSize";
import "./mega.css";
function MegaMenu({ indexItem, data, activeMenu, handleMenuOpen }) {
  const isOpen = activeMenu === indexItem;
  let windowSize = useWindowSize();
  
  const isMobile = useCheckDevice();
  const toggleMenu = () => {
    handleMenuOpen(indexItem);
  };
  useEffect(() => {
        
        
  });
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
