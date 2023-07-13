// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "./components/Slider";

export default () => {
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
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4} bgColor='blue'>
    <GridItem colStart={2} colSpan={6}>
      {/* Content for the first item */}
      dbadsbdh
    </GridItem>
    <GridItem colSpan={2}>
      {/* Content for the second item */}
      hey
    </GridItem>
    <GridItem colSpan={2}>
      {/* Content for the third item */}
      broda
    </GridItem>
    <GridItem colSpan={2}>
      {/* Content for the fourth item */}
    </GridItem>
    {/* ... Add more GridItems as needed */}
  </Grid>
  );
};
