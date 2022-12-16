import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

import { Livenow } from "../Pages/Livenow";
import { Mens } from "../Pages/Mens";
import { Womens } from "../Pages/Womens";
import { Accessories } from "../Pages/Accessories";
import { Mobilecovers } from "../Pages/Mobilecovers";
import { Winterwear } from "../Pages/Winterwear";
import LoginPage from "../Pages/LoginPage";
import Signup from "../Pages/Signup";
import AdminPage from "../Pages/AdminPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/live-now" element={<Livenow />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/mobile-care" element={<Mobilecovers />} />
      <Route path="/winter-wear" element={<Winterwear />} />
    </Routes>
  );
};
