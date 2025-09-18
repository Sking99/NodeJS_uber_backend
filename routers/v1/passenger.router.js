const express = require('express');
const { createBooking } = require('../../controllers/passenger.controller');
const authMidddleware = require('../../middlewares/auth.middleware');

const passengerRouter = express.Router();

passengerRouter.post('/ride', authMidddleware, createBooking);

module.exports = passengerRouter;