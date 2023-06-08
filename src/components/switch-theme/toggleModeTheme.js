/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import useScroll from "../../libs/isScrolled";
import { useEffect, useState } from "react";
import useWindowSize from "../../libs/useWindowSize";

const SwitchTheme = (props) => {
  const [mode, setMode] = useColorMode();
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();

  const isScrolled = useScroll(".navbar");
  useEffect(() => {
    setIsMobile(windowSize.width <= 1024);
  });
  return (
    <button
      className={props.className}
      sx={{
        // backgroundColor: mode === "dark" && "background",
        color: (isScrolled && !isMobile) || isMobile ? "#55565b" : "white",

        fontWeight: "bold",
        // ":hover": { background: "text", color: "background" },
      }}
      onClick={(e) => {
        const next = mode === "dark" ? "light" : "dark";
        setMode(next);
      }}
    >
      {mode === "light"
        ? "dark".toLocaleUpperCase()
        : "light".toLocaleUpperCase()}
    </button>
    // <button
    //   sx={{ color: "red" }}
    //   {...props}
    //   onClick={(e) => {
    //     const next = mode === "dark" ? "light" : "dark";
    //     setMode(next);
    //   }}
    // >
    //   CLICK ME
    // </button>
  );
};

export default SwitchTheme;
