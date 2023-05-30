/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, useColorMode } from "theme-ui";
import blackDivider from "../../images/black-divider.png";
import "./story.css";
function Story({ data }) {
  const {
    content1,
    content2,
    content3,
    description,
    subtitle,
    title,
    contentList,
    slug,
    buttonLabel,
  } = data;
  let colorMode = useColorMode()[0];
  return (
    <section className="story">
      <div className="story__header">
        <h4 sx={{ variant: "text.content" }} className="story__header-subtitle">
          {subtitle}
        </h4>
        <h2
          sx={{ variant: "text.content" }}
          className="story__header-maintitle"
        >
          {title}
        </h2>
        <p sx={{ variant: "text.content" }} className="story__header-des">
          {description}
        </p>
        <img
          className="story__header-divider"
          style={{
            filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
          }}
          src={blackDivider}
          alt=""
        />
      </div>
      <div className="story__body">
        <div className="story__body-col">
          <p
            sx={{ variant: "text.content" }}
            className="stody__body-content1 content"
          >
            {content1}
          </p>
          <p
            sx={{ variant: "text.content" }}
            className="story__body-content2 content"
          >
            {content2}
          </p>
          <Link
            sx={{ variant: "buttons.primary" }}
            to={slug}
            className="story__body-slug"
          >
            {buttonLabel}
          </Link>
        </div>
        <div className="story__body-col">
          <p
            sx={{ variant: "text.content" }}
            className="story__body-content3 content"
          >
            {content3}
          </p>
          <ul className="story__body-list">
            {contentList.map((item, index) => {
              return (
                <li key={index} className="list__item">
                  <Link to={item.slug} className="list__item-link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Story;
