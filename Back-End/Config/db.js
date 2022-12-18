require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
  // return mongoose.connect(process.env.MONGO_URL);
  return mongoose.connect("mongodb+srv://nilesh:nilesh@cluster0.hnixegw.mongodb.net/bewakoofbackend?retryWrites=true&w=majority");
};

module.exports = { connect };
