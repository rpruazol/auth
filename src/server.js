'use strict';


const express = require('express');
const authRoutes = require('./auth/router');
require('dotenv').config()
// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());


// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);



module.exports = { app };