/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import "./quote.css";

function Quote({ quote, translation }) {
  const { title, content, slug, textButton, background } = quote;
  return (
    <section
      style={{ backgroundImage: `url('${background.file.url}')` }}
      className="quote"
    >
      <div className="quote__title">
        <h4 className="quote__title-text">{title}</h4>
      </div>
      <div className="quote__content">
        <h1 className="quote__content-text">{content}</h1>
      </div>
      <div className="quote__link">
        <Link
          sx={{ variant: "buttons.primary" }}
          className="quote__link-text"
          to={slug}
        >
          {textButton}
        </Link>
      </div>
    </section>
  );
}

export default Quote;
