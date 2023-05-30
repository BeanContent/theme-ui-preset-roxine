/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import { jsx } from "theme-ui";
import blackDivider from "../../images/black-divider.png";
import "./culture.css";
function Culture({ data }) {
  const { description, bgImage, title, subtitle, content } = data;
  return (
    <section className="culture">
      <div
        style={{ backgroundImage: `url('${bgImage.file.url}')` }}
        className="culture__background"
      ></div>
      <div className="culture__container">
        <h4 className="culture__subtitle">{subtitle}</h4>
        <h2 className="culture__maintitle">{title}</h2>
        <p className="culture__des">{description}</p>
        <img className="culture__divider" src={blackDivider} alt="" />
        <p className="culture__content">{content.content}</p>
      </div>
    </section>
  );
}

export default Culture;
