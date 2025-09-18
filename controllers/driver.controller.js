const driverService = require('../services/driver.service');

const updateLocation = async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        if(typeof latitude != 'number' || typeof longitude != 'number') {
            throw new Error('Latitude and longitude must be numbers');
        }

        const updatedUser = await driverService.updateDriverLocation(req.user._id, { latitude, longitude });

        res.status(200).json({ user: updatedUser, message: 'Location updated successfully' });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    updateLocation,
};