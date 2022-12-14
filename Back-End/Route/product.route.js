const express = require("express");
const { productmodel } = require("../Model/product.model");
const productRoute = express.Router();

productRoute.post("/", async (req, res) => {
  const paylod = req.body;
  const alldata = await productmodel.create(paylod);
  res.send(alldata);
});

module.exports = { productRoute };
