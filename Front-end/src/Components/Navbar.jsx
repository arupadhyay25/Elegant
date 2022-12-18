import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import "./Navbar.css";

import { BsFillBagFill, BsFillHeartFill, BsPerson } from "react-icons/bs";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  let [product,setproduct] = useState(0)

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("cart_data"))
    setproduct(arr.length)
  }, [product])
  

  return (
    <>
      <div className={styles.outerMain}>
        <div className={styles.aboveNavbar}>
          <div className={styles.aboveRBlock}>
            <div>
              <p>Offers</p>
            </div>
            <div>
              <p>Fanbook</p>
            </div>
            <div>
              <p>Download App</p>
            </div>
            <div>
              <p>Tribe Membership</p>
            </div>
          </div>
          <div className={styles.aboveLBlock}>
            <div>
              <p>Contact Us</p>
            </div>
            <div>
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>

      <Box className={styles.navOuterDiv}>
        <div className={styles.nav}>
          <div onClick={handleHome} className={styles.logoDiv}>
            <img
              className={styles.Logo}
              src="Images/elegant.png"
              alt="elegant logo"
            />
          </div>

          <div onClick={handleHome} className={styles.rightpanel}>
            <Icon fontSize={"5xl"} as={BsPerson} />
            <Icon
              color={"rgb(253,216,54)"}
              fontSize={"5xl"}
              as={BsFillHeartFill}
            />
            <div>
              <Icon fontSize={"5xl"} as={BsFillBagFill} />
              <span classNam="badge badge-warning" id="lblCartCount">
                {product}
              </span>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </Box>
      <Box
        className={styles.banner}
        w={{ lg: "100%", md: "70%", sm: "500px" }}
        fontSize={{ lg: "22px", md: "16px", sm: "12px" }}
      >
        <Link to="/mens">MEN</Link>
        <Link to="/womens">WOMEN</Link>
        <Link to="/mobile-care">Mobile Covers</Link>
        <Link to="/winter-wear">WINTERWEAR</Link>
      </Box>
    </>
  );
};
