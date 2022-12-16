import { CalendarIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Box, Button, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { SinglecartBlock } from "../Components/SinglecartBlock";
import "./Cart.css";
let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
};

export const Cart = () => {
  let product = [
    {
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
    },
    {
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
    },
  ];
  // let product = JSON.parse(localStorage.getItem("Productid")) || {
  //   id: 1,
  //   name: "Men's Black Son of White Fang Graphic Printed Oversized T-shirt",
  //   image:
  //     "https://images.bewakoof.com/t640/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg",
  //   price: 499,
  //   discount_price: 1299,
  //   offer: "459For TriBe Members",
  //   category: "T-shirt",
  //   rating: 2,
  //   brand: "tyga",
  // };
  let [coupons, setcoupons] = useState(0);
  let [total, settotal] = useState(0);

  let handlecoupons = () => {
    setcoupons(30);
  };

  return (
    <>
      <div className="Cart-Product">
        <div className="Cart-Product-left">
          <div>
            <Alert status="info">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
          </div>
          {product.map((e) => (
            <SinglecartBlock product={e} />
          ))}
        </div>
        <div className="Cart-Product-right">
          <div className="Cart-Product-right-top">
            <Alert status="warning" mb="20px">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
          </div>
          <div className="Cart-Product-right-bottom">
            <Box p={"10px 20px"}>
              Whistles! Get extra <b>10%</b> Cashback on prepaid orders above{" "}
              <br /> Rs.699. <b>Coupon code - OOF10</b>.
            </Box>
            {coupons > 0 ? (
              <Alert status="success">
                <AlertIcon />
                Flat -₹30 Coupon Applied !!
              </Alert>
            ) : (
              <div style={styles}>
                <CalendarIcon />
                <Text fontSize="md"> Apply Coupons</Text>
                <Text color="red" textAlign="center" fontSize="md">
                  Get Upto 50% OFF
                </Text>
                <Button
                  disabled={coupons > 0}
                  onClick={handlecoupons}
                  size="sm"
                  colorScheme="red"
                >
                  {coupons > 0 ? "Applied" : "Apply"}
                </Button>
              </div>
            )}
          </div>
          <div>
            <Alert status='success' variant='left-accent'>
              <AlertIcon />
              Price Summary
            </Alert>
          </div>
        </div>
      </div>
    </>
  );
};
