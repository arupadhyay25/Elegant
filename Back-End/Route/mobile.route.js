const express = require("express");
const { Mobile_model } = require("../Model/mobile.model");

const mobile_Route = express.Router();

mobile_Route.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "price";
    let type = req.query.type || "All";

    const typeOptions = ["Casual", "Official", "Party"];

    type === "All"
      ? (type = [...typeOptions])
      : (type = req.query.type.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const products = await Mobile_model.find({
      product: { $regex: search, $options: "i" },
    })
      .where("type")
      .in([...type])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Mobile_model.countDocuments({
      type: { $in: [...type] },
      product: { $regex: search, $options: "i" },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      types: typeOptions,
      products,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

mobile_Route.get("/:productID", async (req, res) => {
  const productID = req.params.productID;
  const product = await Mobile_model.findOne({ _id: productID });
  if (product) {
    res.send(product);
  } else {
    res.send({ msg: "product not found" });
  }
});

mobile_Route.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_product = new Mobile_model(payload);
    await new_product.save();
    res.send({ msg: "product created successfully" });
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
});

mobile_Route.patch("/update/:productID", async (req, res) => {
  const payload = req.body;
  const productID = req.params.productID;
  try {
    await Mobile_model.findByIdAndUpdate({ _id: productID }, payload);
    res.send({ msg: "product updated successfully" });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
});

mobile_Route.delete("/delete/:productID", async (req, res) => {
  const productID = req.params.productID;
  try {
    await Mobile_model.findByIdAndDelete({ _id: productID });
    res.send({ msg: "product deleted successfully" });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
});

module.exports = { mobile_Route };
