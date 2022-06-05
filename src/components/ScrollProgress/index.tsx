import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const listenToScrollEvent = () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(() => {
          calculateScrollDistance();
        });
      });
    };

    const getDocHeight = () => {
      // getting the highest possible scroll position
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    const calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset; // how much the user has scrolled by
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(
        (scrollTop / totalDocScrollLength) * 100
      );

      setPosition(scrollPostion);
    };

    listenToScrollEvent();
  }, [position]);

  console.log("position", position);

  return (
    <div
      className={`fixed  h-1 z-[3]   bg-gradient-to-r from-primary to-primary`}
      style={{ width: `${position}%` }}
    />
  );
};

export default ScrollProgress;
