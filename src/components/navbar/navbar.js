import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import toUpperCase from "../../libs/toUpperCase";
import ShoppingCart from "../cart/shopping-cart-panel";
import Dropdown from "../dropdown/dropdown";
import Sidebar from "../siderbar/sidebar";
import SwitchTheme from "../switch-theme/toggleModeTheme";
import "./navbar.css";

function Navbar() {
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : null;
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      allSite {
        nodes {
          siteMetadata {
            menu {
              mega {
                name
                dropdown {
                  name
                  icon
                  path
                }
                icon
                path
              }
              name
              icon
              dropdown {
                icon
                name
                path
                dropdown {
                  icon
                  name
                  path
                }
              }
              path
            }
          }
        }
      }
    }
  `);
  const menu = data.allSite.nodes[0].siteMetadata.menu;
  function openNav(e) {
    e.stopPropagation();
    const navMenu = document.querySelector(".navbar__nav");
    if (navMenu.style.getPropertyValue("max-height") === "0vh") {
      navMenu.style.maxHeight = "80vh";
    } else {
      navMenu.style.maxHeight = "0vh";
    }
  }
  function openSidePanel() {
    setIsOpenPanel(!isOpenPanel);
  }
  function openSearch() {
    setIsOpenSearch(!isOpenSearch);
  }
  function openCart(e) {
    setIsOpenCart(true);
  }
  function closeCart(e) {
    e.stopPropagation();
    setIsOpenCart(false);
  }
  return (
    <nav className="navbar">
      <div
        style={{ display: isOpenSearch ? "block" : "none" }}
        className={
          isOpenSearch
            ? "navbar__search-container animate__animated animate__fadeIn"
            : "navbar__search-container"
        }
      >
        <input placeholder="Type & Press Enter" className="navbar__search" />
        <button
          onClick={openSearch}
          className="x-search icon-close-round navbar-link navbar__search-close"
        >
          {""}
        </button>
      </div>
      {isMobile ? (
        <>
          <button
            onMouseOut={(e) => openNav(e)}
            onClick={(e) => setTimeout(openNav(e), 2000)}
            className="navbar__toggler"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <Link to="/" className="navbar__brand">
            <StaticImage
              className="navbar__logo dark"
              src="../../images/logo-dark.svg"
              alt="logo-dark"
            />
          </Link>
        </>
      ) : (
        <Link to="/" className="navbar__brand">
          <StaticImage
            className="navbar__logo"
            src="../../images/logo.svg"
            alt="logo-light"
          />
        </Link>
      )}
      <div
        style={isMobile ? { maxHeight: "0vh" } : null}
        className="navbar__nav"
      >
        <ul className="navbar__nav-list">
          {menu.map((item, index) => {
            if (item.dropdown) {
              return (
                <li key={index} className="list__item">
                  <Dropdown
                    name={item.name}
                    menu={item.dropdown}
                    onShow={() => setIsActiveIndex(index)}
                    isActive={isActiveIndex === index}
                  />
                </li>
              );
            } else if (item.mega) {
              return null;
            } else {
              return (
                <li key={index} className="list__item">
                  <Link to={item.path} className="list__item-link">
                    {toUpperCase(item.name)}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="navbar__icon">
        {!isMobile ? (
          <button
            onMouseOut={closeCart}
            onMouseOver={openCart}
            className="navbar__icon-cart"
          >
            <i className="custom-icon-cart"></i>
            <ShoppingCart isOpenCart={isOpenCart} />
          </button>
        ) : null}
        <button onClick={openSearch} className="navbar__icon-search">
          <i className="custom-icon-search"></i>
        </button>
        <button onClick={openSidePanel} className="navbar__icon-panel">
          <i className="icon-sort-1"></i>
        </button>
        <SwitchTheme className="toggle-theme" />
      </div>
      <Sidebar setIsOpen={openSidePanel} isOpenPanel={isOpenPanel} />
    </nav>
  );
}

export default Navbar;
