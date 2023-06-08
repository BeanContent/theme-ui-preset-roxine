/** @jsx jsx */
import { jsx } from "theme-ui";
import Celebrities from "../celebrities/celebrities";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Layout({ children }) {
  // let colorMode = useColorMode()[0];

  return (
    <div
      sx={{ backgroundColor: "background", transition: ".3s ease-in-out" }}
      className="main__layout"
    >
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Celebrities />
      <Footer />
    </div>
  );
}
export default Layout;
