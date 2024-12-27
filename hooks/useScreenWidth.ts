import { useState, useEffect } from "react";

function useScreenSize() {
  const getCurrentScreenSize = () => {
    if (typeof window === "undefined") {
      return "unknown";
    }

    const width = window.innerWidth;

    if (width < 640) return "xs";
    if (width >= 640 && width < 768) return "sm";
    if (width >= 768 && width < 1024) return "md";
    if (width >= 1024 && width < 1280) return "lg";
    if (width >= 1280 && width < 1536) return "xl";
    return "2xl";
  };

  const [screenSize, setScreenSize] = useState(getCurrentScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
