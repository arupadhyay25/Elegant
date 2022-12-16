const express = require("express");
const { productmodel } = require("../Model/product.model");
// const productRoute = express.Router();

// productRoute.post("/", async (req, res) => {
//   const paylod = req.body;
//   await productmodel.create();
//   res.send("Product here!");
// });

// module.exports = { productRoute };

const productRoute= express.Router();

productRoute.get("/",async(req,res)=>{
  const params= req.query;
  const page_no= req.query.page_no;
  const sort= req.query.sort;
  const product= req.query.product || "";
  const limit= req.query.limit || 5;

  try{
    const products= await productmodel.find(params)
      .limit(limit)
      .skip((page_no - 1) * limit)
      
      res.send(products)
  }
  catch(err){
      console.log(err);
      res.send({"err":"something went wrong"})
  }
})

productRoute.get("/:productID",async(req,res)=>{
    const productID= req.params.productID
    const product= await productmodel.findOne({productID})
    if(product){
      res.send(product);
    }
    else{
        res.send({"msg":"product not found"})
    }
})

// productRoute.get("/find",async(req,res)=>{
//   const params= req.query;
//   let data= await productmodel.find();
//   let ans= data.filter((item)=> item.product.includes(params.product));
//   try{
//     res.send(await ans);
//   }
//   catch(err){
//     res.send("Something went wrong !!!");
//   }
// });

productRoute.post("/create",async(req,res)=>{
    const payload= req.body
    //get token from header
    //verify token using jwt
    try{
        const new_product= new productmodel(payload)
        await new_product.save()
        res.send({"msg":"product created successfully"})
    }
    catch(err){
        console.log(err);
        res.send({"err":"Something went wrong"})
    } 
})

productRoute.patch("/update/:productID",async(req,res)=>{
    const userID= req.body.userID
    const payload= req.body;
    const productID= req.params.productID
    const product= await productmodel.findOne({_id:productID})
    if(userID !== product.userID){
        res.send("Not authorised")
    }
    else{
        await productmodel.findByIdAndUpdate({_id: productID},payload)
        res.send({"msg":"product updated successfully"})    
    }
})

productRoute.delete("/delete/:productID",async(req,res)=>{
    const userID= req.body.userID
    const productID= req.params.productID
    const product= await productmodel.findOne({_id:productID})
    if(userID !== product.userID){
        res.send("Not authorised")
    }
    else{
        await productmodel.findByIdAndDelete({_id: productID})
        res.send({"msg":"product deleted successfully"})
    }
})

module.exports= {productRoute}