import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getCurrentScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

function getCurrentScreenSize() {
  if (typeof window === "undefined") {
    return "unknown"; // Return a default value when window is not defined
  }

  const width = window.innerWidth;

  if (width < 640) return "xs"; // Extra small
  if (width >= 640 && width < 768) return "sm"; // Small
  if (width >= 768 && width < 1024) return "md"; // Medium
  if (width >= 1024 && width < 1280) return "lg"; // Large
  if (width >= 1280 && width < 1536) return "xl"; // Extra large
  return "2xl"; // Extra-extra large
}

export default useScreenSize;
