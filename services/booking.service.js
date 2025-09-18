const bookingRepository = require('../repositories/booking.repository');
const { BASIC_FARE, FARE_PER_KM } = require('../utils/constants');
const { haversineDistance } = require('../utils/distance');

const locationService = require('./location.service');

const createBooking = async (passengerId, source, destination) => {
    const distance = haversineDistance(source.latitude, source.longitude, destination.latitude, destination.longitude);
    const fare = BASIC_FARE + (FARE_PER_KM * distance);
    const bookingData = {
        passenger: passengerId,
        source,
        destination,
        distance,
        fare
    };
    return await bookingRepository.createBooking(bookingData);
}

const findNearbyDrivers = async (location, radiusInKm = 5) => {
    const longitude = parseFloat(location.longitude);
    const latitude = parseFloat(location.latitude);
    const radiusKm = parseFloat(radiusInKm);

    if (isNaN(longitude) || isNaN(latitude) || isNaN(radiusKm)) {
      throw new Error('Invalid coordinates or radius');
    }
  
    const nearbyDrivers = await locationService.findNearbyDrivers(longitude, latitude, radiusKm);
  
    return nearbyDrivers;
}

module.exports = {
    createBooking,
    findNearbyDrivers
};