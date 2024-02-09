"use client";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Lottie from "lottie-react";
import LotiTeamwork from "../utils/lottiefiles/teamwork.json";
import LotiBuilding from "../utils/lottiefiles/building.json";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import Slider from "../components/Slider";
import { servicesData } from "@/components/data";
import React, { useState, useEffect } from "react";
import Particlebg from "@/utils/Particlebg";
import Scroll from "@/components/Scroll";
import { gsap, TweenMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollUpButton from "@/components/ScrollToUpButton";
import Companies from "@/components/Companies";
import ProductModal from "@/components/ProductModal";
import ProductandSolution from "@/components/ProductandSolution";
import ContactUs from "@/components/ContactUs";
import Loader from "@/components/Loader/Loader";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger,  MotionPathPlugin);

const inter = Inter({ subsets: ["latin"] });

const style = {
  height: 900,
  marginRight: 300,
};

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [indicatorShown, setIndicatorShown] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const [productModal, setProductModal] = useState(false);
  const [loader, setLoader] = useState(true);

  const closeProductModal = () => {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const delayToShowScroll = setTimeout(() => {
      setIndicatorShown(true);
    }, 9000);

    return () => {
      clearTimeout(delayToShowScroll);
    };
  }, []);

  useEffect(() => {
    function calculateTranslateY(scrollY) {
      const maxTranslateY = 50;
      const speedFactor = 0.9;
      const translateY = Math.min(scrollY * speedFactor, maxTranslateY);
      return translateY;
    }

    const handleScroll = () => {
      const translateY = calculateTranslateY(window.scrollY);

      if (window.scrollY <= 0) {
        if (userHasScrolled) {
          TweenMax.to(".scroll-animation", {
            y: -60,
            duration: 2,
            ease: Power2.easeInOut,
          });

          setIndicatorShown(false);
          setShowScroll(false);
          setUserHasScrolled(false);
        }
      } else {
        gsap.to(".scroll-animation", {
          y: -translateY,
          duration: 0.9,
        });
        setIndicatorShown(true);
        setShowScroll(true);
        setUserHasScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userHasScrolled]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isScrolled) {
      setIndicatorShown(false);
      gsap.to(".scroll-animation", { translateY: 0, duration: 0.5 });
    }
  }, [isScrolled]);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  if (loader) {
    return <Loader />;
  }

  const section2 = {
    bgImage: "url(be-spoke.png)",
    // h: { base: "70vh", md: "100vh" },
    bgSize: "100% 50%",
    bgRepeat: "no-repeat",
    bgPosition: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const section2Context = {
    spacing: "20px",
    p: { base: "10px", sm: "20px", md: "50px", lg: "50px" },

    overflow: "auto",
  };

  const section3 = {
    bgImage: "url(about-us-1.png)",
    h: "",
    bgSize: "100%, 100%",
    bgRepeat: "no-repeat",
    bgPos: "center",

    alignItems: "center",
    overflow: "",
  };

  const services = {
    bgImage: "url(file-1.png)",
    bgSize: "100% 100%",
    bgRepeat: "no-repeat",
    bgPos: "center",
    w: "650px",
    h: "450px",
    p: { base: "15", sm: "20", md: "15", lg: "20" },
    pt: { base: "20", sm: "20", md: "15", lg: "20" },
    _hover: { bgImage: "url(file-3.png)" },
  };

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
  const contact_fields = {
    borderRadius: "50px",
    borderColor: "#149BE7",
    mb: "7",
  };

  const footer = {
    bgGradient:
      "linear-gradient(180deg, rgba(27, 82, 140, 0.40) 0%, rgba(27, 82, 140, 0.00) 100%);",
  };
  return (
    <>
      <Head>
        <title>Ingenious Technologies</title>
        <meta name="description" content="Generated by create next app" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full md:px-20 px:10 overflow-x-hidden  bg-[#0E315D] max-w-screen">
        <div>
          <div
            className={` flex flex-col mt-20 items-center justify-center  h-[100vh] ${
              isScrolled ? "pt-5" : "mt-10"
            }`}
          >
            <div className="scroll-animation">
              <Image
                src="/ingenious-1.png"
                className="md:w-[75%] w-[80%] xl:w-[85%]  items-center mx-auto md:mt-10"
                alt="INGENIOUS"
              />
            </div>
            {indicatorShown && !userHasScrolled && (
              <Image
                src="/indicator.png"
                className="pt-10 mx-auto w-[10%] lg:w-[2%] animate-bounce"
                alt="indicator"
              />
            )}

            {showScroll && <Scroll />}
          </div>
          {/* <AboutUs /> */}
          <Box id="aboutUs" className="relative w-full">
            <div className=" flex items-center justify-center mx-auto">
              <Image
                src="/indicator.png"
                className="md:pt-10 mx-auto w-[10%] lg:w-[2%]  animate-bounce"
                alt="indicator"
              />
            </div>
            <div className="flex flex-col md:flex-row relative">
              
                <div
                  className=" hidden  lg:flex justify-center p-[20px] items-center md:mt-[250px] relative md:mb-[200px]  md:h-[450px]"
                  style={{
                    backgroundImage: 'url("/about-us-1.png")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className=" md:max-w-[30%] text-center">
                    Ingenious Technology is a full-service technology solutions
                    provider, delivering a wide range of services to help
                    businesses thrive in today's fast-paced digital world. From
                    IT consulting and managed services to software development
                    and cybersecurity, we offer the expertise and resources to
                    support our clients' technology needs at every stage of
                    their business journey.
                  </div>
                </div>
              <div className=" lg:hidden bottom-0 left-0 pt-10 px-[20px]">
              
                  <Lottie
                    animationData={LotiTeamwork}
                    loop={true}
                    className=" w-[50%] md:w-[50%] pb-5"
                  />
                  <div className="flex items-center justify-center max-w-sm text-center lg:text-sm">
                    Ingenious Technology is a full-service technology solutions
                    provider, delivering a wide range of services to help
                    businesses thrive in today's fast-paced digital world. From
                    IT consulting and managed services to software development
                    and cybersecurity, we offer the expertise and resources to
                    support our clients' technology needs at every stage of
                    their business journey.
                  </div>
              </div>
              <div className=" lg:absolute bottom-0 left-0 px-[20px]">
                  <Lottie
                    animationData={LotiBuilding}
                    loop={true}
                    className=" w-[50%] md:w-[50%] pb-5"
                  />
                  <div className=" flex items-center justify-center max-w-sm text-center lg:text-sm">
                    At Ingenious Technology, we believe that technology should
                    be a strategic asset, not a burden. That's why we focus on
                    delivering solutions that are both effective and affordable,
                    so our clients can stay competitive and achieve their
                    business objectives. We pride ourselves on our ability to
                    deliver quality work on time and within budget, while
                    providing exceptional customer service and support.
                  </div>
              </div>

              <div className=" lg:absolute top-0 right-0 p-[20px]">
                  <Lottie
                    animationData={LotiTeamwork}
                    loop={true}
                    className=" w-[50%] md:w-[50%] pb-5"
                  />
                  <div className="flex items-center  justify-center max-w-[340px] text-center lg:text-sm">
                    Our team of experienced professionals has a deep
                    understanding of the latest trends and technologies in the
                    industry. We work closely with our clients to develop
                    customized strategies and solutions that are tailored to
                    their specific needs and goals. Whether you're a small
                    business looking to streamline your operations, or a large
                    enterprise seeking to modernize your IT infrastructure, we
                    have the skills and experience to deliver results.
                  </div>
              </div>
            </div>
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

            <Wrap spacing="20px" justify="center" pos="relative" wrap="wrap">
              {servicesData.map((service) => (
                <Flex
                  key={service.title}
                  sx={{
                    bgImage: "url(file-1.png)",
                    bgSize: "100% 100%",
                    bgRepeat: "no-repeat",
                    bgPos: "center",
                    w: ["auto", "650px", "500px"],
                    h: ["auto", "300", "auto"],
                    p: { base: "15", sm: "20", md: "15", lg: "8" },
                    mx: "5px",
                    pt: { base: "5", sm: "20", md: "15", lg: "20" },
                    _hover: { bgImage: "url(file-3.png)" },
                  }}
                >
                  <VStack
                    alignItems="left"
                    textAlign="left"
                    top="40px"
                    spacing="50px"
                  ></VStack>
                  <VStack
                    alignItems="left"
                    textAlign="left"
                    top="40px"
                    spacing="20px"
                  >
                    <Flex
                      justifyContent="space-around"
                      alignItems="center"
                      pt="3"
                      px={["1px", "3px"]}
                      spacing={["10px", "20px"]}
                    >
                        <Image
                          src={service.imageSrc}
                          alt={service.title}
                          w={["40px", "50px"]}
                          h={["40px", "50px"]}
                        />
                        <Text
                          color="#73D0FF"
                          fontWeight="bold"
                          fontSize={["lg", "xl"]}
                          alignSelf={"center"}
                          marginTop={5}
                          textAlign="center"
                          mx="auto"
                        >
                          {service.title}
                        </Text>
                    </Flex>
                      <Text paddingX={[2, 7]} fontSize={["sm", "md"]}>
                        {service.description}
                      </Text>
                  </VStack>
                </Flex>
              ))}
            </Wrap>
          </Box>

          <div className=" flex items-center justify-center mx-auto">
            <Image
              src="/indicator.png"
              className="pt-10 mx-auto w-[10%] lg:w-[2%] animate-bounce"
              alt="indicator"
            />
          </div>
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

        <div id="client&parterns" className="mb-10">
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
                href={socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="mx-2 text-white hover:text-gray-800 cursor-pointer"
                  size={24}
                />
              </a>
              <a
                href={socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  className="mx-2 text-black hover:text-gray-700 cursor-pointer"
                  size={24}
                />
              </a>
              {/* Add more icons and corresponding links if needed */}
            </div>
          </footer>
        <Particlebg />
      </main>

      <ProductModal isVisible={productModal} onClose={closeProductModal}>
        <ProductandSolution close={closeProductModal} />
      </ProductModal>
    </>
  );
}

const socialMedia = {
  twitter: "https://x.com/IngeniousTech__?t=TmT0ianuNPUgN1C1Nve4eA&s=09",
  instagram: "https://instagram.com/ingenioustech__?igshid=MmVlMjlkMTBhMg==",
  linkedin: "https://www.linkedin.com/in/YourLinkedInProfile",
  github: "https://github.com/YourGitHubProfile",
  tiktok: "https://www.tiktok.com/@YourTikTokAccount",
};
