import {
    AddIcon,
    MinusIcon,
    StarIcon,
  } from "@chakra-ui/icons";
  import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    br,
    Stack,
    Text,
    useDisclosure,
    Center,
  } from "@chakra-ui/react";
  import React from "react";
  import { useState } from "react";
  import "./SingleProduct.css";
  import { FcLikePlaceholder, FcLike } from "react-icons/fc";
  import { Icon } from "@chakra-ui/react";
  import { SizeButton } from "../Components/SizeButton";
  import { TbDiscount2 } from "react-icons/tb";
  import { BsFillBagFill } from "react-icons/bs";
  import { BiCurrentLocation } from "react-icons/bi";
  import { TbBus } from "react-icons/tb";
  import { BsCash } from "react-icons/bs";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useNavigate } from "react-router-dom";
  
  export const SingleProduct = () => {
    let [like, setlike] = useState(false);
    let [dimension, setdimension] = useState(false);
    let [cart, addtocart] = useState(false);
    let navigate = useNavigate();
  
    let product = JSON.parse(localStorage.getItem("Productid")) || {
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
    let handledimesion = () => {
      setdimension(!dimension);
    };
    let handleaddtocart = () => {
      if (cart) {
        navigate("/cart");
      }
      toast.success("Added to Cart!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
      addtocart(!cart);
    };
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <div className="Single-Product">
          <div className="Single-Product-left">
            <Image src={product.image} alt={product.name} w="80%" m="auto" />
          </div>
          <div className="Single-Product-right">
            <Text fontWeight="extrabold">{product.brand.toUpperCase()}</Text>
            <Text>{product.name}</Text>
            <Button size="xs">
              <StarIcon color="rgb(255,164,28)" />
              &nbsp;&nbsp;
              {product.rating > 4 ? product.rating - 0.2 : product.rating + 0.2}
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
              <Text w="80%" fontSize="xs">
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
                <Text
                  fontSize="smaller"
                  fontWeight="bold"
                  color="teal"
                  onClick={onOpen}
                >
                  Size Guide
                </Text>
                <>
                  <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset="slideInBottom"
                    size="3xl"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Size Guide</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Image src="./Images/sizew.png" />
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              </div>
            </div>
            <Stack
              w="100%"
              direction="row"
              spacing={3}
              mt={2}
              onClick={handledimesion}
            >
              <SizeButton text="S" />
              <SizeButton text="M" />
              <SizeButton text="L" />
              <SizeButton text="3XL" />
              <SizeButton text="4XL" />
              <SizeButton text="5XL" />
            </Stack>
            {dimension ? (
              <Text fontSize={"xs"}>
                <br />
                Garment: Chest (in Inch): 48.0 Front Length (in Inch): 31.25
                Sleeve Length (in Inch): 10.5
              </Text>
            ) : (
              false
            )}
            <br />
            <div>
              <Stack w="100%" direction="row" spacing={4}>
                <Button
                  leftIcon={<Icon as={BsFillBagFill} />}
                  colorScheme="yellow"
                  variant="solid"
                  size="sm"
                  onClick={handleaddtocart}
                >
                  {cart ? "GO TO BAG" : "ADD TO BAG"}
                </Button>
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
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
              <div>
                <br />
                <Accordion allowMultiple>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}
                            >
                              SAVE EXTRA WITH 3 OFFERS
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="sm">
                          <Text>
                            <Icon as={TbDiscount2} />
                            &nbsp; Whistles! Get extra 10% Cashback on prepaid
                            orders above Rs.699. Coupon code - <b>OOF10</b>.{" "}
                            <br />{" "}
                            <Text fontWeight={"bold"} color={"teal"}>
                              Tap to Copy coupon_icon
                            </Text>
                          </Text>
                          <br />
                          <Text>
                            <Icon as={TbDiscount2} />
                            &nbsp; Get Rs.200 instant discount on your First
                            Purchase above Rs.999. Coupon code -<b>NEW200</b>{" "}
                            <br />
                            <Text fontWeight={"bold"} color={"teal"}>
                              Tap to Copy coupon_icon
                            </Text>
                          </Text>
                          <br />
                          <Text>
                            <Icon as={TbDiscount2} />
                            &nbsp; Whistles! Get extra 20% Cashback on prepaid
                            orders above Rs.499. Coupon code - <b>NEW20</b>.
                            Applicable for new customers only! <br />{" "}
                            <Text fontWeight={"bold"} color={"teal"}>
                              Tap to Copy coupon_icon
                            </Text>
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}
                            >
                              PRODUCT DESCRIPTION
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Text fontSize={"xs"}>
                            Lead Team 7 into victory in everything with this Son
                            of White Fang Men's Oversized T-Shirt. Wear this black
                            t-shirt with contrasting denim shorts and canvas shoes
                            for a cool, urbane look.
                            <br />
                            <b>Country of Origin</b> - India
                            <br />
                            <br />
                            <b>Manufactured By</b> - Bewakoof Brands Pvt Ltd,
                            Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite
                            All Saints High School, Amne, Bhiwandi, Thane,
                            Maharashtra 421302
                            <br />
                            <br />
                            <b>Packed By</b> - Bewakoof Brands Pvt Ltd, Sairaj
                            Logistic Hub #A5, Bmc Pipeline Road, Opposite All
                            Saints High School, Amne, Bhiwandi, Thane, Maharashtra
                            421302
                            <br />
                            <br /> <b>Commodity</b> -Men's T-Shirt
                            <br />
                            <br />
                            <b>Product Specifications</b>
                            <br />
                            <li>
                              Oversized fit - Super Loose On Body Thoda Hawa Aane
                              De{" "}
                            </li>
                            <li>
                              Single Jersey, 100% Cotton Classic, lightweight
                              jersey fabric comprising 100% cotton.
                            </li>
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}
                            >
                              15 DAY RETURNS & EXCHANGE
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="sm">
                          Easy returns upto 15 days of delivery. Exchange
                          available on select pincodes
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}
                            >
                              GET THIS BY 27th Dec
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={"sm"}>
                          <Text m={2}>
                            <Icon as={BiCurrentLocation} />
                            &nbsp; Delivering to 412210
                          </Text>
                          <Text m={2}>
                            <Icon as={TbBus} />
                            &nbsp; Order now to get delivery by 27th Dec.
                          </Text>
                          <Text m={2}>
                            <Icon as={BsCash} />
                            &nbsp; Cash on Delivery is available.
                          </Text>
                          <Center m={2}>
                            <Button size={"xs"}>Change</Button>
                          </Center>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <div className="single-product-inline-other">
                  <div className="single-product-inline-end">
                    <div>
                      <Text fontSize={"3xl"}>
                        {product.rating > 4
                          ? product.rating - 0.2
                          : product.rating + 0.2}
                      </Text>
                    </div>
                    <div>
                      <Text fontSize={"xs"}>
                        Based on 47 ratings <br /> and 0 reviews
                      </Text>
                    </div>
                  </div>
                  <div>
                    <Button mt={2} size={"xs"} colorScheme={"teal"}>
                      {" "}
                      RATE
                    </Button>
                  </div>
                </div>
                <Image src="./Images/pr.JPG" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  