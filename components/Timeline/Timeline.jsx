'use client'
import React, { useEffect, useState, useRef } from "react";
import { invariant, motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCircle } from "react-icons/fa";
import { Box, Heading, Text } from "@chakra-ui/react";
import classes from "./timeline.module.css";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

export default function Timeline() {
  const divRef = useRef(null);
  const [percentageInView, setPercentageInView] = useState(0);
  const inView = useInView(divRef); // Adjust threshold as needed
  const [isMobile] = useMediaQuery("(max-width: 425px)"); // Check if the screen width is mobile

  const updatePercentageInView = () => {
    if (divRef.current) {
      const { top, height } = divRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(windowHeight - top, height);
      const percentage = (visibleHeight / height) * 100;
      setPercentageInView(percentage);
    }
  };

  // Call the updatePercentageInView function on scroll and visibility change
  const handleScroll = () => {
    updatePercentageInView();
  };

  // Attach scroll event listener to update percentage on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only add event listener once on component mount

  const menuItems = [
    { id: 1, name: "About Us", sectionId: "aboutUs" },
    { id: 2, name: "Services", sectionId: "services" },
    { id: 3, name: "Product and Solutions", sectionId: "productSolution" },
    { id: 4, name: "Clients and Partners", sectionId: "client&partners" },
    { id: 5, name: "Contact Us", sectionId: "contactUs" },
  ];

  return (
    <div className={classes.timelineContainer} ref={divRef}>
      <motion.div
        className={classes.timeline}
        initial={{ height: 0 }}
        animate={{ height: inView ? `${percentageInView - 20}%` : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      ></motion.div>

      {menuItems.map((menuItem) => (
        <motion.div
          key={menuItem.id}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, threshold: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: isMobile ? 100 : menuItem.id % 2 === 0 ? -100 : 100,
            },
            visible: {
              opacity: Math.min(percentageInView / 110, 1),
              x: 0,
              transition: {
                duration: 1.9,
              },
            },
          }}
          className={`${classes.textContainer} ${
            menuItem.id % 2 === 0
              ? `${classes.leftContainer} ${classes.textAlign}`
              : classes.rightContainer
          }`}
        >
          <FaCircle className={classes.circle} />
          <div className={classes.textbox}>
            <Link href={`#${menuItem.sectionId}`}>
              <Text fontSize="sm" cursor="pointer">
                {menuItem.name}
              </Text>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
