import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Flex, Image, Select, Stack, Text } from "@chakra-ui/react";

export const SinglecartBlock = ({ product, update, setupdate }) => {
  let [quantity, setquantity] = useState(0);

  let handlesubQuant = () => {
    setquantity(quantity - 1);
  };
  let handleaddQuant = () => {
    setquantity(quantity + 1);
  };

  let handledelete = (id) => {
    const remover = (arr, id) => {
      const removableObj = arr.findIndex((obj) => obj.id === id);

      if (removableObj > -1) {
        arr.splice(removableObj, 1);
      }

      return arr;
    };
    let alldata = JSON.parse(localStorage.getItem("cart_data")) || [];
    remover(alldata, id);
    localStorage.setItem("cart_data", JSON.stringify(alldata));
    setupdate(update + 1);
  };

  return (
    <div className="Cart-Product-block">
      <div className="Cart-Product-top">
        <div className="Cart-Product-top-left">
          <Text fontSize={"xl"}>{product.name}</Text>
          <div className="Cart-product-inline-price">
            <Text fontSize={"2xl"} fontWeight="bold">
              ₹{product.price}
            </Text>
            <Text as={"s"}>₹{product.discount_price}</Text>
          </div>
          <Text color={"green"}>
            You saved ₹ {product.discount_price - product.price}!
          </Text>
          <div className="Cart-product-inline-price">
            <Select placeholder="XL" w={40}>
              <option value="option1">2XL</option>
              <option value="option2">3XL</option>
            </Select>{" "}
            &nbsp;&nbsp;
            <Button disabled={quantity == 0} onClick={handlesubQuant}>
              -
            </Button>
            <Button>{quantity}</Button>
            <Button disabled={quantity == 10} onClick={handleaddQuant}>
              +
            </Button>
          </div>
        </div>
        <div className="Cart-Product-top-right">
          <Image src={product.image} w="80%" />
        </div>
      </div>
      <div className="Cart-Product-bottom">
        <Flex gap={"5%"} ml="10%">
          <Button
            w={"30%"}
            colorScheme={"teal"}
            onClick={() => handledelete(product.id)}
          >
            Remove
          </Button>
          <Button w={"30%"} colorScheme={"teal"}>
            Add To Wishlist
          </Button>
        </Flex>
      </div>
    </div>
  );
};
