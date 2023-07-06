const mongoose= require("mongoose");

const cartSchema= mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    ticketId: mongoose.Schema.Types.ObjectId,
    quantity: Number
})

const CartModel= mongoose.model("cart", cartSchema);



module.exports= {
    CartModel
}