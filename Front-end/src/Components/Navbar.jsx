import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar-links">
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
      </div>
    </div>
  );
};
