import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";




// app config
const app = express();
const port = 8090;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/product",productRouter)
app.use("/images",express.static('uploads'))



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on localhost:${port}`)
})

