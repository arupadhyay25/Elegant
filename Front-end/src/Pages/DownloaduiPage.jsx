import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import "./Dui.css";

export default function DownloaduiPage(props) {
  return (
    <Box
      //   border={"1px solid red"}
      m="auto"
      px={"10%"}
      pt={["35px", "49px", "60px", "69px"]}
      pb={["60px", "80px", "113px", "153px"]}
      w="60%"
    >
      <Flex>
        <Box mt="70px" zIndex={10} w="32%">
          <Image
            w="100%"
            src="https://images.bewakoof.com/web/apps/download_app2.png"
          />
        </Box>
        <Box h="auto" w="32%">
          <Image
            ml="-50px"
            w="100%"
            src="https://images.bewakoof.com/web/apps/download_apps_30june2017.png"
          />
        </Box>
        <Box ml="-50px" p="18px" w="32%" mt="20px">
          <Flex
            flexDirection="column"
            lineHeight={"100px"}
            className="ui-heading"
            color={"#333333"}
            fontSize={["40px", "60px", "80px", "100px"]}
          >
            <Text as="cite">the </Text>
            <Text as="cite">all</Text>
            <Text as="cite">new</Text>
            <Text as="cite">app</Text>
          </Flex>
          <Box color={"#333333"} mt="60px">
            <Text
              textAlign={"left"}
              as="p"
              className="ui-heading"
              fontWeight={"bold"}
              fontSize={"26px"}
            >
              Shop on the go!
            </Text>
            <Text
              className="ui-heading"
              textAlign={"left"}
              as="p"
              fontSize={"16px"}
            >
              Bewakoof Shopping app
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent={"end"}>
        <Box
          w="50%"
          display={"flex"}
          //   border={"1px solid red"}
          justifyContent="end"
        >
          <Link
            target={"_blank"}
            href="https://apps.apple.com/in/app/bewakoof/id1100190514"
          >
            <Image w="60%" src="https://images.bewakoof.com/web/apps/ios.png" />
          </Link>
          <Link
            target={"_blank"}
            href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en&pli=1"
          >
            <Image
              w="60%"
              src="https://images.bewakoof.com/web/apps/android.png"
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
