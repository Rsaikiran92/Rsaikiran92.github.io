import React from "react";
import { Box, Heading, Text, Image, Flex, useColorModeValue } from "@chakra-ui/react";

export const educationData = [
  {
    id: 1,
    institution: "Masai School, Bengaluru",
    course: "MERN Stack",
    startYear: "2022",
    endYear: "2022",
  },
  {
    id: 2,
    institution: "Trident Academy of Creative Technology, Bhubaneswar",
    course: "Bachelor of Computer Application",
    startYear: "2018",
    endYear: "2021",
  },
  {
    id: 3,
    institution: "MP & EV English Medium School",
    course: "Board of intermediate school (C.B.S.E)",
    startYear: "2016",
    endYear: "2018",
  },
];

function About({ isDark }) {
  const bg = useColorModeValue("#fadecd", "#131313");

  return (
    <Box id="about" bg={bg}   p={{base:"4rem 1rem" , "2xl":"4rem 7rem 0px 4rem" }} pb={"0px"} >
      <Flex direction="column" align="center" justify="center" mb={12} >
        <Box
          position="absolute"
          top={12}
          width="85%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box bg="#76263f" borderRadius="50%" w={2} h={2} />
          <Box bg="#76263f" borderRadius="50%" w={2} h={2} />
          <Box bg="#76263f" h={1} flex={1} />
        </Box>

        <Box textAlign="center"  mb={8}>
          <Heading fontSize={{base:"2rem",md:"3.5rem"}} color={isDark?"#caf229":"#76263f"}  mb={4}>About Me</Heading>
          <Text fontSize="1.35rem" textShadow="2px 2px 5px #76263f" fontWeight="700" color="white" textAlign={"justify"}>
            Experience Full Stack Web Developer with Proficiency in HTML, CSS, JavaScript, React, and Redux with intuitive problem-solving skills. Passionate about developing and deploying MERN-based projects, both in collaboration and independently. With the ability to understand business requirements and translate them into technical solutions.
          </Text>
        </Box>
      </Flex>

      <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" justify="center" mb={4}>
        <Box flex="0.65" >
          <Heading fontSize={{base:"2rem",md:"3.5rem"}} mb={8} color={isDark?"#caf229":"#76263f"} >Experience</Heading>
          <Box p={6} bg={isDark?"#1f1f1f":"#76263f"} border={isDark&&"3px solid #292929"} borderRadius="20px" boxShadow="md" mb={6} color="white" >
            <Text fontSize="1.1rem" fontWeight="700"  mb={4}>
              Homepreneur Solutions Private Limited, Bengaluru
            </Text>
            <Text fontSize="1.1rem" fontWeight="700"  mb={4}>
              Application specialist | July 2023 - Jan 2024
            </Text>
            <Text fontSize="18px"  mb={4} color={isDark?"#a4a4a4":"white"}>
              ➡️ Developed and maintained Group Tool, a React.js and HTML-based application for group management, send message, scheduling group lock, and message scheduling. Collaborated with backend team, designed UI, and ensured seamless functionality.
            </Text>
            <Text fontSize="18px" color={isDark?"#a4a4a4":"white"}>
              ➡️ Engineered bots for cab booking, customer support, and e-commerce, streamlining operations and enhancing user experience. Implemented efficient ticket-raising systems and seamless clothing ordering, optimizing client interaction and service delivery.
            </Text>
          </Box>
        </Box>
        <Box flex="0.35" p={4}>
          <Image src="https://i.postimg.cc/PfQwwPrF/Time-Management-1400-1024x987-removebg-preview.png" alt="Time Management" />
        </Box>
      </Flex>

      <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" justify="center" >
        <Box flex="0.65"  color="#76263f">
          <Heading fontSize={{base:"2rem",md:"3.5rem"}} color={isDark?"#caf229":"#76263f"} mb={8}>Education</Heading>
          {educationData.map((item) => (
            <Flex key={item.id} p={6} bg={isDark?"#1f1f1f":"#76263f"} border={isDark&&"3px solid #292929"} borderRadius="20px" boxShadow="md" mb={6} align="center" color="white">
              <Box
                borderRadius="50%"
                // bg="white"
                color={"black"}
                // bg={isDark?"#caf229":"#76263f"}
                w={14}
                h={14}
                display="flex"
                alignItems="center"
                // justifyContent="center"
                mr={4}
                border="2px dotted white"
              >
                <Image src="https://raw.githubusercontent.com/abdulquadir77/abdulquadir77.github.io/92dc27bc93d3d4a35851f3c7f8388da7cb40a25b/src/assets/svg/education/eduImgWhite.svg" alt="" />
              </Box>
              <Box>
                <Text fontSize="1.1rem" fontWeight="700" mb={2} color={isDark?"#a4a4a4":"white"}>{item.startYear}-{item.endYear}</Text>
                <Text fontSize="1.225rem" fontWeight="600" mb={2}>{item.course}</Text>
                <Text fontSize="1.15rem" fontWeight="600" color={isDark?"#a4a4a4":"white"}>{item.institution}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box flex="0.35" p={4}>
          <Image src="https://blush.design/api/download?shareUri=LavBnWufRf&w=800&h=800&fm=png" alt="Education Illustration" />
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
