"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCube } from "swiper/modules";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import CustomModal from "./Modal";
import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductandSolution from "./ProductandSolution";
import IngeniousPayment from "./IngeniousPayment";
import { useEffect } from "react";
import OtherProductAndSolution from "./OtherProductAndSolution";
import IngeniousStudio from "./IngeniousStudio";

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [ingeniousPayment, setIngeniousPayment] = useState(false);
  const [ingeniousStudio, setIngeniousStudio] = useState(false);
  const [otherProduct, setOtherProduct] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openIngeniousStudio = () => {
    setIngeniousStudio(true);
  };

  const closeIngeniousStudio = () => {
    setIngeniousStudio(false);
  };

  const openPaymentModal = () => {
    setIngeniousPayment(true);
  };

  const closePaymentModal = () => {
    setIngeniousPayment(false);
  };

  const openProductModal = () => {
    setProductModal(true);
  };

  const closeProductModal = () => {
    setProductModal(false);
  };

  const closeOtherModal = () => {
    setOtherProduct(false);
  };

  const section4 = {
    bgImage: "url(products-file.png)",
    bgSize: "100% 100%",

    overflow: "",
    "@media (max-width: 768px)": {
      bgImage: "none",
    },
  };
  const section4Context = {
    p: { base: "0px", md: "50px", lg: "200px" },
    overflow: "auto",
  };

  const slider1 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
            Ingenious Assets Management Service (AMS)
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Simplify and Enhance Your Asset Management
          </p>
          <div className=" ">
            In the ever-evolving landscape of asset management, effective
            coordination and streamlined processes are essential for business
            growth and success.However, managing assets across various
            departments and ensuring seamless communication can often be
            challenging, resulting in inefficiencies and underperformance.
            <br />
            <br />
            Enter Assets Management Service (AMS) - a centralized solution
            designed to address these hurdles and revolutionize the way assets
            are managed. AMS offers a comprehensive and strategic approach to
            asset management, benefiting both business owners and asset
            management firms alike.
            <br /> With AMS, you can effortlessly oversee and optimize a wide
            range of assets, from housing estates and schools to shopping malls,
            gyms, and real estates.
          </div>

          <Image
            className=" md:block hidden"
            src="/psams.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="60%"
            zIndex={-1}
          />
          {/* <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            onClick={openProductModal}
          >
            Learn More
          </Button> */}
          {/* <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={["80%", "auto"]}
            mx={["auto", "0"]}
            px={["20px", "30px"]}
            onClick={openProductModal}
          >
            Learn More
          </Button> */}
          <button
            onClick={openProductModal}
            className={`block px-[20px] md:px-[30px] py-2 mx-auto  text-white transition duration-300 border border-[#0191E3] rounded-[40px] 
                `}
          >
            Learn More
          </button>
        </VStack>

        <ProductModal isVisible={productModal} onClose={closeProductModal}>
          <ProductandSolution close={closeProductModal} />
        </ProductModal>
      </Flex>
    );
  };
  const slider2 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
            Ingenious Payment
          </Heading>

          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Your Gateway to Global Transactions
          </p>

          <div className=" ">
            IngeniousPayment is not just a payment gateway; it's a financial
            ecosystem designed to empower individuals and businesses in Nigeria
            and beyond. <br /> <br /> With the ability to transact globally in
            multiple currencies, collaboration with reputable banks,
            lightning-fast speed, and the convenience of integration with your
            AMS, IngeniousPayment is revolutionizing the way you do business.
            Say goodbye to the limitations of traditional Nigerian payment
            gateways and wallets. <br /> <br />
            Embrace the future of finance with IngeniousPayment and experience a
            new era of seamless and secure global transactions. Join us today
            and unlock the world of possibilities that IngeniousPayment brings
            to your fingertips.
            <br />
          </div>

          <Image
            className=" md:block hidden"
            src="/pspay.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="60%"
            zIndex={-1}
          />
          <button
            onClick={openPaymentModal}
            className={`block px-[20px] md:px-[30px] py-2 mx-auto  text-white transition duration-300 border border-[#0191E3] rounded-[40px] 
                `}
          >
            Learn More
          </button>
        </VStack>
        <ProductModal isVisible={ingeniousPayment} onClose={closePaymentModal}>
          <IngeniousPayment close={closePaymentModal} />
        </ProductModal>
      </Flex>
    );
  };

  const slider3 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
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
            education. <br /> <br /> With Africa's economic challenges in mind,
            EduCollabo Africa offers affordable online learning solutions,
            scholarships, and a marketplace for educational resources. By
            collaborating with AMS, it streamlines asset management for
            educational institutions, ensuring that resources are optimally
            utilized. <br /> <br /> Join us in EduCollabo Africa and be a part
            of a brighter future for Africa.
          </p>

          <Image
            className=" md:block hidden"
            src="/psedu.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="57%"
            zIndex={-1}
          />
          {/* <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            onClick={openOtherModal}
          >
            Learn More
          </Button> */}
        </VStack>
        <ProductModal isVisible={otherProduct} onClose={closeOtherModal}>
          <OtherProductAndSolution close={closeOtherModal} />
        </ProductModal>
      </Flex>
    );
  };
  const slider4 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
            Ingenious MedTech
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Revolutionizing Healthcare Access
          </p>

          <ul>
            <li>
              As Nigeria and Africa grapple with healthcare disparities,
              Ingenious MedTech steps up to offer equitable healthcare access.{" "}
              Our telemedicine and healthtech ecosystem connects patients,
              healthcare providers, and pharmacies. <br /> <br />
              With a focus on affordability and convenience, Ingenious MedTech
              ensures everyone can access quality healthcare, no matter where
              they are. Collaborating with IngeniousPayment, Ingenious MedTech
              offers secure payment solutions for medical services and
              prescriptions. <br /> <br />
              Join us in Ingenious MedTech and be a part of a healthier Africa.
            </li>
          </ul>

          <Image
            className=" md:block hidden"
            src="/psmed.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="57%"
            zIndex={-1}
          />
          {/* <Button
            borderRadius="40px"
            variant="outline"
            borderColor="#0191E3"
            color="white"
            width={{
              md: "auto",
            }}
            paddingX={{ base: "20px", md: "30px" }}
            onClick={openOtherModal}
          >
            Learn More
          </Button> */}
        </VStack>
        <ProductModal isVisible={otherProduct} onClose={closeOtherModal}>
          <OtherProductAndSolution close={closeOtherModal} />
        </ProductModal>
      </Flex>
    );
  };
  const slider5 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
            Ingenious AgriWave
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Transforming Agriculture for Sustainable Growth.
          </p>

          <ul>
            <li>
              With an eye on Africa's agricultural potential, Ingenious AgriWave
              reimagines the farming landscape. This innovative agtech solution
              empowers farmers with data-driven insights, weather forecasts, and
              market access, fostering sustainable agriculture.
              <br /> <br /> In a time when food security is paramount, Ingenious
              AgriWave collaborates with AMS to optimize asset management for
              farm equipment and infrastructure, ensuring efficient and
              productive farming operations. <br /> <br /> Join us in Ingenious
              AgriWave and be a part of a more sustainable Africa
            </li>
          </ul>

          <Image
            className=" md:block hidden"
            src="/psagric.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="57%"
            zIndex={-1}
          />
        </VStack>
        <ProductModal isVisible={otherProduct} onClose={closeOtherModal}>
          <OtherProductAndSolution close={closeOtherModal} />
        </ProductModal>
      </Flex>
    );
  };
  const slider6 = () => {
    return (
      <Flex
        sx={section4}
        position="relative"
        className=" flex-col flex items-center "
      >
        <VStack sx={section4Context} spacing="20px">
          <Heading
            fontSize={{ base: "6vw", md: "2vw" }}
            className=" "
            color="#73D0FF"
          >
            Studio Eté
          </Heading>
          <p
            fontSize={{ base: "4vw", md: "4vw" }}
            className=" text-white  md:px-10  "
          >
            Redefining Artistry in the Digital Era.
          </p>

          <ul>
            <li>
              Step into Studio Eté, where technology and creativity converge to
              redefine the landscape of artistic expression. Powered by
              Ingenious Technology, this revolutionary platform transcends
              traditional boundaries, providing a global haven for artists,
              writers, woodworkers, and clay artists to collaborate, create, and
              showcase their masterpieces.
              <br /> <br />
              Studio Eté isn't just a platform; it's a revolutionary ecosystem
              shaping the future of art and creativity in the digital age. Join
              us in redefining artistic expression through the seamless
              integration of technology and imagination.
            </li>
          </ul>

          <Image
            className=" md:block hidden"
            src="/psams.png"
            w="350px"
            position="absolute"
            bottom="10%"
            opacity="35%"
            right="57%"
            zIndex={-1}
          />
          <button
            onClick={openIngeniousStudio}
            className={`block px-[20px] md:px-[30px] py-2 mx-auto  text-white transition duration-300 border border-[#0191E3] rounded-[40px] 
                `}
          >
            Learn More
          </button>
        </VStack>

        <ProductModal
          isVisible={ingeniousStudio}
          onClose={closeIngeniousStudio}
        >
          <IngeniousStudio close={closeIngeniousStudio} />
        </ProductModal>
      </Flex>
    );
  };

  return (
    <Swiper
      className="MySwiper"
      modules={[Autoplay, Pagination, Navigation, EffectCube]}
      spaceBetween={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      grabCursor={true}
      slidesPerView={1}
      navigation
      pagination={isLargeScreen ? { clickable: true } : false}
      scrollbar={{ draggable: true }}
    >
      <div>
        <SwiperSlide key="slide1">{slider1()}</SwiperSlide>
      </div>
      <div>
        <SwiperSlide key="slide2">{slider2()}</SwiperSlide>
      </div>
      <div>
        <SwiperSlide key="slide3">{slider3()}</SwiperSlide>
      </div>
      <div>
        <SwiperSlide key="slide4">{slider4()}</SwiperSlide>
      </div>
      <div>
        <SwiperSlide key="slide5">{slider5()}</SwiperSlide>
      </div>
      <SwiperSlide key="slide6">{slider6()}</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
