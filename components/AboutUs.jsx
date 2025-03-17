'use client';
import Lottie from "lottie-react";
import LotiTeamwork from "../utils/lottiefiles/teamwork.json";
import LotiBuilding from "../utils/lottiefiles/building.json";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col md:flex-row relative">
        <Zoom fraction={0.5} triggerOnce={true}>
          <div
            className=" hidden  lg:flex justify-center p-[20px] items-center md:mt-[250px] relative md:mb-[200px]  md:h-[450px]"
            style={{
              backgroundImage: `url(./about-us-1.png)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className=" md:max-w-[30%] text-center">
              Ingenious Technology is a full-service technology solutions
              provider, delivering a wide range of services to help businesses
              thrive in today's fast-paced digital world. From IT consulting and
              managed services to software development and cybersecurity, we
              offer the expertise and resources to support our clients'
              technology needs at every stage of their business journey.
            </div>
          </div>
        </Zoom>
        <div className=" lg:hidden bottom-0 left-0 pt-10 px-[20px]">
          <Lottie
            animationData={LotiTeamwork}
            loop={true}
            className=" w-[50%] md:w-[50%] pb-5"
          />
          <div className="flex items-center justify-center max-w-sm text-center lg:text-sm">
            Ingenious Technology is a full-service technology solutions
            provider, delivering a wide range of services to help businesses
            thrive in today's fast-paced digital world. From IT consulting and
            managed services to software development and cybersecurity, we offer
            the expertise and resources to support our clients' technology needs
            at every stage of their business journey.
          </div>
        </div>
        <div className="lg:absolute bottom-0 left-0 px-[20px]">
          <Slide direction="left" triggerOnce={true}>
            <Lottie
              animationData={LotiBuilding}
              loop={true}
              className=" w-[50%] md:w-[50%] pb-5"
            />
            <div className=" flex items-center justify-center max-w-sm text-center lg:text-sm">
              At Ingenious Technology, we believe that technology should be a
              strategic asset, not a burden. That's why we focus on delivering
              solutions that are both effective and affordable, so our clients
              can stay competitive and achieve their business objectives. We
              pride ourselves on our ability to deliver quality work on time and
              within budget, while providing exceptional customer service and
              support.
            </div>
          </Slide>
        </div>
        <div className=" lg:absolute top-0 right-0 p-[20px]">
          <Slide direction="right" triggerOnce={true}>
            <Lottie
              animationData={LotiTeamwork}
              loop={true}
              className=" w-[50%] md:w-[50%] pb-5"
            />
            <div className="flex items-center  justify-center max-w-[340px] text-center lg:text-sm">
              Our team of experienced professionals has a deep understanding of
              the latest trends and technologies in the industry. We work
              closely with our clients to develop customized strategies and
              solutions that are tailored to their specific needs and goals.
              Whether you're a small business looking to streamline your
              operations, or a large enterprise seeking to modernize your IT
              infrastructure, we have the skills and experience to deliver
              results.
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
