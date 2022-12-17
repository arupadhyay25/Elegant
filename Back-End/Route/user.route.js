const express = require("express");
const { Usermodel } = require("../Model/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  console.log("bEY")
  const all = await Usermodel.find();
  console.log("HEY")
  res.send("user here", all);
});

userRouter.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  const isPresent = await Usermodel.findOne({ email });
  if (isPresent) {
    res.send({ msg: "User already exists" });
  } else {
    try {
      bcrypt.hash(password, 4, async function (err, hash) {
        if (err) {
          res.send({ msg: "Something went wrong" });
        } else {
          await Usermodel.create({ email, password: hash, role, name });
          res.send({ msg: "User created successfully" });
        }
      });
    } catch (err) {
      res.send({ msg: "Something went wrong !" });
    }
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const isPresent = await Usermodel.findOne({ email });
  if (isPresent) {
    const hashpassword = isPresent.password;
    bcrypt.compare(password, hashpassword, function (err, result) {
      if (result) {
        const token = jwt.sign(
          { userID: isPresent._id },
          // process.env.SECRET_KEY,
          "top_secret_key",
          { expiresIn: "1h" }
        );
        res.send({ msg: "Login Successfully ! ", token: token });
      } else if (err) {
        res.send({ msg: "Please try again" });
      }
    });
  } else {
    res.send({ msg: "Something went wrong !" });
  }
});

module.exports = { userRouter };
