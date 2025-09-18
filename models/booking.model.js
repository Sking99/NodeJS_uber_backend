const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    source: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    destination: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    fare: { type: Number, required: true },
    distance: { type: Number, required: true }, // in kilometers
    feedback: { type: String, default: '' },
    rating: { type: Number, min: 1, max: 5, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;