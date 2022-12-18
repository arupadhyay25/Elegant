require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./Config/db");
const { userRouter } = require("./Route/user.route");
const { productRoute } = require("./Route/product.route");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/product", productRoute);

app.get("/", (req, res) => {
  res.send("WELCOME SERVER RUNNING !!");
});

app.listen(8000, async () => {
  try {
    await connect();
    console.log("DB connection established");
  } catch (err) {
    console.log("DB not connected");
  }
  console.log(`http://localhost:${8000}`);
});
