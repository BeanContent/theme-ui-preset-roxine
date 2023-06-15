import React, { useEffect, useState } from "react";

function useCheckDevice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleCheck = () => {
        const userAgent = navigator.userAgent;

      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        )
      );
    };

    // Attach the event listener
    window.addEventListener("resize", handleCheck);

    // Initial window size
    handleCheck();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleCheck);
    };
  }, []);
  return isMobile;
}

export default useCheckDevice;

// const checkDevice = () => {
//   const userAgent = navigator.userAgent;
//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       userAgent
//     );
//   useEffect(() => {
//     if (typeof navigator !== "undefined") {
//     }
//   });
//   return;
// };
