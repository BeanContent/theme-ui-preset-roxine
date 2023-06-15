/** @jsx jsx */

import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react";
import { Container, jsx } from "theme-ui";
import useScroll from "../../libs/isScrolled";
import toUpperCase from "../../libs/toUpperCase";
import ShoppingCart from "../cart/shopping-cart-panel";
import Dropdown from "../dropdown/dropdown";
import MegaMenu from "../mega/mega";
import SearchComponent from "../search-bar/search-bar";
import Sidebar from "../siderbar/sidebar";
import SwitchTheme from "../switch-theme/toggleModeTheme";
import "./navbar.css";

import useCheckDevice from "../../libs/isMobile";
function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const isMobile = useCheckDevice();

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
  const isScrolled = useScroll(".navbar");
  console.log(useCheckDevice());
  const handleMenuOpen = (index) => {
    setActiveMenu((prevMenu) => (prevMenu === index ? null : index));
  };
  const handleNavbarOpen = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  function LogoBrand(props) {
    if (!props.isMobile) {
      if (props.isScrolled) {
        return (
          <StaticImage
            className="navbar__logo"
            src="../../images/logo-dark.svg"
            alt="logo-brand"
          />
        );
      } else {
        return (
          <StaticImage
            className="navbar__logo"
            src="../../images/logo.svg"
            alt="logo-brand"
          />
        );
      }
    } else {
      return (
        <StaticImage
          className="navbar__logo"
          src="../../images/logo-dark.svg"
          alt="logo-brand"
        />
      );
    }
  }

  useEffect(() => {});

  return (
    <nav sx={{ backgroundColor: (isScrolled || isMobile) && "white" }} className="navbar">
      <Container>
        <div sx={{ padding: "0 20px" }} className="navbar__wrapper">
          <div className="navbar__left">
            <button onClick={handleNavbarOpen} className="navbar__toggler">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <Link to="/" className="navbar__brand">
              <LogoBrand isMobile={isMobile} isScrolled={isScrolled} />
            </Link>
          </div>
          <div className="navbar__right">
            <div
              style={{ maxHeight: isOpenNavbar && isMobile ? "60vh" : null }}
              className="navbar__nav"
            >
              <ul className="navbar__nav-list">
                {menu.map((item, index) => {
                  if (item.dropdown) {
                    return (
                      <li
                        sx={{
                          a: {
                            color:
                              (isScrolled && !isMobile) || isMobile
                                ? "#55565b"
                                : "white",
                          },
                        }}
                        key={index}
                        className="list__item animate__animated animate__fadeIn"
                      >
                        <Dropdown
                          indexItem={index}
                          data={item}
                          activeMenu={activeMenu}
                          handleMenuOpen={handleMenuOpen}
                        />
                      </li>
                    );
                  } else if (item.mega) {
                    return (
                      <li
                        sx={{
                          a: {
                            color:
                              (isScrolled && !isMobile) || isMobile
                                ? "#55565b"
                                : "white",
                          },
                        }}
                        key={index}
                        style={{ position: "unset" }}
                        className="list__item animate__animated animate__fadeIn"
                      >
                        <MegaMenu
                          indexItem={index}
                          data={item}
                          activeMenu={activeMenu}
                          handleMenuOpen={handleMenuOpen}
                        />
                      </li>
                    );
                  } else {
                    return (
                      <li
                        sx={{
                          a: {
                            color:
                              (isScrolled && !isMobile) || isMobile
                                ? "#55565b"
                                : "white",
                          },
                        }}
                        key={index}
                        className="list__item animate__animated animate__fadeIn"
                      >
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
              {!isMobile && <ShoppingCart />}
              <SearchComponent />
              <Sidebar />
              {!isMobile && <SwitchTheme className="toggle-theme" />}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
