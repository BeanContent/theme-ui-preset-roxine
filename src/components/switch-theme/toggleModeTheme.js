/** @jsx jsx */
import { Button, Switch, jsx, useColorMode } from "theme-ui";

const SwitchTheme = (props) => {
  const [mode, setMode] = useColorMode();

  return (
    <Button
      className={props.className}
      sx={{
        backgroundColor: "background",
        color: "text",
        fontWeight: "bold",
        ":hover": { background: "text", color: "background" },
      }}
      onClick={(e) => {
        const next = mode === "dark" ? "light" : "dark";
        setMode(next);
      }}
    >
      {mode === "light" ? mode.toUpperCase() : "dark".toLocaleUpperCase()}
    </Button>
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
