import { CalendarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import BackdropAdress from "../Components/Modaladdress";
import { SinglecartBlock } from "../Components/SinglecartBlock";
import "./Cart.css";
import { TbBus } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { AuthContext } from "../Context/useContext";

let styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
};
export const Cart = () => {
  let product = JSON.parse(localStorage.getItem("cart_data")) || [];
  let { cartQuantity, setcartQuantity } = useContext(AuthContext);
  let [coupons, setcoupons] = useState(0);
  let [update, setupdate] = useState(0);

  let [mrp, setmrp] = useState(0);
  let [discount, setdiscount] = useState(0);
  let [total, settotal] = useState(0);

  let handlecoupons = () => {
    setcoupons(30);
  };
  let alldata = JSON.parse(localStorage.getItem("cart_data")) || [];

  useEffect(() => {
    let sum = 0;
    let mrp_sum = 0;
    for (let i = 0; i < product.length; i++) {
      sum += product[i].price;
      mrp_sum += product[i].discount_price;
    }
    setdiscount(mrp_sum - sum + coupons);
    settotal(sum - coupons);
    setmrp(mrp_sum);
    let arr = JSON.parse(localStorage.getItem("cart_data"));
    setcartQuantity(arr.length);
  }, [coupons, alldata]);

  return (
    <>
      <Navbar />
      <div className="Cart-Product">
        <div className="Cart-Product-left">
          <div>
            <Alert status="info">
              <Icon as={TbBus} fontSize={"2xl"} />
              &nbsp; Yay! You get FREE delivery on this order !!
            </Alert>
          </div>
          {product.length > 0 ? (
            product.map((e) => (
              <SinglecartBlock
                product={e}
                update={update}
                setupdate={setupdate}
              />
            ))
          ) : (
            <>
              <Image src="./Images/emptycart.gif" alt="emptycart" />
            </>
          )}
        </div>
        <div className="Cart-Product-right">
          <div className="Cart-Product-right-top">
            <Alert status="warning" justifyContent={"space-between"} mb="20px">
              Save extra ₹40 with TriBe
              <Icon fontSize={"2xl"} as={GiMoneyStack} />
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
                <Text fontSize="sm"> Apply Coupons</Text>
                <Text color="red" textAlign="center" fontSize="md">
                  Get Upto 50% OFF
                </Text>
                <Button
                  disabled={product.length == 0}
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
            <Alert fontSize={"sm"} status="info" variant="left-accent">
              Price Summary
            </Alert>
            <div className="price-summary">
              <Text>Total MRP (Incl. of taxes)</Text>
              <Text>₹{mrp}</Text>
            </div>
            <div className="price-summary">
              <Text>Shipping Charges </Text>
              <Text color={"green"}>FREE</Text>
            </div>
            <div className="price-summary">
              <Text>Bag Discount </Text>
              <Text>- ₹{discount}</Text>
            </div>
            <div className="price-summary">
              <Text>Subtotal </Text>
              <Text>₹{total}</Text>
            </div>
            <div className="price-summary-end">
              <Text
                color={"green"}
              >{`You are saving ₹ ${discount} on this order`}</Text>
            </div>
          </div>
          <div>
            <div className="price-summary">
              <div>
                <Text fontSize={"xl"} fontWeight="bold">
                  Total
                </Text>
                <Text fontSize={"xl"} fontWeight="bold">
                  ₹{total}
                </Text>
              </div>
              <div style={{ width: "50%" }}>
                <BackdropAdress />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Center>
        <Text>Similar Products</Text>
      </Center>
      <div className="cart-end-product">
        <Image
          src="https://images.bewakoof.com/t640/stoners-delight-all-over-printed-boxer-235809-1655751256-1.jpg"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-grey-and-black-color-block-track-pant-557937-1670248135-1.JPG"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-sage-green-slim-fit-shirt-560469-1670823107-1.jpg"
          width={"200px"}
        />
        <Image
          src="https://images.bewakoof.com/t640/men-s-olive-basic-trackpants-459501-1661434183-1.jpg"
          width={"200px"}
        />
      </div>
      <Footer />
    </>
  );
};
