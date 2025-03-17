'use client'
import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const images = [
  'partners/pt1.png', 'partners/pt5.png', 'partners/pt4.png',
  'partners/pt3.png', 'partners/pt2.png', 'partners/pt6.png',
  'partners/pt7.png', 'partners/pt8.png', 'partners/pt9.png', 'partners/pt10.png'
];

const Slideshow = () => {
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -images.length * 144; // Move by total width of all images
    const controls = animate(xTranslation, finalPosition, {
      ease: 'linear',
      duration: 30, // Adjust speed
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, []);

  // Duplicate the images to create an infinite loop
  const repeatedImages = [...images, ...images];

  return (
    <div className="bg-gradient-to-r px-10 pb-10 overflow-hidden">
      <motion.div
        className="flex gap-6"
        style={{
          x: xTranslation,
          width: 'max-content',
        }}
      >
        {repeatedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-48 h-auto"
            style={{ width: '120px', height: 'auto' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slideshow;
