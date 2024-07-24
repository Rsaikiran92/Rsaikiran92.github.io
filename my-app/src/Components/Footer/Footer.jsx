import { Box, Center, Flex, Heading, Button, IconButton } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BiUpArrow } from "react-icons/bi";

function Footer({ isDark }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Flex
        align={"center"}
        justifyContent={"center"}
        h={"100px"}
        bg={isDark ? "#070707" : "#76263f"}
        direction={"column"}
        gap={4}
      >
        <IconButton
          size="lg"
          onClick={scrollToTop}
          bg={isDark ? "#caf229" : "white"}
          mt={"-40px"}
          _hover={"none"}
          icon={<BiUpArrow color="black"/>}
        >
          
        </IconButton>
        <Heading
          fontFamily={"BestermindRegular"}
          style={{ color: "white", userSelect: "none" }}
        >
          {"<R_Sai_Kiran/>"}
        </Heading>
      </Flex>
    </>
  );
}

export default Footer;
