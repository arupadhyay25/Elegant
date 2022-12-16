import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Box } from "@chakra-ui/react";
// import "./Navbar.css";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  
  const navigate=useNavigate();
  const handleHome=()=>{
          navigate ('/')
      }
  
  return (
    <div>
    {/*  <div style={{zoom:"0.7"}}> */}
      {/* <div className="navbar-links">
        <Link to="/">Navbar</Link>
        <Link to="/login">Login/Signup</Link>
      </div>
      <br />
      <div className="navbar-links">
        <Link to="/accessories">Accessories</Link>
        <Link to="/live-now">Livenow</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/mobile-cover">Mobilecover</Link>
        <Link to="/winter-wear">Winterwear</Link>
      </div>*/}
      <div className={styles.outerMain}>
        <div className={styles.aboveNavbar}>
          <div className={styles.aboveRBlock}>
              <div><p>Offers</p></div>
              <div><p>Fanbook</p></div>
              <div><p>Download App</p></div>
              <div><p>Tribe Membership</p></div>
          </div>
          <div className={styles.aboveLBlock}>
            <div><p>Contact Us</p></div>
            <div><p>Track Order</p></div>
          </div>
            
        </div>
      </div>
      
        <Box className={styles.navOuterDiv} >
            <div className={styles.nav} >
                <div onClick={handleHome} className={styles.logoDiv}>
                <img className={styles.Logo} src="Images/elegant.png" alt="elegant logo"  />
                </div>
                <Box className={styles.navButtonsDiv} mt={"10px"}>                    
                  <Link to="/mens" className={styles.navButtons} >MEN</Link>
                  <Link to="/womens" className={styles.navButtons} >WOMEN</Link>
                  <Link to="/mobile-cover" className={styles.navButtons} >MOBILE COVERS</Link>
                </Box>
                
                
                <Input className={styles.searchIp} type="text" placeholder='     Search by product, category or collection'/>
                 <div style={{marginLeft:"-40px",marginTop:"5px"}}><i class="fa-solid fa-magnifying-glass"></i></div>
                
                <div className={styles.navIcons}>
                  <hr />
                    <div>
                        
                        Login
                    </div>
                    <Link to="/wishlist"><i className={styles.eachNavIcon} class="fa-regular fa-heart "></i></Link>
                    <Link to="/cart"><i className={styles.eachNavIcon} class="fa-solid fa-cart-shopping "></i></Link>
                    
                </div>
                

            </div>
            <hr className={styles.hr} />
        </Box>
        <Box className={styles.banner} w={{lg:"100%",md:"70%",sm:"500px"}} fontSize={{lg:"22px",md:"16px",sm:"12px"}}>
          <Link to="/live-now">LIVE NOW!</Link>
          <Link to="/mens">MEN</Link>
          <Link to="/womens">WOMEN</Link>
          <Link to="/accessories">ACCESSORIES</Link>
          <Link to="/winter-wear">WINTERWEAR</Link>
        </Box>
    </div> 
  );
};
