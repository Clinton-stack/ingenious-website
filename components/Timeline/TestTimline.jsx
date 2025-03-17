'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';

const ProgressBar = () => {
  // Destructure ref and inView from useInView hook
 const ref = React.useRef(null);
  const inView = useInView(ref);

  console.log('inView:', inView);

  return (
    <div ref={ref} className="progress-container">
      {/* Motion div for progress bar */}
      <motion.div
        className="progress-bar"
        style={{ width: '10px', height: '0%', backgroundColor: 'blue' }}
        animate={{ height: inView ? '100%' : '0%' }} // Animate height based on inView
        transition={{ duration: 1 }} // Adjust animation duration and easing
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
