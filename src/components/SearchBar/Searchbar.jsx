import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Input, Text } from "@chakra-ui/react";
import SearchResults from "./SearchResults";
import useDebounce from "../../hooks/useDebounceHook";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleFetchResults = () => {
    setLoading(true);
    fetch(
      `https://omdbapi.com/?s=${value}&page=1&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setShowResult(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };
  useEffect(() => {
    let delayDebounceFn;
    if (value && !loading) {
      setMovies([]);
      delayDebounceFn = setTimeout(() => {
        setSearching(true);
        setTimeout(() => {
          handleFetchResults();
        }, 100);
      }, 500);
    } else {
      setLoading(false);
      setSearching(false);
    }
    return () => clearTimeout(delayDebounceFn);
  }, [value]);
  useEffect(() => {
    !showResult && setValue("");
  }, [showResult]);

  return (
    <Box>
      <Box></Box>
      <Text mb="8px">Search</Text>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      {showResult && (
        <SearchResults
          movies={movies}
          setShowResult={setShowResult}
          showResult={showResult}
        />
      )}
    </Box>
  );
};

export default Searchbar;
