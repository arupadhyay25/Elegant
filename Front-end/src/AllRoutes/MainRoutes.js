import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

import { Livenow } from "../Pages/Livenow";
import { Mens } from "../Pages/Mens";
import { Womens } from "../Pages/Womens";
import { Accessories } from "../Pages/Accessories";
import { Mobilecovers } from "../Pages/Mobilecovers";
import { Winterwear } from "../Pages/Winterwear";
import { FansPage } from "../Pages/FansPage";
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

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={
        <PrivatePage>
          <LoginPage />
        </PrivatePage>
      } />
      <Route path="/signup" element={
        <PrivatePage>
           <Signup />
        </PrivatePage>
      } />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/live-now" element={<Livenow />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/SingleProduct" element={<SingleProduct />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/mobile-care" element={<Mobilecovers />} />
      <Route path="/winter-wear" element={<Winterwear />} />
      <Route path="/fanspage" element={<FansPage />} />
      <Route path="/downloaduipage" element={<DownloaduiPage />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
};
