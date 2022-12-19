import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDrawer from "../Components/AdminDrawer";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import styles from "../Components/Navbar.module.css";
const initialData = {
  name: "",
  image: "",
  price: "",
  category: "",
  brand: "",
};
function AddProducts() {
  const [userData, setUserData] = useState(initialData);
  const [dis, setDis] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const toast = useToast();
  useEffect(() => {
    if (
      userData.name == "" ||
      userData.image === "" ||
      userData.price === "" ||
      userData.category == "" ||
      userData.brand === ""
    ) {
      setDis(true);
    } else {
      setDis(false);
    }
  });
  const handleData = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? Number(value) : value;

    setUserData({
      ...userData,
      [name]: val,
    });
  };

  const handleClick = () => {
    if (place === "men") {
      axios({
        method: "post",
        url: "https://real-blue-kingfisher-gear.cyclic.app/product/mens/create",
        data: userData,
      }).then((res) => {
        if (res.data.msg === "product created successfully") {
          toast({
            position: "top",
            title: "Added",
            description: "Your Product is now added !",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Error",
            description: "try again",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    } else if (place === "women") {
      axios({
        method: "post",
        url: "https://real-blue-kingfisher-gear.cyclic.app/product/womens/create",
        data: userData,
      }).then((res) => {
        if (res.data.msg === "product created successfully") {
          toast({
            position: "top",
            title: "Added",
            description: "Your Product is now added !",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Error",
            description: "try again",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    } else if (place === "mobile") {
      axios({
        method: "post",
        url: "https://real-blue-kingfisher-gear.cyclic.app/product/mobiles/create",
        data: userData,
      }).then((res) => {
        if (res.data.msg === "product created successfully") {
          toast({
            position: "top",
            title: "Added",
            description: "Your Product is now added !",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Error",
            description: "try again",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    }
  };
  console.log(place);
  return (
    <>
      <div>
        <div className={styles.outerMain}>
          <div className={styles.aboveNavbar}>
            <div className={styles.aboveRBlock}>
              <div>
                <Link to={"offers"}>
                  <p>Offers</p>
                </Link>
              </div>
              <div>
                <Link to={"fanpage"}>
                  <p>Fanbook</p>
                </Link>
              </div>
              <div>
                <Link to={"/downloaduipage"}>
                  <p>Download App</p>
                </Link>
              </div>
              <div>
                <p>Tribe Membership</p>
              </div>
            </div>
            <div className={styles.aboveLBlock}>
              <div>
                <Link to={"/ContactUs"}>
                  <p>Contact Us</p>
                </Link>
              </div>
              <div>
                <p>Track Order</p>
              </div>
            </div>
          </div>
        </div>

        <Box className={styles.navOuterDiv}>
          <div className={styles.nav}>
            <div className={styles.logoDiv}>
              <AdminDrawer />
            </div>
            <div className={styles.logoDiv}>
              <Link to={"/"}>
                <img
                  className={styles.Logo}
                  src="Images/elegant.png"
                  alt="elegant logo"
                />
              </Link>
            </div>

            <div className={styles.rightpanel}>
              <Link to={"/login"}>
                <Icon fontSize={"5xl"} as={BsPerson} />
              </Link>
            </div>
          </div>
          <hr className={styles.hr} />
        </Box>
        <hr className={styles.hr} />
      </div>
      {/* <AdminDrawer /> */}
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        height="auto"
        width={"80%"}
        justifyContent="space-evenly"
        margin="auto"
        spacing="40px"
        p="40px"
      >
        <Box bg={"blue.50"} width={"100%"}>
          <Box>
            <Image
              height={"400px"}
              src="https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-wooden-signage-direction-sign-attractions-sign-cartoon-illustration-png-image_408083.jpg"
            />
          </Box>
        </Box>
        <Box width={"100%"}>
          <Box display={"flex"}>
            <Text textAlign={"justify"} fontSize={"35px"} fontWeight={"bold"}>
              Edit Products
            </Text>
          </Box>

          <Box>
            <Stack margin="auto" spacing={5}>
              <FormControl isRequired>
                <FormLabel>Product Title</FormLabel>
                <Input
                  value={userData.name}
                  name="name"
                  onChange={handleData}
                  borderBottom={"5px solid #968128"}
                  placeholder="Product Name"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Product Image</FormLabel>
                <Input
                  value={userData.image}
                  name="image"
                  onChange={handleData}
                  borderBottom={"5px solid #968128"}
                  type="file"
                  placeholder="Product Image "
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Product Price</FormLabel>
                <Input
                  value={userData.price}
                  name="price"
                  onChange={handleData}
                  borderBottom={"5px solid #968128"}
                  placeholder="Price"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Products Category</FormLabel>
                <Input
                  value={userData.category}
                  name="category"
                  onChange={handleData}
                  borderBottom={"5px solid #968128"}
                  placeholder="Category"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Products Brand</FormLabel>
                <Input
                  value={userData.brand}
                  name="brand"
                  onChange={handleData}
                  borderBottom={"5px solid #968128"}
                  placeholder="Brand"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Where</FormLabel>
                <Select
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="select route"
                >
                  <option value="men">men</option>
                  <option value={"women"}>women</option>
                  <option value={"mobile"}>mobile</option>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Button
            disabled={dis}
            mt={4}
            bg="#968128"
            width={"100%"}
            p={7}
            fontSize={"25px"}
            fontWeight={"0"}
            onClick={handleClick}
          >
            Proceed
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default AddProducts;
