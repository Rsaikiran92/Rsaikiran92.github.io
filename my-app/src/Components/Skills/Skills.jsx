import React from "react";
import Marquee from "react-fast-marquee";
import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { skillsData, skillsData2 } from "./SkillsData";

function Skills({ isDark }) {
  const hoverBorderColor = useColorModeValue("#76263f", "#caf229");
  const skillBoxStyle = {
    // border:"3px solid #292929",
    borderRadius: "10px",
    width: "160px",
    height: "160px",
    margin: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    transition: "300ms ease-in-out",
  };

  return (
    <Box
      className="skills"
      bg={isDark ? "#131313" : "#fadecd"}
      id="skills"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="60vh"
      p={{base:"4rem 1rem" , "2xl":"4rem 7rem 0px 4rem" }}
     
    >
      <Box
        className="skillsHeader"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h2" fontSize={{base:"2rem",md:"3.5rem"}} color={isDark ? "#caf229" : "#76263f"}>
          Skills & Tools
        </Heading>
      </Box>
      <Box
        className="skillsContainer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop="3rem"
        
      >
        <Box className="skill--scroll" width="100%" margin="0 2rem" >
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <Box
                key={id}
                style={skillBoxStyle}
                bg={isDark ? "#1f1f1f" : "#fafafa"}
                border={isDark && "3px solid #292929" }
                _hover={{
                  transform: "scale(1.15)",
                  border: `3px solid ${hoverBorderColor}`,
                }}
              >
                <Image
                  src={skill.image}
                  alt={skill.skill}
                  height="50px"
                  pointerEvents="none"
                />
                <Text
                  fontSize="22px"
                  marginTop="1rem"
                  fontWeight="700"
                  textAlign="center"
                >
                  {skill.skill}
                </Text>
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
      <Box
        className="skillsContainer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop="0px"
        
      >
        <Box className="skill--scroll" width="100%" margin="0 2rem">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsData2.map((skill, id) => (
              <Box
                key={id}
                style={skillBoxStyle}
                bg={isDark ? "#1f1f1f" : "#fafafa"}
                border={isDark && "3px solid #292929" }
                _hover={{
                  transform: "scale(1.15)",
                  border: `3px solid ${hoverBorderColor}`,
                }}
              >
                <Image
                  src={skill.image}
                  alt={skill.skill}
                  height="50px"
                  pointerEvents="none"
                />
                <Text
                  fontSize="22px"
                  marginTop="1rem"
                  fontWeight="700"
                  textAlign="center"
                >
                  {skill.skill}
                </Text>
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
