import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Scroll = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01", {}, 0.2)
      .to(".ball03, .text02", {}, 0.33)
      .to(".ball04, .text03", {}, 0.46);

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
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  }, []);

  return (
    <div className="container">
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
          stroke-width="10px"
        />

        <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
        <circle className="ball ball02" r="20" cx="50" cy="200"></circle>
        <circle className="ball ball03" r="20" cx="50" cy="400"></circle>
        <circle className="ball ball04" r="20" cx="50" cy="600"></circle>

        <text className="text01" x="150" y="200">
          About Us
        </text>
        <text className="text02" x="-100" y="400">
          Services
        </text>
        <text className="text03" x="150" y="600">
          Contact Us
        </text>
      </svg>
    </div>
  );
};

export default Scroll;
