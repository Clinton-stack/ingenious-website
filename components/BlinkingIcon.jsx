'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BlinkingIcon = () => {
  const [showIcon, setShowIcon] = useState(false); // Initially hidden
  const [lastActiveTime, setLastActiveTime] = useState(Date.now()); // Track inactivity

  const checkIfAtBottom = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    return scrollY + windowHeight >= documentHeight;
  };
 
  useEffect(() => {
    const handleActivity = () => {
      setLastActiveTime(Date.now());
      setShowIcon(false); // Hide on activity
    };

    // Attach event listeners for activity (scroll and mouse movement)
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity); // Include click for interaction

    // Clear event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  useEffect(() => {
    const inactivityTimeout = setTimeout(() => {
        const isAtNotBottom = !checkIfAtBottom();
        if(isAtNotBottom) {
          setShowIcon(true);
        }
    }, 20000); // 20 seconds of inactivity

    // Clear timeout only on cleanup
    return () => clearTimeout(inactivityTimeout);
  }, [lastActiveTime]); // Reset timeout on activity

  return showIcon && (
      <motion.img
        src="/indicator.png"
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[3%] lg:w-[2%]  blinking-icon"
        alt="indicator"
        animate={{ opacity: showIcon ? [0, 1, 0] : 0 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    )
};

export default BlinkingIcon;
