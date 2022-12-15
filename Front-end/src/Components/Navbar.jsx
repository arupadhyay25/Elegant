import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  
  const navigate=useNavigate();
  const handleWomens=()=>{
      navigate ('/women')
      }
  
      const handleMens=()=>{
      navigate ('/')
      }
      const handleHome=()=>{
          navigate ('/')
      }
      const handleCart=()=>{
          navigate ('/cart')
      }
      const handleWishlist=()=>{
          navigate ('/wishlist')
      }
      const handleMobile=()=>{
          navigate ('/mobile')
      }
  return (
    <div>
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
            {/* <div><img src="https://i.pinimg.com/originals/6f/f7/cf/6ff7cf1a4f6dbd06fb51ba39a9085372.jpg" alt="Above Navbar Image" /></div> */}
          </div>
            
        </div>
      </div>
      
        <div className={styles.navOuterDiv} >
            <div className={styles.nav} >
                <div onClick={handleHome} className={styles.logoDiv}>
                <img className={styles.Logo} src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="bewakoof logo"  />
                </div>
                <div>                    
                  <button onClick={handleMens} className={styles.navButtons} >MEN</button>
                  <button onClick={handleWomens} className={styles.navButtons} >WOMEN</button>
                  <button onClick={handleMobile} className={styles.navButtons} >MOBILE COVERS</button>
                </div>
                
                
                <input className={styles.searchIp} type="text" placeholder='     Search by product, category or collection'/>
                 <div style={{marginLeft:"-50px",marginTop:"10px"}}><i class="fa-solid fa-magnifying-glass"></i></div>
                
                <div className={styles.navIcons}>
                  <hr />
                    <div>
                        
                        Login
                    </div>
                    {/* <div><i className={styles.eachNavIcon} class="fa-regular fa-user"></i></div> */}
                    {/* <div><i className={styles.eachNavIcon} class="fa-regular fa-heart fa-2x"></i></div> */}
                    
                    <div onClick={handleWishlist}><img width="40px" height="40px" src="https://www.clipartmax.com/png/middle/11-115852_two-hearts-clipart-black-and-white-heart-icon-black-and-white.png" alt="Wishlist" /></div>
                    <div onClick={handleCart}><img width="40px" height="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLH7r0DgnaYGl5Wn7fHenE0d0YyfXO3CKsYZtYYUET0pZ-8mCaemKuqi5BHNlo0ZSEQE&usqp=CAU" alt="Shopping bag" /></div>
                    {/* <div><i className={styles.eachNavIcon} class="fa-solid fa-bag-shopping fa-2x"></i></div> */}
    
                </div>
                

            </div>
            <hr />
        </div>
    </div> 
  );
};
