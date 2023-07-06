const mongoose= require("mongoose");

const cartSchema= mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    ticket: {
        ticketId: String,
        airline: String,
        date: String,
        time: String,
        arrival: String,
        departure: String,
        price: Number,
        stops: Number,
        destination: String
    },
    quantity: Number
})

const CartModel= mongoose.model("cart", cartSchema);



module.exports= {
    CartModel
}