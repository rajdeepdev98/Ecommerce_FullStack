// const express=require("express");
// const cors=require("cors");
// const path=require("path");
import cors from "cors";
import express from "express";
import path from "path";
import { userRouter } from "./src/routes/userRoutes.js";
// const { userRouter } = require("./src/routes/userRoutes");



const app = express();
const PORT = process.env.PORT || 8080

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/user",userRouter);










app.listen(PORT,()=>{
    console.log(`Test Server listening at PORT ${PORT}`);
})




