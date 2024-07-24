import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Image,
  Link,
  Text,
  VStack,
  Heading,
  HStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Projects({ isDark }) {
  const [showP2, setShowP2] = useState(false);
  const bg = useColorModeValue("#fadecd", "#131313");
  const hoverBorderColor = useColorModeValue("#76263f", "#caf229");

  const projects = [
    {
      image: [
        "https://i.postimg.cc/tRB0kScm/Screenshot-2024-02-07-164014.png",
        "https://camo.githubusercontent.com/a5028d28006738cba921f70e8327f0f939ca0de15fec91fce2285b788187f996/68747470733a2f2f692e696d6775722e636f6d2f394e66754f32312e706e6720",
        "https://camo.githubusercontent.com/b18f8d72ef175e4cc669819ecedb922453a0f2fd13619ac15de181fe0e04bb78/68747470733a2f2f692e696d6775722e636f6d2f616167346d56362e706e6720",
        "https://camo.githubusercontent.com/a0768fac224722ce841e7320888cd1104edb99aefa21279c34359686e1b362ac/68747470733a2f2f692e696d6775722e636f6d2f4e53316538744c2e706e6720",
        "https://camo.githubusercontent.com/05cccf61ba0815ae3561775af0b542258724e908f1155541e6ae489a05cd5640/68747470733a2f2f692e696d6775722e636f6d2f475450507768372e706e67",
        "https://camo.githubusercontent.com/d96028058f04c65ebfc337157f8b5e8e13a374259b2dc87bc65f208261a8dc97/68747470733a2f2f692e696d6775722e636f6d2f6366674f3268672e6a7067",
      ],
      name: "Purplle.com",
      desc: "Explore our premier beauty products website, offering a curated selection of skincare, makeup, haircare, and fragrances. From cult-favorite brands to emerging trends, find everything you need to elevate your beauty routine. With user-friendly navigation and secure transactions, indulge in a seamless shopping experience that brings luxury",
      techStack: "React | ChakraUI | MongoDB",
      github: "https://github.com/Rsaikiran92/Purplle.com-Clone",
      demo: "https://snazzy-cranachan-14966f.netlify.app/",
    },
    {
      image: [
        "https://github.com/Rsaikiran92/Rsaikiran92.github.io/blob/main/my-app/src/Components/Project/images/Screenshot_20230123_105732.png?raw=true",
      ],
      name: "bestbuy.com",
      desc: "Discover top-notch tech and more at BestBuy. Unbeatable prices, expert advice, and convenient shopping await. Upgrade your home with the latest electronics and appliances today.",
      techStack: "React | ChakraUI | Router",
      github: "https://github.com/Durgesh9871/Siliconix",
      demo: "https://siliconix.netlify.app/",
    },
    {
      image: [
        "https://github.com/priyankfz7/Shop_Karo_Clone/raw/master/frontend/src/images/Screenshot_20230123_122112.png?raw=true",
      ],
      name: "Paytmmall.com",
      desc: "Your go-to destination for trendy clothing for men and women. Browse our curated selection of stylish apparel and accessories, offering the latest fashion trends at affordable prices. Elevate your wardrobe with ease and shop confidently at Shop Karo.com.",
      techStack: "HTML | CSS | Javascript",
      github: "https://github.com/Rsaikiran92/Shop_Karo_Clone",
      demo: "https://cw-5.vercel.app/",
    },
  ];
  const projects2 = [];

  return (
    <Box bg={bg}  id="projects" p={{ base: "4rem 1rem", "2xl": "4rem 7rem" }} >
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "2.5rem", md: "3.5rem" }}
        mb="41px"
        color={isDark ? "#caf229" : "#76263f"}
      >
        My Projects
      </Heading>
      <VStack spacing="50px">
        {projects.map((item) => (
          <Flex
            key={item.name}
            w={{ base: "100%", md: "100%" }}
            bg={isDark ? "#1f1f1f" : "#76263f"}
            border={isDark && "3px solid #292929"}
            borderRadius="20px"
            p="20px"
            align="center"
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            transition="0.5s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              border: `3px solid ${hoverBorderColor}`,
            }}
          >
            <Image
              src={item.image[0]}
              alt={item.name}
              w={{ base: "100%", md: "521px" }}
              borderRadius="20px"
            />
            <Box ml={{ base: "0", md: "50px" }} mt={{ base: "10px", md: "0" }}>
              <Heading as="h3" color={isDark ? "white" : "#dd9a05"} mb="20px">
                {item.name} Clone
              </Heading>
              <Text  color={isDark?"#a4a4a4":"white"} fontSize="18px" mb="15px" textAlign="justify">
                {item.desc}
              </Text>
              <Text color={isDark?"#a4a4a4":"white"} fontSize="19px" mb="30px">
                <Text as="b" color={isDark ? "white" : "#dd9a05"} >
                  Tech Stack:{" "}
                </Text>
                {item.techStack}
              </Text>
              <HStack spacing="30px">
                <Button
                  as={Link}
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                  // bg={isDark ? "#caf229" : "#fadecd"}
                  // color={isDark ? "Black" : "#76263f"}
                  // border="1px solid #76263f"
                  borderRadius="7px"
                  style={{textDecoration:"none"}}
                  _hover={isDark?{ backgroundColor: "#caf229" ,color:"black"}:{backgroundColor:"#f9decd",color:"black"}}
                >
                  Demo
                </Button>
                <Button
                  as={Link}
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:"none"}}
                  _hover={isDark?{ backgroundColor: "#caf229" ,color:"black"}:{backgroundColor:"#f9decd",color:"black"}}
                  // bg={isDark ? "#caf229" : "#fadecd"}
                  // color={isDark ? "Black" : "#76263f"}
                  // border="1px solid #76263f"
                  borderRadius="7px"
                  
                >
                  Github
                </Button>
              </HStack>
            </Box>
          </Flex>
        ))}

        {showP2 &&
          projects2.map((item) => (
            <Flex
              key={item.name}
              w={{ base: "100%", md: "80%" }}
              bg="#76263f"
              border="1px solid #76263f"
              borderRadius="20px"
              p="10px"
              align="center"
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              transition="0.5s ease-in-out"
              _hover={{ transform: "scale(1.03)" }}
            >
              <Image
                src={item.image[0]}
                alt={item.name}
                w={{ base: "100%", md: "521px" }}
                borderRadius="20px"
              />
              <Box
                ml={{ base: "0", md: "50px" }}
                mt={{ base: "10px", md: "0" }}
              >
                <Heading as="h3" color="#dd9a05" mb="20px">
                  {item.name} Clone
                </Heading>
                <Text
                  color="white"
                  fontSize="18px"
                  mb="15px"
                  textAlign="justify"
                >
                  {item.desc}
                </Text>
                <Text color="white" fontSize="19px" mb="30px">
                  <Text as="span" color="#dd9a05">
                    Tech Stack:{" "}
                  </Text>
                  {item.techStack}
                </Text>
                <HStack spacing="30px">
                  <Button
                    as={Link}
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#fadecd"
                    color="#76263f"
                    border="1px solid #76263f"
                    borderRadius="7px"
                    _hover={{ bg: "#76263f", color: "white" }}
                  >
                    Demo
                  </Button>
                  <Button
                    as={Link}
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#fadecd"
                    color="#76263f"
                    border="1px solid #76263f"
                    borderRadius="7px"
                    _hover={{ bg: "#76263f", color: "white" }}
                  >
                    Github
                  </Button>
                </HStack>
              </Box>
            </Flex>
          ))}

        {/* <button
          className={`live atag`}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick={() => setShowP2(!showP2)}
        >
          {showP2 ? "Show Less" : "Show More"}
        </button> */}
      </VStack>
    </Box>
  );
}
