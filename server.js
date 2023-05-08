const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require("./config/dbConnection");
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())
app.use(cors())
const dotenv = require('dotenv').config();

app.use('/api/auth', require("./routes/authRoutes"));
connectDB()

const port = process.env.PORT;
app.listen(port, () => console.log('express sever running on port '+ port));