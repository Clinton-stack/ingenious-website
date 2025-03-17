'use client'
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const Logo = () => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef(null); // Ref to access image height

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageHeight = imageRef.current?.offsetHeight || 0;
  }, [imageRef.current]); 

  return (
    <Box
      width='100%'
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      style={{ overflow: 'hidden', position: 'relative' }} // Hide overflow to prevent scrolling
    >
      <motion.img
        src="ingenious-new-logo.png" // Replace with your image path
        alt="Ingenious Logo"
        className="md:w-[65%] w-[70%] xl:w-[40%]  items-center mx-auto md:mt-10"
        initial={{ y: 0 }}
        ref={imageRef} 
        animate={{ y: scrollY > imageRef.current?.offsetHeight || 0 ? imageRef.current?.offsetHeight / 1 : scrollY / 2 }} // Conditional animation
        transition={{ duration: 2.5, ease: 'easeOut' }} // Add easing for smoother stop
      />
    </Box>
  );
};

export default Logo;
