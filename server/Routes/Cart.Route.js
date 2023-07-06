const express= require("express");
const { CartModel } = require("../Models/Cart.Model");

const CartRouter= express.Router();

CartRouter.get("/", async(req, res)=>{
    try {
        const data= await CartModel.find();
        res.send(data);
    } catch (error) {
        res.send({"error": error})
        console.log(error)
    }
})

CartRouter.post("/add", async(req, res)=>{
    const data= req.body;
    try {
        const newData= new CartModel(data);
        await newData.save();
        res.send({"msg" : "Ticket Added to Cart"});
    } catch (error) {
        res.send({"error": "Something went wrong"})
        console.log(error)
    }
})

CartRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        await CartModel.findByIdAndDelete({"_id": id});
        res.send("Ticket removed from cart")
    } catch (error) {
        console.log({"error":error});
        res.send("Unable to remove")
    }
})



module.exports= {
    CartRouter
}