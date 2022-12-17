const mongoose = require("mongoose");
const mobileSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  discount_price: { type: Number },
  offer: { type: String },
  category: { type: String, required: true },
  rating: { type: Number },
  brand: { type: String, required: true },
});
const Mobile_model = mongoose.model("mobile", mobileSchema);

module.exports = { Mobile_model };
