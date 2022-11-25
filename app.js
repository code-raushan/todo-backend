require('dotenv').config();
const express = require('express');
const app = express();
const connect = require('./config/db')
const userRoute = require('./Routes/userRoutes');

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}));
//connecting to the database
connect()
//routing middleware
app.use('/', userRoute)



module.exports = app;