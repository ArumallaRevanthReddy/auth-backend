import { Express } from "express";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./src/components/auth/auth.route");

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", authRouter);

app.listen(port, () => console.log("express sever running on port " + port));
