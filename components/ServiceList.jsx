'use client'
import { Flex, Image, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import { servicesData } from './data'
import { Slide } from 'react-awesome-reveal'

export default function ServiceList() {
  return (
    <div>
        <Wrap spacing="20px" justify="center" pos="relative" wrap="wrap">
              {servicesData.map((service) => (
                <Slide key={service.id}  direction={ service.id % 2 === 0 ? 'right': 'left' } triggerOnce={true}  >
                <Flex
                  sx={{
                    bgImage: "url(file-1.png)",
                    bgSize: "100% 100%",
                    bgRepeat: "no-repeat",
                    bgPos: "center",
                    w: ["auto", "650px", "500px"],
                    h: ["auto", "300", "300px"],
                    p: { base: "25", sm: "20", md: "15", lg: "8" },
                    mx: "5px",
                    pt: { base: "5", sm: "20", md: "15", lg: "" },
                    _hover: { bgImage: "url(file-3.png)" },
                  }}
                >

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
                </Slide>
              ))}
            </Wrap>
    </div>
  )
}
