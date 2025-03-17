import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Scroll = ({ scrollToSection }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToTargetSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.09,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(3.5, 2)",
        },
      })
      .to(".ball02, .text01", {}, 0.2)
      .to(".ball03, .text02", {}, 0.3)
      .to(".ball04, .text03", {}, 0.4)
      .to(".ball05, .text04", {}, 0.5)
      .to(".ball05, .text05", {}, 0.6);

    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { duration: 0.1, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);

    return () => {
      // Clear GSAP timelines and ScrollTriggers
      main.kill(); // Kill the main GSAP timeline
      pulses.kill(); // Kill the pulses GSAP timeline

      // Ensure ScrollTrigger is removed
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
        ref={svgRef}
      >
        <path
          className="theLine"
          d="M 50 200 L 50 800"
          fill="none"
          stroke="white"
          strokeWidth="1px"
        />

        <circle className="ball ball01" r="5" cx="50" cy="130"></circle>
        <circle className="ball ball02" r="5" cx="50" cy="200"></circle>
        <circle className="ball ball03" r="5" cx="50" cy="350"></circle>
        <circle className="ball ball04" r="5" cx="50" cy="500"></circle>
        <circle className="ball ball05" r="5" cx="50" cy="650"></circle>
        <circle className="ball ball06" r="5" cx="50" cy="800"></circle>

        <text
          className={`text01 cursor-pointer ${
            scrollToSection === "aboutUs" ? "active" : ""
          }`}
          x="150"
          y="200"
          onClick={() => scrollToTargetSection("aboutUs")}
        >
          About Us
        </text>
        <text
          className={`text02 cursor-pointer ${
            scrollToSection === "services" ? "active" : ""
          }`}
          x="-120"
          y="350"
          onClick={() => scrollToTargetSection("services")}
        >
          Services
        </text>
        <text
          className={`text03 cursor-pointer ${
            scrollToSection === "productSolution" ? "active" : ""
          }`}
          x="210"
          y="500"
          onClick={() => scrollToTargetSection("productSolution")}
        >
          Product and Solutions
        </text>
        <text
          className={`text04 cursor-pointer ${
            scrollToSection === "client&parterns" ? "active" : ""
          }`}
          x="-44%"
          y="650"
          onClick={() => scrollToTargetSection("client&parterns")}
        >
          Clients and Partners
        </text>
        <text
          className={`text05 cursor-pointer ${
            scrollToSection === "contactUs" ? "active" : ""
          }`}
          x="150"
          y="800"
          onClick={() => scrollToTargetSection("contactUs")}
        >
          Contact Us
        </text>
      </svg>
    </div>
  );
};

export default Scroll;
