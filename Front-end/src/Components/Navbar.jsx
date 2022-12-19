import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import "./Navbar.css";

import { BsFillBagFill, BsFillHeartFill, BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/useContext";

export const Navbar = () => {
  const navigate = useNavigate();
  let { cartQuantity, setcartQuantity } = useContext(AuthContext);

  const handleHome = () => {
    navigate("/");
  };
  let [product, setproduct] = useState(0);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("cart_data")) || [];
    setcartQuantity(arr.length);
  }, [product]);

  return (
    <>
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
            <Link to={"/cart"}>
              <Icon
                color={"rgb(253,216,54)"}
                fontSize={"5xl"}
                as={BsFillHeartFill}
              />
            </Link>
            <div>
              <Link to="/cart">
                <Icon fontSize={"5xl"} as={BsFillBagFill} />
                <span className="badge badge-warning" id="lblCartCount">
                  {cartQuantity}
                </span>
              </Link>
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
        <Link to="/mobile-care">ACCESSORIES</Link>
        <Link to="/winter-wear">WINTERWEAR</Link>
      </Box>
    </>
  );
};
