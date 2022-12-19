import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
const poster1 = [
  {
    img: "https://images.bewakoof.com/banner/women-white-plain--tshirt-1648556042.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/dress2-1608054994.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/sweater-1608055060.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/men-vests-bewakoof-1648626716.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/men-hoodies-bewakoof-1648626714.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-kurtis-bewakoof-1648626719.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/tee4-1608055331.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/dress-1599659434.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/boxer-1599659360.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/boyfriend-1599659311.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/boytee-1597258684.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Boyfriend-tee-1597258561.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/boyfrend-1597258430.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/tee-1597258300.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/green-jogger-pant-for-women-bewakoof-1587018141.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/mickey-half-sleeve-t-shirt-for-women-bewakoof-1587018143.jpg",
  },
];
const poster2 = [
  {
    img: "https://images.bewakoof.com/banner/men-jackets-bewakoof-1648626715.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/jogger2-1608055007.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-ethnic-wear-kurta-dress-bewakoof-1648626718.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/mens-t-shirts-bewakoof-1648626716.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/men-polo-t-shirts-bewakoof-1648626715.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/joggers-1608055272.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-plain-t-shirts-bewakoof-1648626719.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/sweater-1599659466.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/tees-1599659401.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/mask-1599659345.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/tee-1599659292.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Jerry-Half-Sleeve-Tee-1592320428.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/keep-smiling-disney-half-sleeve-t-shirt-for-women-1587451592.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Dress-for-Women-Bewakoof-1648624899.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/bomber-jacket-for-men-bewakoof-1587018139.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Men-Full-sleeve-Tshirt--Bewakoof-1648624899.jpg",
  },
];

const poster3 = [
  {
    img: "https://images.bewakoof.com/banner/women-dresses-Bewakoof-1648556464.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Men-Shirts-Bewakoof-1648624900.jpeg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-bf-t-shirts-bewakoof-1648626717.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-hoodies-1-bewakoof-1648626718.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-3-4-sleeve-t-shirts-bewakoof-1648626717.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-hoodie-1608055288.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/women-tops-bewakoof-1648626720.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/pyjama-1599659450.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/Mens-Shirt-Bewakoof-1648624900.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/HS-TEES-1599659328.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/HS-tee-1599657072.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/princess-women-tee-1592320392.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/glasses-printed-half-sleeve-t-shirt-for-women-1587451591.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/pehli-fursat-mein-nikal-boyfriend-t-shirts-1587017306.jpg",
  },
  {
    img: "https://images.bewakoof.com/banner/pink-puffer-jacket-for-women-bewakoof-1587018143.jpg",
  },
];
function FansPage(props) {
  return (
    <Box>
      <Box my="15px" className="fanspage-">
        <Image
          w="100%"
          src="https://images.bewakoof.com/banner/fanbook-main-banner-1649422407.jpg"
          alt="top-poster"
        />
      </Box>
      <Box my="15px">
        <Image
          w="100%"
          src="https://images.bewakoof.com/banner/fanbook-header-banner-1649422406.jpg"
          alt="second-poster"
        />
      </Box>
      <Flex w="75%" m="auto">
        <Flex flexDirection={"column"} gap={4} w="33.20%">
          {poster1.map((el) => (
            <Image w="100%" src={el.img} />
          ))}
        </Flex>
        <Flex flexDirection={"column"} gap={4} w="33.20%">
          {poster2.map((el) => (
            <Image w="100%" src={el.img} />
          ))}
        </Flex>
        <Flex flexDirection={"column"} gap={4} w="33.20%">
          {poster3.map((el) => (
            <Image w="100%" src={el.img} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export { FansPage };
