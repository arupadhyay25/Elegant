import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export const SizeButton = ({ text }) => {
  let [size, setsize] = useState(true);
  let handlesize = () => {
    setsize(!size);
  };
  return (
    <Button
      onClick={handlesize}
      size="sm"
      colorScheme={size ? "blackAlpha" : "teal"}
      variant={size ? "outline" : "solid"}
    >
      {text}
    </Button>
  );
};
