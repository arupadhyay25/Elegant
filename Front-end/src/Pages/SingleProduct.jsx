import { ArrowForwardIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Like } from "../Components/Like";
import "./SingleProduct.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Icon } from "@chakra-ui/react";
import { SizeButton } from "../Components/SizeButton";

export const SingleProduct = () => {
  let [like, setlike] = useState(false);

  let product = {
    id: 1,
    name: "Men's Black Son of White Fang Graphic Printed Oversized T-shirt",
    image:
      "https://images.bewakoof.com/t640/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg",
    price: 499,
    discount_price: 1299,
    offer: "459For TriBe Members",
    category: "T-shirt",
    rating: 2,
    brand: "tyga",
  };
  let handlelike = () => {
    setlike(!like);
  };

  return (
    <div className="Single-Product">
      <div className="Single-Product-left">
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="Single-Product-right">
        <Text fontWeight="extrabold">{product.brand.toUpperCase()}</Text>
        <Text>{product.name}</Text>
        <Button size="xs">
          <StarIcon color="rgb(255,164,28)" />
          &nbsp;&nbsp;{product.rating + 2.2}
        </Button>
        <div className="single-product-inline-price">
          <Text fontWeight="extrabold" fontSize="xl">
            ₹&nbsp;{product.price}
          </Text>
          <Text as="s" fontSize="small">
            ₹&nbsp;{product.discount_price}
          </Text>
          <Text color="green">
            {Math.abs(
              Math.ceil((product.price / product.discount_price) * 100 - 100)
            )}
            &nbsp;% OFF
          </Text>
        </div>
        <Text size="xs" fontSize="x-small" mb={3}>
          inclusive of all taxes
        </Text>
        <div>
          <Button
            variant="solid"
            size="xs"
            fontSize="x-small"
            colorScheme="blackAlpha"
          >
            DIGITAL PRINT
          </Button>{" "}
          <Button variant="outline" fontSize="x-small" size="xs">
            DESIGN OF THE WEEK
          </Button>
        </div>
        <div style={{ marginTop: "10px", marginBottom: "5px" }}>
          <hr />
          <Text fontSize="xs">
            TriBe members get an extra discount of ₹50 and FREE shipping.{" "}
            <Text as="u" color="teal">
              Learn more
            </Text>
          </Text>
          <hr />
        </div>
        <div className="single-product-inline-other">
          <div>
            <Text fontSize="smaller" fontWeight="bold" color="teal">
              SELECT SIZE
            </Text>
          </div>
          <div>
            <Text fontSize="smaller" fontWeight="bold" color="teal">
              Size Guide
            </Text>
          </div>
        </div>
        <Stack w="100%" direction="row" spacing={3} mt={2}>
          <SizeButton text="3XL" />
          <SizeButton text="4XL" />
          <SizeButton text="5XL" />
        </Stack>
        <br />
        <div>
          <Stack w="100%" direction="row" spacing={4}>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="yellow"
              variant="solid"
              size="sm"
            >
              ADD TO BAG
            </Button>
            <Button
              size="sm"
              onClick={handlelike}
              leftIcon={
                <span>
                  {like ? (
                    <Icon fontSize={22} as={FcLike} />
                  ) : (
                    <Icon fontSize={20} as={FcLikePlaceholder} />
                  )}
                </span>
              }
              colorScheme={like ? "gray" : "blackAlpha"}
              variant="solid"
            >
              <Text>{like ? "WISHLISTED" : "WISHLIST"}</Text>
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
