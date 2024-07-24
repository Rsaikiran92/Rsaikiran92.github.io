import { TiSocialLinkedin } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { ImFolderDownload } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Resume from "../Resume/RSaiKiran_fp04_437.pdf";
import {
  Box,
  Text,
  Heading,
  IconButton,
  Link,
  Highlight,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

function Contact({ isDark }) {
  const bg = useColorModeValue("#fadecd", "#131313");
  return (
    <Box id="contact" bg={bg} color="white" py="60px" >
      <Heading
        className="title"
        textAlign={"center"}
        fontSize={{ base: "2rem", md: "3.5rem" }}
        mb={8}
        color={isDark ? "#caf229" : "#76263f"}
      >
        Contact Me
      </Heading>
      <Box
        className="container"
        mx="auto"
        width={{ base: "90%", md: "80%", lg: "60%" }}
        bg={!isDark&&"#76263f"}
        borderRadius={"30px"}
        p={6}
      >
        <Text mb={4} color={isDark?"#a4a4a4":"#a4a4a4"}>Get In Touch</Text>
        <Heading mb={4}>
          Let’s{" "}
          <Text as="span" color={isDark ? "#caf229" : "white"}>
            Connect
          </Text>
        </Heading>
        <Text mb={4} color={isDark?"#a4a4a4":"#a4a4a4"} >Let's connect and explore new opportunities together.</Text>
        <Heading as='h6' size='xs' mb={2}>Personal Info</Heading>
        <Text mb="10px" color={isDark?"#a4a4a4":"#a4a4a4"}>
          <IoLocationSharp
            color={isDark ? "#caf229" : "white"}
            style={{ display: "inline", marginRight: "10px" }}
          />
          2-143, Chinna Veedhi, Kistupuram, palasa, Srikakulam,
          <Text>Andhra Pradesh - 532220</Text>
        </Text>
        <Text mb="10px" color={isDark?"#a4a4a4":"#a4a4a4"}>
          <MdEmail
            color={isDark ? "#caf229" : "white"}
            style={{ display: "inline", marginRight: "10px" }}
          />
          saikiran92rk@gmail.com
        </Text>
        <Text mb="20px" color={isDark?"#a4a4a4":"#a4a4a4"}>
          <BsTelephoneFill
            color={isDark ? "#caf229" : "white"}
            style={{ display: "inline", marginRight: "10px" }}
          />
          +91-9110321756
        </Text>
        <Heading as='h6' size='xs' mb={2}>Follow Me</Heading>
        <HStack spacing="15px" mb="20px">
          <Link href="https://github.com/Rsaikiran92" isExternal>
            <IconButton
              icon={<IoLogoGithub />}
              fontSize="20px"
              borderRadius={"50%"}
              bg={isDark?"#252525":"white"}
              _hover={isDark?{ backgroundColor: "#caf229" ,color:"black"}:{backgroundColor:"#76263f",color:"white"}}
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
              bg={isDark?"#252525":"white"}
              _hover={isDark?{ backgroundColor: "#caf229" ,color:"black"}:{backgroundColor:"#76263f",color:"white"}}
            />
          </Link>
        </HStack>
        {/* <Link href={Resume} download isExternal>
          <Button
            leftIcon={<ImFolderDownload />}
            color="#76263f"
            bg="white"
            fontWeight="bold"
            _hover={{ bg: "gray.200" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/11uSzLrKAIq_4as4gkrAAxi_nPxgtU1S3/view?usp=sharing"
              )
            }
          >
            Resume
          </Button>
        </Link> */}
      </Box>
    </Box>
  );
}

export default Contact;
