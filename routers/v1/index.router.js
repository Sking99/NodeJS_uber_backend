const express = require('express');
const authRouter = require('./auth.router');

const v1Router = express.Router();

v1Router.use('/auth', authRouter);
v1Router.use('/passenger', require('./passenger.router'));

module.exports = v1Router;