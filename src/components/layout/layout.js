import React from "react";
import Celebrities from "../celebrities/celebrities";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Layout({ children }) {
  return (
    <div className="main__layout">
      <Navbar />
      <main>{children}</main>
      <Celebrities />
      <Footer />
    </div>
  );
}
export default Layout;
