import express from "express";
import mongoose from "mongoose";
import Product from "./models/user.model.js";
import productRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res)=>{
    res.send("hello from backend");
})

//routes
app.use("/api/products",productRoute);




mongoose.connect("mongodb://localhost:27017/local")
.then(()=>{
    console.log("connected to the dtatbase");
    app.listen(3000,()=>{
        console.log("server is running on 3000");
    })
})
.catch(()=>{
    console.log("not connected");
})
