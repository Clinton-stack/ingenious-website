

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar, A11y, Pagination, Navigation, EffectFlip, Autoplay, EffectCube } from 'swiper/modules';

import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";




const Slider = () => {

       
    const section4 = {
        bgImage: "url(products-file.png)",
        h: "100vh",
        bgSize: "100% 100%",
        alignItems: "center",
        overflow: "",
      };
      const section4Context = {
        textAlign: "left",
        p: { base: "10px", md: "50px", lg: "200px" },
        overflow: "auto",
      };

    const slider1 = ()=>{
return(
<Flex sx={section4} position="relative">
    <VStack sx={section4Context} spacing="40px">
      <Heading fontSize="2vw" color="#73D0FF">
        Introducing Assets Management Service (AMS) - Simplify and Enhance
        Your Asset Management
      </Heading>
      <Text>
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
      </Text>

      <Button
        borderRadius="40px"
        variant="outline"
        borderColor="#0191E3"
        style={{ marginLeft: "auto" }}
      >
        Learn More
      </Button>

      <Image
        src="/asset-buildings.png"
        w="300px"
        position="absolute"
        top="55%"
        right="70%"
        zIndex={-1}
      />
    </VStack>
  </Flex>

)
    }  
    
 
    
  return (
    <Swiper
      className="MySwiper"
      modules={[Autoplay, Pagination, Navigation, EffectCube]}
      spaceBetween={1}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      effect="cube"
      grabCursor={true}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>{slider1()}</SwiperSlide>
      <SwiperSlide>{slider1()}</SwiperSlide>
      <SwiperSlide>{slider1()}</SwiperSlide>
    </Swiper>

  );
};

export default Slider;
