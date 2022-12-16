const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product: String,
  img: String,
  rating: Number,
  brand: String,
  price: Number,
  type: String,
  category: String,
  productID: String
});
const productmodel = mongoose.model("product", productSchema);

module.exports = { productmodel };
