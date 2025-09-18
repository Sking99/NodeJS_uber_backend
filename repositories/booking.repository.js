const Booking = require('../models/booking.model');

async function createBooking(bookingData) {
    const booking = new Booking(bookingData);
    return await booking.save();
}

module.exports = {
    createBooking,
};