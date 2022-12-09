import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import banner from "../assets/images/bannerImg.png";
import Searchbar from "../components/SearchBar/Searchbar";
import MovieCard from "../components/MovieCard/MovieCard";
import { moviesData } from "../data/data";
let BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;

const HomePage = () => {
  const [movies, setMovies] = useState(moviesData);
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTablet] = useMediaQuery("(max-width: 800px)");
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Box>
      <Navbar />
      <Box position="relative">
        <img src={banner} />
        <Flex
          position="absolute"
          top={0}
          h="100%"
          justifyContent={isTablet ? "center" : "flex-start"}
          alignItems={"center"}
          margin="auto"
          width={isTablet ? "100%" : "40%"}
          pl={!isMobile ? "50px" : null}
        >
          <Text
            color="brand.white"
            fontSize={isMobile ? "25px" : isTablet ? "50px" : "60px"}
            fontWeight="600"
            textAlign={isTablet ? "center" : "left"}
          >
            Watch <br /> Something
            <br /> Incredible.
          </Text>
        </Flex>
      </Box>
      <Box width="90%" m="auto" py="50px">
        <Searchbar />

        <Box>
          <Box
            overflow="scroll"
            marginTop={"30px"}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Text>{"{movie Category name}"}</Text>
            <Flex
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              flexWrap={isTablet ? "wrap" : undefined}
            >
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie._id} />
              ))}
            </Flex>
          </Box>
          <Box
            marginTop={"30px"}
            overflow="scroll"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Text>{"{movie Category name}"}</Text>
            <Flex
              flexWrap={isTablet ? "wrap" : undefined}
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie._id} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
