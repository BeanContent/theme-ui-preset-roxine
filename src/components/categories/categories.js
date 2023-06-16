/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import blackDivider from "../../images/black-divider.png";
import Category from "./category/category";

import "./categories.css";

function Categories({ data }) {
  const colorMode = useColorMode()[0];

  return (
    <section className="categories">
      <div className="categories__subject">
        <h2
          sx={{ variant: "text.content" }}
          className="categories__subject-subtitle"
        >
          what we do
        </h2>
        <h1
          sx={{ variant: "text.content" }}
          className="categories__subject-maintitle"
        >
          experts
        </h1>
        <p
          sx={{ variant: "text.content" }}
          className="categories__subject-description"
        >
          We build digital solutions.
        </p>
        <img
          className="categories__subject-divider"
          style={{
            filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
          }}
          src={blackDivider}
          alt=""
        />
      </div>
      {data.map((category, index) => {
        return <Category key={index} category={category} />;
      })}
    </section>
  );
}

export default Categories;
