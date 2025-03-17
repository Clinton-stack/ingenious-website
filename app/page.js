
import {
  Box,
  Heading,
} from "@chakra-ui/react";

import Slider from "../components/Slider";
import Particlebg from "@/utils/Particlebg";
import ScrollUpButton from "@/components/ScrollToUpButton";
import Companies from "@/components/Companies";
import ContactUs from "@/components/ContactUs";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Timeline from "@/components/Timeline/Timeline";
import Logo from "@/components/Header/Logo";
import BlinkingIcon from "@/components/BlinkingIcon";
import ServiceList from "@/components/ServiceList";
import AboutUs from "@/components/AboutUs";


export default function Home() {


  const section5 = {
    bgGradient:
      "linear-gradient(180deg, rgba(27, 82, 140, 0.40) 0%, rgba(27, 82, 140, 0.00) 100%);",

    borderRadius: "40px",
    h: "",
    bgSize: "100% 100%",
    alignItems: "center",
    overflow: "",
    zIndex: 1000,
  };


  const footer = {
    bgGradient:
      "linear-gradient(180deg, rgba(27, 82, 140, 0.40) 0%, rgba(27, 82, 140, 0.00) 100%);",
  };
  return (
    <>
      <main className="max-w-full md:px-20 px:10 overflow-x-hidden  bg-[#0E315D] max-w-screen">
        <div>
          {/* Header */}
          <Logo />
          <BlinkingIcon />
          <Timeline />
          {/* <AboutUs /> */}
          <Box id="aboutUs" className="relative w-full">
            <AboutUs />
          </Box>
          {/* services */}

          <Box id="services" py={10} textAlign="center">
            <Heading
              className="  text-xl lg:text-2xl"
              textAlign="center"
              color="#73D0FF"
              mb="40px"
            >
              Services
            </Heading>
            <ServiceList />
          </Box>

          {/* Product and Solutions */}               
          <Box id="productSolution" py={10} w="100%">
            <Heading
              className="  text-xl lg:text-2xl"
              textAlign="center"
              color="#73D0FF"
              mb="40px"
            >
              Products and Solutions
            </Heading>
            <Slider />
          </Box>
        </div>

        <div id="client&partners" className="mb-10 overflow-hidden">
        <Heading
              className="  text-xl lg:text-2xl"
              textAlign="center"
              color="#73D0FF"
              mb="40px"
            >
              Clients and Partners
            </Heading>
          <Companies />
        </div>

        <Box id="contactUs" sx={section5}>
          <Heading
            className="  text-xl lg:text-2xl"
            color="#73D0FF"
            mb="40px"
            textAlign="center"
            pt="20px"
          >
            Get In Touch With US
          </Heading>
          <ContactUs />
        </Box>
        <ScrollUpButton />
        <footer sx={footer}>
          <div className="text-center my-10 py-4  max-w-[300px] mx-auto  text-white">
            &copy; {new Date().getFullYear()} Ingenious Technology. All Rights
            Reserved.
          </div>
          <div className="flex justify-center my-4">
            <a
              href={socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="mx-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                size={24}
              />
            </a>
            <a
              href={socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="mx-2 text-pink-500 hover:text-pink-700 cursor-pointer"
                size={24}
              />
            </a>
            <a
              href={socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="mx-2 text-blue-700 hover:text-blue-900 cursor-pointer"
                size={24}
              />
            </a>
            <a
              href={socialMedia.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosCall
                className="mx-2 text-white hover:text-blue-800 cursor-pointer"
                size={24}
              />
            </a>
            <a
              href={socialMedia.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail
                className="mx-2 text-white hover:text-blue-700 cursor-pointer"
                size={24}
              />
            </a>
          </div>
        </footer>
        <Particlebg />
      </main>

    </>
  );
}

const socialMedia = {
  twitter: "https://x.com/IngeniousTech__?t=TmT0ianuNPUgN1C1Nve4eA&s=09",
  instagram: "https://instagram.com/ingenioustech__?igshid=MmVlMjlkMTBhMg==",
  linkedin: "https://www.linkedin.com/company/ingenioustechnology/",
  phone: "tel:+2348072210260",
  email: "mailto:ingenioustechltd@gmail.com",
};
