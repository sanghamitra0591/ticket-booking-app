const mongoose= require("mongoose");

const ticketSchema= mongoose.Schema({
    airline: String,
    date: String,
    time: String,
    arrival: String,
    departure: String,
    price: Number,
    stops: Number,
    destination: String
})

const TicketModel= mongoose.model("ticket", ticketSchema);



module.exports= {
    TicketModel
}