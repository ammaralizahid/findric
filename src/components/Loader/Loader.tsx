"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(dotsRef.current, {
      duration: 0.5,
      y: -10,
      opacity: 0.5,
      stagger: 0.2,
      ease: "power1.inOut",
    }).to(dotsRef.current, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div ref={loaderRef} className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            className="w-4 h-4 bg-blue-500 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;