import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Center, Icon } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import "./Navbar.css";

import { useState } from "react";

export const Navbar2 = () => {
  let [product, setproduct] = useState(0);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("cart_data")) || [];
    setproduct(arr.length);
  }, [product]);

  return (
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
        <Center>
          <Link to={"/"}>
            <img src="Images/elegant.png" alt="elegant logo" width={"350px"} />
          </Link>
        </Center>
      </Box>
      <hr className={styles.hr} />
    </div>
  );
};
