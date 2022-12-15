const express = require("express");
const { cartmodel } = require("../Model/cart.model");
const cartRoute = express.Router();

cartRoute.post("/", async (req, res) => {
  const paylod = req.body;
  await cartmodel.create();
  res.send("cart here!");
});

module.exports = { cartRoute };