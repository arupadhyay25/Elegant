import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Offers(props) {
  return (
    <div>
      <Flex
        flexDirection={"column"}
        px="10%"
        py="1%"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          fontSize={"48px"}
          fontFamily="HelveticaNeue-Bold"
          fontWeight="bold"
        >
          Bewakoof Offers
        </Text>
        <Text color={"rgba(0,0,0,0.9)"} fontWeight="600" fontSize={"20px"}>
          Find the best offers across our platforms on this page.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap="10px" w="80%" m="auto">
        <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-desktop-1440---x-150---tribe-1625739880.png" />
        <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-desktop-1440---x-150---prep10-1625739466.png" />
        <Image src="https://images.bewakoof.com/uploads/grid/app/thin-strip-banner-desktop-freecharge-1664523917.png" />
      </Flex>
    </div>
  );
}

export default Offers;
