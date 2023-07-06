const express= require("express");
const { connection } = require("./Configs/db");

const app= express();

const cors= require("cors");
const { UserRouter } = require("./Routes/User.Route");
const { validator } = require("./Middlewares/Validator.Middleware");
const { TicketRouter } = require("./Routes/Ticket.Route");
const { CartRouter } = require("./Routes/Cart.Route");

app.use(cors({
    origin: "*"
}))


app.use(express.json());
require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to homepage");
})

app.use("/user", UserRouter);

app.use(validator);


app.use("/ticket", TicketRouter);

app.use("/cart", CartRouter);



app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected to the Db");
    } catch (error) {
        console.log({"error" : error});
    }
    console.log(`Running at port 8080`);
})