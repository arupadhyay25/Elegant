import {
  Box,
  Center,
  Grid,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminDrawer from "../Components/AdminDrawer";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import styles from "../Components/Navbar.module.css";
import Plot from "react-plotly.js";

function AdminPage() {
  let [product, setproduct] = useState(0);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  let categoryList = [
    "Mens",
    "Womens",
    "Assecories",
    "winterWear",
  ];
  let categoryListCount = [96, 65, 71, 35];


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

      <Box height="auto" mb={"100px"}>
        <SimpleGrid
          width="70%"
          margin={"auto"}
          columns={[1, 1, 2, 3]}
          spacing="40px"
          mt="50px"
        >
          <Box
            boxShadow="0 0 15px 2px black"
            height={"150px"}
            display={"flex"}
            width={"100%"}
            bg={"#968128"}
          >
            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Image
                height={"100px"}
                src="https://i.pinimg.com/originals/b6/1a/4d/b61a4d35d350173b05f458b73c2f0997.gif"
              />
            </Box>

            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Box>
                <Text fontSize={"25px"} as="b" color={"gray.400"}>
                  Oders
                </Text>
              </Box>
              <Box>
                <Text fontSize={"21px"} as="b" color={"white"}>
                  28
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            boxShadow="0 0 15px 2px black"
            height={"150px"}
            display={"flex"}
            width={"100%"}
            bg={"#968128"}
          >
            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Image
                height={"100px"}
                src="https://i.pinimg.com/originals/37/6c/d7/376cd78f534efc70562acd902db2752c.gif"
              />
            </Box>

            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Box>
                <Text fontSize={"25px"} as="b" color={"gray.400"}>
                  Revenue
                </Text>
              </Box>
              <Box>
                <Text fontSize={"21px"} as="b" color={"white"}>
                ₹100k
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            boxShadow="0 0 15px 2px black"
            height={"150px"}
            display={"flex"}
            width={"100%"}
            bg={"#968128"}
          >
            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Image
                height={"100px"}
                src="https://cdn.dribbble.com/users/391028/screenshots/2020269/shelves.gif"
              />
            </Box>

            <Box width={"50%"} marginLeft={"20px"} marginTop="20px">
              <Box>
                <Text fontSize={"25px"} as="b" color={"gray.400"}>
                  Products
                </Text>
              </Box>
              <Box>
                <Text fontSize={"21px"} as="b" color={"white"}>
                  267 nos
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
        <div className={styles.graph}>
          <div>
            <Plot
              data={[
                {
                  x: categoryList,
                  y: categoryListCount,
                  type: "bar",
                  mode: "line+markers",
                  maker: { color: "green" },
                },
              ]}
              layout={
                isLargerThan1024
                  ? {
                      width: 600,
                      height: 320,
                      title: "Category Counts",
                    }
                  : {
                      width: 400,
                      height: 280,
                      title: "Category Counts",
                    }
              }
            />
          </div>
          <div>
            <Plot
              data={[
                {
                  values: [32, 40, 28],
                  labels: ["local", "National", "International"],
                  type: "pie",
                },
              ]}
              layout={{
                width: 400,
                height: 320,
                title: "Visitors from",
              }}
            />
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
}

export default AdminPage;
