import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "express";
// import { register } from './controllers/user.js';
import router from './Router/user.js';
import contectRouter from "./Router/contect.js";
import { config } from "dotenv";
const app = express();

app.use(bodyParser.json());
//.env setup
config({ path: ".env" });

//user Routes
app.use("/api/user", router);

//contect router
app.use("/api/contect", contectRouter);

// home router 
app.get("/", (req, res) => {
    res.json({ mess: "This is home route" });
});

// mongoose connection
mongoose.connect(process.env.MONGO_URI, {
    dbName: "api_data"
}).then(() => {
    console.log("MongoDb is connected with server...");
}).catch((err) => {
    console.log(err.message);
});

const port = process.env.PORT;
app.listen(port, () => { console.log("Server is running...") });