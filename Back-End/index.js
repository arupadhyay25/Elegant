require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./Config/db");
const { userRouter } = require("./Route/user.route");
const { men_Route } = require("./Route/men.route");
const { women_Route } = require("./Route/women.route");
const { mobile_Route } = require("./Route/mobile.route");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.use("/product/mens", men_Route);
app.use("/product/womens", women_Route);
app.use("/product/mobiles", mobile_Route);

app.get("/", (req, res) => {
  res.send("WELCOME SERVER RUNNING !!");
});

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("DB connection established");
  } catch (err) {
    console.log("DB not connected");
  }
  console.log(`http://localhost:${process.env.PORT}`);
});
