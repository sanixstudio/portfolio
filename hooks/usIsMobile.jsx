import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640, // Small screens (e.g., sm: from 'sm' breakpoint and below)
  md: 768, // Medium screens
  lg: 1024, // Large screens
  xl: 1280, // Extra-large screens
};

// Helper function to determine if the screen size is within the mobile range
const isMobileScreen = (width) => {
  return width <= breakpoints.sm;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen(window.innerWidth));

  useEffect(() => {
    // Function to update isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(isMobileScreen(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
