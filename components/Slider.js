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
import { slides } from "@/data/slideData";

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
  const {
    isOpen: isIplugOpen,
    onOpen: onIplugOpen,
    onClose: onIplugClose,
  } = useDisclosure();
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

  return (
    <>
      <Swiper
        className="MySwiper"
        style={{width: "100%", overflow: "hidden"}}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        slidesPerView={1}
        navigation={isLargeScreen || isMediumScreen}
        pagination={{ clickable: isLargeScreen || isMediumScreen }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Flex
              bgImage={{
                base: "none",
                md: "url(products-file.png)",
              }}
              bgSize="100% 100%"
              position="relative"
              alignItems="center"
              flexDir="column"
              justify="center"
            >
              <VStack
                textAlign="left"
                p={{ base: "20px", md: "90px", lg: "110px" }}
                w="100%"
                pt="0px"
                spacing="20px"
              >
                <Heading fontSize="20px" color="#73D0FF" textAlign="center">
                  {slide.title}
                </Heading>
                <Text
                  fontSize="15px"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                >
                  {slide.subtitle}
                </Text>
                <Text color="white" whiteSpace="pre-line">
                  {slide.description}
                </Text>

                {slide.image && (
                  <Image
                    src={slide.image}
                    w={{ md: "200px", lg: "350px" }}
                    position="absolute"
                    top={{ md: "65%", lg: "60%" }}
                    right="60%"
                    opacity="0.45"
                    zIndex={-1}
                    display={{ base: "none", md: "block" }}
                  />
                )}

                {slide.modalKey && (
                  <Box w="100%" display="flex" justifyContent="flex-end">
                    <Button
                      borderRadius="40px"
                      variant="outline"
                      borderColor="#0191E3"
                      color="white"
                      onClick={() => {
                        switch (slide.modalKey) {
                          case "ams":
                            return onAmsModalOpen();
                          case "payment":
                            return onPaymentModalOpen();
                          case "studioEte":
                            return onStudioEteOpen();
                          case "iplug":
                            return onIplugOpen();
                        }
                      }}
                      _hover={{ bg: "#0191E3", color: "white" }}
                    >
                      Learn More
                    </Button>
                  </Box>
                )}
              </VStack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modals rendered once only */}
      <AmsModal isOpen={isAmsModalOpen} onClose={onAmsModalClose} />
      <IngeniousPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={onPaymentModalClose}
      />
      <StudioEte isOpen={isStudioEteOpen} onClose={onStudioEteClose} />
      <Iplug isOpen={isIplugOpen} onClose={onIplugClose} />
    </>
  );
};

export default Slider;
