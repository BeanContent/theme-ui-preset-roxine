/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { jsx, useColorMode } from "theme-ui";
import toCapitalize from "../../libs/toCapitalize";
import Slider from "../slider/slider";
import "./team.css";
function Team({ data }) {
  const members = data;
  let colorMode = useColorMode()[0];

  return (
    <section sx={{ backgroundColor: "background" }} className="team">
      <div className="team__head">
        <h4 sx={{ variant: "text.content" }} className="team__head-subtitle">
          who we are
        </h4>
        <h2 sx={{ variant: "text.content" }} className="team__head-title">
          team work
        </h2>
        <p sx={{ variant: "text.content" }} className="team__head-des">
          {toCapitalize(
            "we really love what we do & our work on every project truly reflects that."
          )}
        </p>
        <StaticImage
          className="team__head-divider"
          style={{
            filter: colorMode === "light" ? "invert(0%)" : "invert(100%)",
          }}
          src="../../images/black-divider.png"
          alt="divider"
        />
      </div>
      <Slider data={members} />
      <div className="team__foot">
        <p sx={{ variant: "text.content" }} className="team__foot-content">
          {toCapitalize(
            "Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          )}
        </p>
      </div>
    </section>
  );
}

export default Team;
