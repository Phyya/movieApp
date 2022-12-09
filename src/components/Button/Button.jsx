import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonComponent = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}I'm a button</Button>;
};

export default ButtonComponent;
