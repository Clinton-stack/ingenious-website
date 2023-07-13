import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Slider from "./components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainContainer = {
    bgImage: "url(background-new.png)",
    bgSize: "100% 100%",
    bgRepeat: "no-repeat",
    
  };

  const section1 = {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    h: "100vh",
  };

  const section2 = {
    bgImage: "url(be-spoke.png)",
    h: "100VH",
    bgSize: "100% 100%",
    alignItems: "center",
    overflow: "hidden",
  };

  const section2Context = {
    spacing: "20px",
    alignItems: "left",
    p: { base: "10px", md: "50px", lg: "100px" },
    overflow: "auto",
  };

  const section3 = {
    bgImage: "url(about-us-1.png)",
    h: "",
    bgSize: "100%, 100%",
    bgRepeat: "no-repeat",
    bgPos: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const services = {
    bgImage: "url(file-1.png)",
    bgSize: "100% 100%",
    bgRepeat: "no-repeat",
    bgPos: "center",
    w: "650px",
    h: "450px",
    p: "20",
    _hover: { bgImage: "url(file-3.png)" },
  };


  const section5 = {
    bgGradient: "linear(to-b,  rgb(27,82,125), transparent)",
    borderRadius: "40px",
    h: "",
    bgSize: "100% 100%",
    alignItems: "center",
    overflow: "",
  };
  const contact_fields = {
    borderRadius: "50px",
    borderColor: "#149BE7",
    mb: "7",
  };
  return (
    <>
      <Head>
        <title>Ingenious Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container  sx={mainContainer} maxW='100%' px='50px' py='9'>
        <Flex sx={section1} textAlign="center">
          <Image src="/ingenious-1.svg" alt="INGENIOUS" w="40vw"></Image>
        </Flex>
        <Flex sx={section2}>
          <VStack sx={section2Context}>
            <Heading fontSize="4vw" color="#73D0FF">
              Bespoke solutions for your unique business needs
            </Heading>
            <Text>
              We partner with entrepreneurs, businesses, and organizations to
              produce impressive results.
            </Text>
            <HStack justifyContent="right">
              <Button
                borderRadius="40px"
                bgGradient="linear(to-tr, #0092E3, #86D1FC)"
              >
                Try for free
              </Button>
              <Button
                borderRadius="40px"
                variant="outline"
                borderColor="#0191E3"
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Flex>
        <Box sx={section3}>
          <VStack direction="column">
            <Box w="400px" alignSelf="flex-end">
              <Image src="/team.png" alt="Team inage" w="25vw"></Image>
              <Text fontSize="1vw">
                Our team of experienced professionals has a deep understanding
                of the latest trends and technologies in the industry. We work
                closely with our clients to develop customized strategies and
                solutions that are tailored to their specific needs and goals.
                Whether you're a small business looking to streamline your
                operations, or a large enterprise seeking to modernize your IT
                infrastructure, we have the skills and experience to deliver
                results.
              </Text>
            </Box>
            <VStack w="500px" flex="1" textAlign="center" alignItems="center">
              <Image src="/ingenious.png" alt="INGENIOUS" w="25vw"></Image>
              <Text fontSize="1vw">
                Ingenious Technology is a full-service technology solutions
                provider, delivering a wide range of services to help businesses
                thrive in today's fast-paced digital world. From IT consulting
                and managed services to software development and cybersecurity,
                we offer the expertise and resources to support our clients'
                technology needs at every stage of their business journey.
              </Text>
            </VStack>
            <Box alignSelf="flex-start" w="400px">
              <Image src="/laptop.png" alt="INGENIOUS" w="25vw"></Image>
              <Text fontSize="1vw">
                At Ingenious Technology, we believe that technology should be a
                strategic asset, not a burden. That's why we focus on delivering
                solutions that are both effective and affordable, so our clients
                can stay competitive and achieve their business objectives. We
                pride ourselves on our ability to deliver quality work on time
                and within budget, while providing exceptional customer service
                and support.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box py={10} textAlign="center">
          <Heading fontSize="4vw" color="#73D0FF" mb="40px">
            Services
          </Heading>
          <Wrap spacing="20px" justify="center" pos="relative">
            <Flex sx={services}>
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/itservices.png"
                    alt="IT consulting"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    IT consulting and strategy development
                  </Text>
                </HStack>
                <Text>
                  We work closely with clients to understand their business
                  objectives and develop a technology strategy to support those
                  goals. An IT consultant may provide guidance on infrastructure
                  design, system optimization, software selection, and more.
                </Text>
              </VStack>
            </Flex>
            <Flex sx={services} pos="relative" top="40px">
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/cloud.png"
                    alt="IT consulting"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    Cloud migration and management
                  </Text>
                </HStack>
                <Text>
                  We help businesses move their IT systems and applications to
                  the cloud by assessing a company's existing infrastructure,
                  selecting the right cloud provider and services, and migrating
                  data and applications to the cloud. We also provide ongoing
                  management and support for cloud-based systems, ensuring
                  optimal performance, security, and scalability.
                </Text>
              </VStack>
            </Flex>
            <Flex sx={services}>
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/managed.png"
                    alt="Managed IT services"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    Managed IT service
                  </Text>
                </HStack>
                <Text>
                  These services include ongoing monitoring and management of a
                  company's IT infrastructure, including servers, networks,
                  cctv, unified communications and devices. Managed IT services
                  providers typically offer help desk support, disaster recovery
                  services, and cloud solutions.
                </Text>
              </VStack>
            </Flex>
            <Flex sx={services} pos="relative" top="40px">
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/software.png"
                    alt="Software development"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    Custom software development and application integration
                  </Text>
                </HStack>
                <Text>
                  We create customized software solutions to meet a company's
                  specific needs. This may include building new applications,
                  integrating existing systems, or developing mobile apps.
                </Text>
              </VStack>
            </Flex>
            <Flex sx={services}>
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/data.png"
                    alt="Data Analysis"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    Data analytics and business intelligence
                  </Text>
                </HStack>
                <Text>
                  This service involves leveraging data to gain insights and
                  inform business decisions. This may include designing and
                  implementing data warehouses, creating dashboards and reports,
                  and conducting data analysis to identify trends and patterns.
                </Text>
              </VStack>
            </Flex>
            <Flex sx={services} pos="relative" top="40px" zIndex={1}>
              <VStack alignItems="left" textAlign="left" spacing="50px">
                <HStack spacing="100px">
                  <Image
                    src="/cyber.png"
                    alt="Cyber Security"
                    w="50px"
                    h="50px"
                  ></Image>
                  <Text color="#73D0FF" fontWeight="Bold">
                    Cybersecurity services
                  </Text>
                </HStack>
                <Text>
                  We help clients protect their systems, data, and networks from
                  cyber threats. This may include conducting security risk
                  assessments, implementing firewalls and intrusion detection
                  systems, and providing ongoing threat monitoring and response.
                </Text>
              </VStack>
            </Flex>
          </Wrap>
        </Box>
        <Box py={10} textAlign='center' w='100%'>
          <Heading fontSize="4vw" color="#73D0FF" mb="40px">
            Products and Services
          </Heading>
          <Slider/>
        </Box>
        <Box sx={section5}>
          <Heading
            fontSize="4vw"
            color="#73D0FF"
            mb="40px"
            textAlign="center"
            mt="20px"
          >
            Get In Touch With US
          </Heading>
          <form>
            <FormControl pl="90px" pr='90px' spacing="7">
              <FormLabel>Full Name</FormLabel>
              <Input type="text" sx={contact_fields} size="sm" />
              <FormLabel>Email</FormLabel>
              <Input type="email" sx={contact_fields} size="sm" />
              <FormLabel>Phone no.</FormLabel>
              <Input type="tel" sx={contact_fields} size="sm" />
              <FormLabel>
                What product or service do you want to contact us?
              </FormLabel>
              <Select
                borderRadius="50px"
                mb="7"
                size="sm"
                borderColor="#149BE7"
              >
                <option>Ingenious AMS</option>
                <option>Nature's Buddy Smart Pot (Coming Soon)</option>
                <option>Hospital Managment System</option>
                <option>EMS</option>
              </Select>
              <FormLabel>
                Are you registering onbehalf of a business or as an individual?
              </FormLabel>
              <Select
                borderRadius="50px"
                mb="7"
                size="sm"
                borderColor="#149BE7"
              >
                <option>YES</option>
                <option>NO</option>
              </Select>
              <FormLabel>
                What type of business do you want to have with Ingenious AMS?
              </FormLabel>
              <Select
                borderRadius="50px"
                mb="7"
                size="sm"
                borderColor="#149BE7"
              >
                <option>
                  Asset Manager (Description: You own or the Asset manager of
                  the Asset)
                </option>
                <option>
                  Facility Manager (Description: You manager or the company you
                  work for manages an Asset)
                </option>
                <option>
                  Collaborator (Description: You are a service provider that
                  wants to integrate with Ingenious ).
                </option>
              </Select>
              <FormLabel>
                What type of Assets do you want to onboard into Ingenious AMS
                (With a unit counter in front of each Assets)?
              </FormLabel>
              <Select
                borderRadius="50px"
                mb="7"
                size="sm"
                borderColor="#149BE7"
              >
                <option>Real Estate</option>
                <option>Hotel</option>
                <option>Mall</option>
                <option>Warehouse</option>

              </Select>
              <FormLabel>
                What is your preferred means of communication?
              </FormLabel>
              <Select
                borderRadius="50px"
                mb="7"
                size="sm"
                borderColor="#149BE7"
              >
                <option>Email</option>
                <option>Phone call</option>
              </Select>
            </FormControl>
          </form>
        </Box>
      </Container>
    </>
  );
}
