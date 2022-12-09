import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack, Divider, Flex } from "@chakra-ui/react";

const SearchResults = ({ movies, setShowResult }) => {
  return (
    <Box isOpen={movies.length} bg="brand.100" p="10px">
      <Box>
        <Box
          position="fixed"
          top={0}
          bottom={0}
          left={0}
          right={0}
          onClick={() => {
            setShowResult(false);
          }}
        />
        {movies.map((movie) => {
          return (
            <HStack
              key={movie.id}
              divider={<Divider borderColor="brand.100" />}
              marginBottom="5px"
              position={"relative"}
            >
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <img
                  src={movie.Poster}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Text
                  color="brand.white"
                  w="70%"
                  textAlign="left"
                  fontSize="sm"
                  whiteSpace={"pre-line"}
                >
                  {movie.Title.slice(0, 30)}
                </Text>
              </Flex>
              <Text color="brand.white" textAlign="right" fontSize="sm">
                {movie.Year}
              </Text>
            </HStack>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchResults;
