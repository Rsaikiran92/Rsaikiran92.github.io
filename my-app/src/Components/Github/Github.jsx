import React from "react";
import {
  Box,
  Heading,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import GitHubCalender from "react-github-calendar";

export default function Github({ isDark }) {
  const bg = useColorModeValue("#fadecd", "#131313");
  return (
    <Box bg={bg} p={"1rem"} pb={"4rem"}>
      <Box m="auto" w="100%">
        <Heading
          textAlign="center"
          mb="30px"
          fontSize={{ base: "2.5rem", md: "3.5rem" }}
          color={isDark ? "#caf229" : "#76263f"}
        >
          GitHub Calendar
        </Heading>
        <GitHubCalender
          username="Rsaikiran92"
          style={{ marginBottom: "30px", width: "100%", margin: "auto" }}
        />
      </Box>
      {isDark ? (
        <VStack spacing="30px"  mt={6}>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=Rsaikiran92&show_icons=true&hide=&count_private=true&title_color=caf229&text_color=000000&icon_color=caf229&bg_color=ffffff&hide_border=true&show_icons=true"
            alt="Rsaikiran92 GitHub stats"
          />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=Rsaikiran92&ring=caf229&fire=caf229&currStreakLabel=caf229"
            alt="rsaikiran92"
          />
        </VStack>
      ) : (
        <VStack spacing="30px" mt={6}>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=Rsaikiran92&show_icons=true&hide=&count_private=true&title_color=76263f&text_color=000000&icon_color=ef4444&bg_color=ffffff&hide_border=true&show_icons=true"
            alt="Rsaikiran92 GitHub stats"
          />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=Rsaikiran92&ring=76263f&fire=76263f&currStreakLabel=76263f"
            alt="rsaikiran92"
          />
        </VStack>
      )}
    </Box>
  );
}
