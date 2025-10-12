"use client";

import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    // Dynamically import AOS to ensure it runs client-side
    const initAOS = async () => {
      const AOS = await import("aos");

      AOS.init({
        easing: "ease-out-cubic",
        duration: 800,
        once: true,
        disable: false, // Enable on all screen sizes for now
        offset: 100,
        delay: 0,
      });

      // Force refresh after a short delay
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    };

    initAOS();
  }, []);

  return null;
};
