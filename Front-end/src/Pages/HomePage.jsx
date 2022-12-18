import { Image } from "@chakra-ui/image";
import { Center, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import AutoPlay from "./SimpleSlider";
import AutoPlay2 from "./SimpleSlider2";
import "./homepage.css"

export const HomePage = () => {
  let categories = [
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668765004.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670504700.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670504700.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg",
    },
  ];
  let categories2 = [
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-c-1670923575.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg",
    },
  ];
  return (
    <div className="home-page">
      <div className="home-page-slider">
        <AutoPlay />
      </div>
      <div className="home-page-div2">
        <Center>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg"
            alt="band"
          />
        </Center>
      </div>
      <div>
        <AutoPlay2 />
      </div>
      <div className="home-page-div2">
        <Center>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Men-1670938024.jpg"
            alt="band"
          />
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Women-1670938025.jpg"
            alt="band"
          />
        </Center>
      </div>
      <div className="home-page-div3">
        <br />
        <Center>
          <Text fontSize="3xl">CATEGORIES TO BAG</Text>
        </Center>
        <Center>
          {categories.map((e) => (
            <Image width={"90%"} src={e.image} />
          ))}
        </Center>
        <Center>
          {categories2.map((e) => (
            <Image width={"90%"} src={e.image} />
          ))}
        </Center>
      </div>
    </div>
  );
};
