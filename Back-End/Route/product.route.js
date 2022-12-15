const express = require("express");
const { productmodel } = require("../Model/product.model");
const productRoute = express.Router();
// GET
productRoute.get("/", async (req, res) => {
  const paylod = req.body;
  const alldata = await productmodel.create(paylod);
  res.send(alldata);
});

// POST
productRoute.post("/create/:productID", async (req, res) => {
  const paylod = req.body;
  const alldata = await productmodel.create(paylod);
  res.send(alldata);
});
productRoute.post("/", async (req, res) => {
  const paylod = req.body;
  await productmodel.create();
  res.send("Product here!");
});

module.exports = { productRoute };
