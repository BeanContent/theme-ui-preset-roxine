import React, { useEffect, useState } from "react";

const useScroll = (elmName) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && elmName) {
      const elm = document.querySelector(elmName);
      const handleScroll = () => {
        setIsScrolled(window.scrollY > elm.getBoundingClientRect().height); // Set isScrolled to true when scrolled beyond 200 pixels
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });
  return isScrolled;
};

export default useScroll;
