import express from "express";
import {router} from "./controller/employeeController.js";
import { connectDB } from "./repository/employeeRepository.js";
import "dotenv/config"
import cors from "cors"

const app=express();
connectDB();
app.use(express.json());
app.use(cors())
app.use("/api/v1/employee",router);
app.listen(process.env.PORT);