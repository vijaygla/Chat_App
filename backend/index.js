// Method_1---> type=common js
// const express = require("express");
// Method_2 ---> when type=module
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messageRoutes.js";

cookieParser;

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8080;

// middleware---> tell when you request data from the client side most be the json data
app.use(express.json());
app.use(cookieParser());


// use of routes
// http://localhost:9000/api/v1/user/register
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at port ${PORT}`);
})

