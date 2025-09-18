const express = require('express');
const { updateLocation } = require('../../controllers/driver.controller');
const authMidddleware = require('../../middlewares/auth.middleware');

const driverRouter = express.Router();

driverRouter.post('/location', authMidddleware, updateLocation);

module.exports = driverRouter;