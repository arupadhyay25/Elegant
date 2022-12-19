import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Mens } from "../Pages/Mens";
import { Womens } from "../Pages/Womens";
import { Mobilecovers } from "../Pages/Mobilecovers";
import { Winterwear } from "../Pages/Winterwear";
import DownloaduiPage from "../Pages/DownloaduiPage";
import LoginPage from "../Pages/LoginPage";
import Signup from "../Pages/Signup";
import { SingleProduct } from "../Pages/SingleProduct";
import AdminPage from "../Pages/AdminPage";
import ContactUs from "../Pages/ContactUs";
import { Cart } from "../Pages/Cart";
import ProfilePage from "../Pages/ProfilePage";
import AddProducts from "../Pages/AddProducts";
import PrivatePage from "../Pages/PrivatePage";
import Offers from "../Pages/Offers";
import { FansPage } from "../Pages/FansPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <PrivatePage>
            <LoginPage />
          </PrivatePage>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivatePage>
            <Signup />
          </PrivatePage>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/SingleProduct" element={<SingleProduct />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/mobile-care" element={<Mobilecovers />} />
      <Route path="/winter-wear" element={<Winterwear />} />
      <Route path="/downloaduipage" element={<DownloaduiPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/fanpage" element={<FansPage />} />
    </Routes>
  );
};
