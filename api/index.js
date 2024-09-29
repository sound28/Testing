import express from "express"
import dotenv from"dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import FlightRoute from "./routes/Flight.js"
import BookingRoute from "./routes/Booking.js"
import Stripe from "stripe"
import Payment from "./routes/payment.js"

import cors from 'cors';


const app=express()
dotenv.config()

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }

    };
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected")
    })
    
    app.use(cors());

    app.use(express.json())
    app.use("/api/auth",authRoute);
    app.use("/api/flight",FlightRoute);
    app.use("/api/booking",BookingRoute);
    app.use("/api/payment",Payment)


app.listen(8100,()=>{
    connect();
    console.log("connected")

})
