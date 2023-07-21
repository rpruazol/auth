'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const user = require('./users-model.js');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL);


const userModel = user(sequelize, DataTypes);

module.exports = {sequelize, userModel}