import React from "react";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "700px", backgroundColor: 'cyan' }}>
      <motion.div
        style={{
          width: "2px",
          height: "100%",
          backgroundColor: "black",
          position: "relative",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
            position: "absolute",
            left: "-10px",
            top: "0",
          }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "blue",
            borderRadius: "50%",
            position: "absolute",
            left: "-10px",
            bottom: "0",
          }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        />

<motion.div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            position: "absolute",
            left: "-10px",
            bottom: "50%",
          }}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <div style={{ margin: "10px" }}>
        <p>Text on the left side</p>
      </div>
      <div style={{ margin: "10px" }}>
        <p>Text on the right side</p>
      </div>

      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "2px",
          background: "#000",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(25% - 4px)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#000",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            rotateY: 0,
          }}
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(50% - 4px)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#000",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            rotateY: 0,
          }}
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
            delay: 0.5,
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(75% - 4px)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#000",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            rotateY: 0,
          }}
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Line;
