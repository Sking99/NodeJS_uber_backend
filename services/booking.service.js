const bookingRepository = require('../repositories/booking.repository');
const { BASIC_FARE, FARE_PER_KM } = require('../utils/constants');
const { haversineDistance } = require('../utils/distance');

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

module.exports = {
    createBooking,
};