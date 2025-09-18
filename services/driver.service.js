const userRepository = require('../repositories/user.repository');
const locationService = require('../services/location.service');

const updateDriverLocation = async (driverId, location) => {
    const { latitude, longitude } = location;

    console.log('Updating location for driver:', driverId, 'to', location);

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    try {
        await locationService.addDriverLocation(driverId, { latitude: lat, longitude: lon });

        await userRepository.updateLocation(driverId, {
            type: 'Point',
            coordinates: [lon, lat]
        });
    } catch (error) {
        console.error('Error updating driver location:', error);
        throw new Error('Could not update driver location');
    }
};

module.exports = {
    updateDriverLocation,
};