'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add an event listener to track the scroll position
    const onScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" fixed bottom-[20px] animate-bounce  p-5 rounded-md right-[20px] text-center z-[999999999] text-2xl"
        >
          <div>
            <Image src="/Arrows.png" alt="scroll" width={20} height={20} />
            {/* <FaArrowUp /> */}
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
