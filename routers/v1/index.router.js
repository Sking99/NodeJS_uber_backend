const express = require('express');
const authRouter = require('./auth.router');
const passengerRouter = require('./passenger.router');
const driverRouter = require('./driver.router');

const v1Router = express.Router();

v1Router.use('/auth', authRouter);
v1Router.use('/passenger', passengerRouter);
v1Router.use('/driver', driverRouter);

module.exports = v1Router;