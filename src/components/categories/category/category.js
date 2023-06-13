/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import "./category.css";
function Category({ category }) {
  return (
    <div
      sx={{
        backgroundColor: "secondary",
        "&:hover": {
          ".category__title-icon, .category__title-text": {
            color: "accent",
          },
          ".category__description-text, .category__link-btn": {
            color: "primary",
          },
        },
      }}
      className="category"
    >
      <div className="category__title">
        <i
          sx={{
            color: "text",
          }}
          className={category.iconClass + " category__title-icon"}
        ></i>
        <Link sx={{ color: "text" }} to="/" className="category__title-text">
          {category.title}
        </Link>
      </div>
      <div className="category__description">
        <p sx={{ color: "text" }} className="category__description-text">
          {category.description}
        </p>
      </div>
      <div className="category__link">
        <Link
          sx={{
            color: 'text',
            // variant: "buttons.link",
            "&:hover": {
              color: "#5645FF !important",
            },
          }}
          className="category__link-btn"
          to={category.link}
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default Category;
