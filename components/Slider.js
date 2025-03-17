"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Scrollbar,
  A11y,
  Pagination,
  Navigation,
  EffectFlip,
  Autoplay,
  EffectCube,
} from "swiper/modules";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import {
  AmsModal,
  IngeniousPaymentModal,
  Iplug,
  StudioEte,
} from "./ModalProductsandSolutions";

const Slider = () => {
  const {
    isOpen: isAmsModalOpen,
    onOpen: onAmsModalOpen,
    onClose: onAmsModalClose,
  } = useDisclosure();
  const {
    isOpen: isPaymentModalOpen,
    onOpen: onPaymentModalOpen,
    onClose: onPaymentModalClose,
  } = useDisclosure();
  const {
    isOpen: isStudioEteOpen,
    onOpen: onStudioEteOpen,
    onClose: onStudioEteClose,
  } = useDisclosure();
  const {isOpen: isIplugOpen, onOpen: onIplugOpen, onClose: onIplugClose} = useDisclosure();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsLargeScreen(screenWidth >= 1024); // Example: Large screen width threshold
      setIsMediumScreen(screenWidth >= 768 && screenWidth < 1024); // Example: Medium screen width threshold
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const section4 = {
    bgImage: "url(products-file.png)",
    bgSize: "100% 100%",
    alignItems: "center",

    overflow: "",
    "@media (max-width: 768px)": {
      bgImage: "none",
    },
  };
  const section4Context = {
    textAlign: "left",
    p: { base: "0px", md: "50px", lg: "200px" },
    overflow: "auto",
  };

  const slider1 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading fontSize={{ base: "6vw", md: "2vw" }} color="#73D0FF">
            Ingenious Assets Management Service (AMS)
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10"
          >
            Simplify and Enhance Your Asset Management
          </p>
          <p>
            In the ever-evolving landscape of asset management, effective
            coordination and streamlined processes are essential for business
            growth and success. However, managing assets across various
            departments and ensuring seamless communication can often be
            challenging, resulting in inefficiencies and underperformance.
            <br />
            <br />
            Enter Assets Management Service (AMS) - a centralized solution
            designed to address these hurdles and revolutionize the way assets
            are managed. AMS offers a comprehensive and strategic approach to
            asset management, benefiting both business owners and asset
            management firms alike. With AMS, you can effortlessly oversee and
            optimize a wide range of assets, from housing estates and schools to
            shopping malls, gyms, and real estates.
          </p>

          <Image
            className=" md:block hidden"
            src="/psams.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
          <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            marginLeft="auto"
            onClick={onAmsModalOpen}
            _hover={{ bg: "#0191E3", color: "white" }}
          >
            Learn More
          </Button>
        </VStack>
        <AmsModal isOpen={isAmsModalOpen} onClose={onAmsModalClose} />
      </Flex>
    );
  };
  const slider2 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            Ingenious Payment
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Your Gateway to Global Transactions
          </p>
          <p>
            IngeniousPayment is not just a payment gateway; it's a financial
            ecosystem designed to empower individuals and businesses in Nigeria
            and beyond. With the ability to transact globally in multiple
            currencies, collaboration with reputable banks, lightning-fast
            speed, and the convenience of integration with your AMS,
            IngeniousPayment is revolutionizing the way you do business.
            <br />
            <br />
            Say goodbye to the limitations of traditional Nigerian payment
            gateways and wallets. Embrace the future of finance with
            IngeniousPayment and experience a new era of seamless and secure
            global transactions. Join us today and unlock the world of
            possibilities that IngeniousPayment brings to your fingertips.
          </p>

          <Image
            className=" md:block hidden"
            src="/pspay.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
          <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            marginLeft="auto"
            onClick={onPaymentModalOpen}
            _hover={{ bg: "#0191E3", color: "white" }}
          >
            Learn More
          </Button>
        </VStack>
        <IngeniousPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={onPaymentModalClose}
        />
      </Flex>
    );
  };
  const slider3 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            EduCollabo Africa
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Bridging the Education Divide.
          </p>

          <p>
            In a time where quality education is a precious commodity,
            EduCollabo Africa emerges as our beacon of hope. This visionary
            platform connects students, educators, and institutions,
            transcending geographical boundaries to ensure access to world-class
            education.
            <br />
            <br />
            With Africa's economic challenges in mind, EduCollabo Africa offers
            affordable online learning solutions, scholarships, and a
            marketplace for educational resources. By collaborating with AMS, it
            streamlines asset management for educational institutions, ensuring
            that resources are optimally utilized.
            <br />
            <br />
            Join us in EduCollabo Africa and be a part of a brighter future for
            Africa.
          </p>
          <Image
            className=" md:block hidden"
            src="/psedu.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
        </VStack>
      </Flex>
    );
  };

  const slider4 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            Ingenious MedTech
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Revolutionizing Healthcare Access
          </p>
          <p>
            As Nigeria and Africa grapple with healthcare disparities, Ingenious
            MedTech steps up to offer equitable healthcare access. Our
            telemedicine and healthtech ecosystem connects patients, healthcare
            providers, and pharmacies.
            <br />
            <br />
            With a focus on affordability and convenience, Ingenious MedTech
            ensures everyone can access quality healthcare, no matter where they
            are. Collaborating with IngeniousPayment, Ingenious MedTech offers
            secure payment solutions for medical services and prescriptions.
            <br />
            <br />
            Join us in Ingenious MedTech and be a part of a healthier Africa.
          </p>
          <Image
            className=" md:block hidden"
            src="/psmed.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
        </VStack>
      </Flex>
    );
  };

  const slider5 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            Ingenious AgriWave
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Transforming Agriculture for Sustainable Growth.
          </p>

          <p>
            With an eye on Africa's agricultural potential, Ingenious AgriWave
            reimagines the farming landscape. This innovative agtech solution
            empowers farmers with data-driven insights, weather forecasts, and
            market access, fostering sustainable agriculture.
            <br />
            <br />
            In a time when food security is paramount, Ingenious AgriWave
            collaborates with AMS to optimize asset management for farm
            equipment and infrastructure, ensuring efficient and productive
            farming operations.
            <br />
            <br />
            Join us in Ingenious AgriWave and be a part of a more sustainable
            Africa
          </p>

          <Image
            className=" md:block hidden"
            src="/psagric.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
        </VStack>
      </Flex>
    );
  };

  const slider6 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            Studio Eté
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Redefining Artistry in the Digital Era.
          </p>
          <p>
            Step into Studio Eté, where technology and creativity converge to
            redefine the landscape of artistic expression. Powered by Ingenious
            Technology, this revolutionary platform transcends traditional
            boundaries, providing a global haven for artists, writers,
            woodworkers, and clay artists to collaborate, create, and showcase
            their masterpieces.
            <br /> <br />
            Studio Eté isn't just a platform; it's a revolutionary ecosystem
            shaping the future of art and creativity in the digital age. Join us
            in redefining artistic expression through the seamless integration
            of technology and imagination.
          </p>

          <Image
            className=" md:block hidden"
            src="/studioete.svg"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
          <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            marginLeft="auto"
            onClick={onStudioEteOpen}
            _hover={{ bg: "#0191E3", color: "white" }}
          >
            Learn More
          </Button>
        </VStack>
        <StudioEte isOpen={isStudioEteOpen} onClose={onStudioEteClose} />
      </Flex>
    );
  };

  const slider7 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center justify-center"
      >
        <VStack sx={section4Context} spacing="20px" textAlign={"center"}>
          <Heading fontSize={{ base: "4vw", md: "2vw" }} color="#73D0FF">
            Ingenious Plug
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Seamlessly Connecting Service Providers with Those in Need.
          </p>
          <p>
            Ingenious Plug (IPlug) is a cutting-edge digital platform that
            connects individuals and businesses with skilled professionals
            across various fields, from hands-on services like auto repair and
            cleaning to technical areas like software development and data
            analysis.
            <br /> <br />
            With a focus on trust and transparency, IPlug fosters a secure
            ecosystem for seamless collaboration. Integrated with Ingenious Pay
            (IPay), it ensures smooth and secure financial transactions between
            users. Prioritizing security and professional integrity, IPlug
            empowers service seekers and providers to connect with confidence
            and efficiency, revolutionizing the way services are accessed and
            delivered.
          </p>

          <Image
            className=" md:block hidden"
            src="/plugimage.png"
            w={{ md: "200px", lg: "350px" }}
            position="absolute"
            top={{ md: "65%", lg: "60%" }}
            right="60%"
            opacity="45%"
            zIndex={-1}
          />
          <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            marginLeft="auto"
            onClick={onIplugOpen}
            _hover={{ bg: "#0191E3", color: "white" }}
          >
            Learn More
          </Button>
        </VStack>
        <Iplug isOpen={isIplugOpen} onClose={onIplugClose} />
      </Flex>
    );
  };

  return (
    <Swiper
      className="MySwiper"
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      navigation={isLargeScreen || isMediumScreen ? true : false}
      pagination={
        isLargeScreen || isMediumScreen
          ? { clickable: true }
          : { clickable: false }
      }
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>{slider1()}</SwiperSlide>
      <SwiperSlide>{slider2()}</SwiperSlide>
      <SwiperSlide>{slider3()}</SwiperSlide>
      <SwiperSlide>{slider4()}</SwiperSlide>
      <SwiperSlide>{slider5()}</SwiperSlide>
      <SwiperSlide>{slider6()}</SwiperSlide>
      <SwiperSlide>{slider7()}</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
