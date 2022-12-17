const mongoose = require("mongoose");
const womenSchema = new mongoose.Schema({
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
const Women_model = mongoose.model("women", womenSchema);

module.exports = { Women_model };
