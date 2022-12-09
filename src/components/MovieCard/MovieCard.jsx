import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Flex
      bg="brand.900"
      width="300px"
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
