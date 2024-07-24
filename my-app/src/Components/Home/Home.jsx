import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { ImFolderDownload } from "react-icons/im";
import Resume from "../Resume/RSaiKiran_fp04_437.pdf";

import { keyframes } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

function Home({ isDark }) {
  return (
    <Box className="home" bg={isDark ? "#131313" : "#fadecd"} id="home" >
      <Flex
        direction="column"
        align="center"
        justify="center"
        // minH="100vh"
        p={{ base: "6rem 1rem 0rem 1rem", "2xl": "10rem 7rem 1rem 10rem" }}
        pt={{ base: "10rem" }}
      
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          w="full"
      
        >
          <VStack
            spacing={4}
            align="left"
            w={{ base: "full", md: "60%" }}
            textAlign="left"
           
          >
            <Heading as="h1" size="xl" textShadow="2px 2px 5px #76263f">
              Hello,{" "}
              <Box
                as="span"
                className="wave"
                role="img"
                aria-labelledby="wave"
                animation={`${waveAnimation} 2.1s infinite`}
              >
                👋🏻
              </Box>
              i’m
            </Heading>

            <Heading as="h2" size="3xl" className="heading-name">
              <Text as="span" color={isDark ? "#caf229" : "#76263f"}>
                R Sai Kiran
              </Text>
            </Heading>

            <Text
              fontSize="2xl"
              textAlign="justify"
              textShadow="2px 2px 5px #76263f"
            >
              Full Stack Web Developer
            </Text>

            <Button
              as={Link}
              href={Resume}
              download
              width={"200px"}
              bg={isDark ? "#caf229" : "white"}
              color={isDark ? "Black" : "#76263f"}
              fontWeight="bold"
              leftIcon={<ImFolderDownload />}
              _hover={{ bg: "#f0e6e6" }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/11uSzLrKAIq_4as4gkrAAxi_nPxgtU1S3/view?usp=sharing"
                )
              }
            >
              Resume
            </Button>

            <HStack spacing="15px" mb="20px">
              <Link href="https://github.com/Rsaikiran92" isExternal>
                <IconButton
                  icon={<IoLogoGithub />}
                  fontSize="20px"
                  borderRadius={"50%"}
                  bg={isDark ? "#252525" : "white"}
                  _hover={
                    isDark
                      ? { backgroundColor: "#caf229", color: "black" }
                      : { backgroundColor: "#76263f", color: "white" }
                  }
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/r-sai-kiran-451a07232/"
                isExternal
              >
                <IconButton
                  icon={<TiSocialLinkedin />}
                  fontSize="20px"
                  borderRadius={"50%"}
                  bg={isDark ? "#252525" : "white"}
                  _hover={
                    isDark
                      ? { backgroundColor: "#caf229", color: "black" }
                      : { backgroundColor: "#76263f", color: "white" }
                  }
                />
              </Link>
            </HStack>
          </VStack>

          <Box w={{ base: "full", md: "40%" }} p={{ base: 4, md: 0 }} >
            <Image
              src="https://i.postimg.cc/65d0K18Q/Whats-App-Image-2024-02-27-at-4-57-05-PM-removebg-preview.png"
              alt="home pic"
              className="img-fluid"
              borderRadius="20px"
              maxH="450px"
              mx="auto"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Home;
