import React from "react";
import {
  Box,
  Flex,
  Link,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { GiSkills, GiNotebook } from "react-icons/gi";
import { BsFillInfoSquareFill } from "react-icons/bs";

import Resume from "../Resume/RSaiKiran_fp04_437.pdf";

const NavBar = ({ isDark, toggleColorMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={isDark ? "#070707" : "#76263f"}
        // px={4}
        px={{base:"1rem",md:"3rem",}}
        position="fixed"
        width="100%"
        zIndex="10"
        color={"white"}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Link href="#home" style={{ textDecoration: "none" }}>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                R SAI KIRAN
              </Text>
            </Link>
          </Box>
          <Flex alignItems="center">
            <IconButton
              size="md"
              variant="solid"
              isRound={true}
              // colorScheme={isDark ? "yellow" : "black"}
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              aria-label="Toggle Theme"
              onClick={toggleColorMode}
              mr={2}
              display={{ lg: "none" }}
            />
            <IconButton
              size="md"
              variant="outline"
              icon={isOpen ? <CloseIcon  /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ lg: "none" }}
              onClick={onOpen}
            />
          </Flex>
          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", lg: "flex" }}
          >
            <NavLink1 href="#home" icon={<ImHome />} label="Home" />
            <NavLink1 href="#about" icon={<BsFillInfoSquareFill />} label="About" />
            <NavLink1 href="#skills" icon={<GiSkills />} label="Skills" />
            <NavLink1
              href="#projects"
              icon={<AiOutlineFundProjectionScreen />}
              label="Projects"
            />
            <NavLink1 href="#contact" icon={<MdContacts />} label="Contact" />
            <Link href={Resume} download>
              <Flex
                align="center"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11uSzLrKAIq_4as4gkrAAxi_nPxgtU1S3/view?usp=sharing"
                  )
                }
              >
                <GiNotebook />
                <Text ml={2}>Resume</Text>
              </Flex>
            </Link>
            <IconButton
              size="md"
              isRound={true}
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              aria-label="Toggle Theme"
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            style={{ width: "60%" }}
            bg={isDark ? "black" : "#76263f"}
            color={"white"}
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack as="nav" spacing={4}>
                <NavLink
                  href="#home"
                  icon={<ImHome />}
                  label="Home"
                  onClose={onClose}
                />
                <NavLink
                  href="#about"
                  icon={<FcAbout />}
                  label="About"
                  onClose={onClose}
                />
                <NavLink
                  href="#skills"
                  icon={<GiSkills />}
                  label="Skills"
                  onClose={onClose}
                />
                <NavLink
                  href="#projects"
                  icon={<AiOutlineFundProjectionScreen />}
                  onClose={onClose}
                  label="Projects"
                />
                <NavLink
                  href="#contact"
                  icon={<MdContacts />}
                  label="Contact"
                  onClose={onClose}
                />
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "white",
                    color: "#76263f",
                  }}
                  border={"1px solid white"}
                
                  borderRadius={"50px"}
                  href={Resume}
                  download
                >
                  <Flex
                    align="center"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/11uSzLrKAIq_4as4gkrAAxi_nPxgtU1S3/view?usp=sharing"
                      )
                    }
                  >
                    <GiNotebook />
                    <Text ml={2}>Resume</Text>
                  </Flex>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const NavLink = ({ href, icon, label, onClose }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "white",
      color: "#76263f",
    }}
    href={href}
    border={"1px solid white"}
    borderRadius={"50px"}
  >
    <Flex align="center" onClick={onClose}>
      {icon}
      <Text ml={2}>{label}</Text>
    </Flex>
  </Link>
);

const NavLink1 = ({ href, icon, label, onClose }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    // _hover={{
    //   textDecoration: "none",
    //   bg: "white",
    //   color: "#76263f",
    // }}
    href={href}
  >
    <Flex align="center" onClick={onClose}>
      {icon}
      <Text ml={2}>{label}</Text>
    </Flex>
  </Link>
);

export default NavBar;
