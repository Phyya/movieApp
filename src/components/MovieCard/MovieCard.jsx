import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTablet] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
      bg="brand.900"
      width={isMobile ? "130px" : isTablet ? "250px" : "300px"}
      height="160px"
      margin="5px"
      justifyContent={"center"}
      alignItems="center"
      borderRadius={"12px"}
    >
      <Text color="brand.white" textAlign={"center"}>
        {movie.name}
      </Text>
    </Flex>
  );
};

export default MovieCard;
