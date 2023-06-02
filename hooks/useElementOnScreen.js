"use client";
const { useRef, useEffect, useState } = require("react");

export const useElementOnScreen = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cb = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.observe(containerRef.current);
    };
  }, [containerRef]);

  return [containerRef, isVisible];
};
