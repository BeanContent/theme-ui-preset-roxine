/** @jsx jsx */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { jsx } from "theme-ui";
import "./galleries.css";

function Galleries({ data }) {
  const menu = [
    {
      name: "all",
      slug: "/",
    },
    {
      name: "ui/ux design",
      slug: "/",
    },
    {
      name: "programming",
      slug: "/",
    },
    {
      name: "photography",
      slug: "/",
    },
    {
      name: "ecommerce",
      slug: "/",
    },
  ];

  return (
    <section sx={{ backgroundColor: "background" }} className="galleries">
      <div className="galleries__title">
        <h2 sx={{ variant: "text.content" }} className="galleries__title-text">
          The work
        </h2>
      </div>
      <ul className="galleries__nav-list">
        {menu.map((item, index) => {
          return (
            <li key={index} className="list__item">
              <Link
                sx={{ variant: "text.content" }}
                className="list__item-link"
                to={item.slug}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="galleries__galleries">
        <div className="galleries__galleries-list">
          {data.map((item, index) => {
            const image = getImage(item.images[0].gatsbyImageData);
            return (
              <div key={index} className="galleries__container">
                <div className="list__gallery">
                  <GatsbyImage
                    alt="galleries background"
                    className="list__gallery-image"
                    image={image}
                  />
                  <Link to="#!" className="list__gallery-fav icon-heart"></Link>
                  <Link to="#!" className="list__gallery-slug icon-link"></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Galleries;
