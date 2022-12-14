const express = require("express");
const { productmodel } = require("../Model/product.model");
const productRoute = express.Router();

productRoute.post("/", async (req, res) => {
  const paylod = req.body;
  await productmodel.create();
  res.send("Product here!");
});

module.exports = { productRoute };
