import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isTablet] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
      bg="brand.100"
      padding="15px"
      paddingLeft={!isTablet ? "50px !important" : undefined}
      justifyContent={isTablet ? "center" : undefined}
    >
      <Box border="1px solid white" p={2}>
        <img src={logo} width="120px" height="32px" />
      </Box>
    </Flex>
  );
};

export default Navbar;
