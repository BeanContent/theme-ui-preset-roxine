/** @jsx jsx */
import React from "react";
import Celebrities from "../celebrities/celebrities";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { useColorMode, jsx } from "theme-ui";

function Layout({ children }) {
  let colorMode = useColorMode()[0];

  return (
    <div
      sx={{ backgroundColor: "background", transition: ".3s ease-in-out" }}
      className="main__layout"
    >
      <Navbar />
      <main>{children}</main>
      <Celebrities />
      <Footer />
    </div>
  );
}
export default Layout;
