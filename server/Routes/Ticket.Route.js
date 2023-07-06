const express= require("express");
const { TicketModel } = require("../Models/Ticket.Model");

const TicketRouter= express.Router();

TicketRouter.get("/", async(req, res)=>{
    const {destination, date, sort, airline, search}= req.query;
    try {
        if(destination && date && sort && airline){
            if(sort==="asc" && airline){
                const data= await TicketModel.find({airline, destination, date}).sort({price : 1});
                res.send(data);
            }else if(sort==="desc" && airline){
                const data= await TicketModel.find({airline, destination, date}).sort({price : -1});
                res.send(data);
            }
        }else if(sort){
            if(sort==="asc"){
                const data= await TicketModel.find({destination, date}).sort({price : 1});
                res.send(data);
            }else if(sort==="desc"){
                const data= await TicketModel.find({destination, date}).sort({price : -1});
                res.send(data);
            }
        }else if(airline){
            const data= await TicketModel.find({airline, destination, date});
            res.send(data);
        }else if(search){
            const data= await TicketModel.find({destination, date,"airline" : {"$regex" : search, "$options" : "i"}});
            res.send(data);
        }else{
            const data= await TicketModel.find({destination, date});
            res.send(data);
        }
    } catch (error) {
        console.log({"error":error});
        res.send("Unable to get the posts")
    }
})

TicketRouter.get("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        const data= await TicketModel.find({"_id": id});
        res.send(data);
    } catch (error) {
        res.send({"error": error})
        console.log(error)
    }
})

TicketRouter.post("/add", async(req, res)=>{
    const data= req.body;
    try {
        const newData= new TicketModel(data);
        await newData.save();
        res.send({"msg" : "Ticket Added Successfully"});
    } catch (error) {
        res.send({"error": "Something went wrong"})
        console.log(error)
    }
})




module.exports= {
    TicketRouter
}
