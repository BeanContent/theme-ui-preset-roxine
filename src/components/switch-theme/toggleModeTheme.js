/** @jsx jsx */
import { useEffect } from "react";
import { jsx, useColorMode } from "theme-ui";
import useCheckDevice from "../../libs/isMobile";
import useScroll from "../../libs/isScrolled";

const SwitchTheme = (props) => {
  const [mode, setMode] = useColorMode();
  
  const isMobile = useCheckDevice();

  const isScrolled = useScroll(".navbar");
  useEffect(() => {
    
    
  });
  return (
    <button
      className={props.className}
      sx={{
        
        color: (isScrolled && !isMobile) || isMobile ? "#55565b" : "white",

        fontWeight: "bold",
        
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
    
    
    
    
    
    
    
    
    
    
  );
};

export default SwitchTheme;
