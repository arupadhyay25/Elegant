const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  cart: String,
  img: String,
  rating: Number,
  brand: String,
  price: Number,
  type: String,
  category: String,
});
const cartmodel = mongoose.model("cart", cartSchema);

module.exports = { cartmodel };
