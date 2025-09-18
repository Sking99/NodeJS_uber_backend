const User = require('../models/user.model');

async function createUser(userData) {
    const user = new User(userData);
    return await user.save();
}

async function getUserByEmail(email) {
    return await User.findOne({ email });
}

async function updateLocation(userId, location) {
    return await User.findByIdAndUpdate(userId, { location }, { new: true });
}

module.exports = {
    createUser,
    getUserByEmail,
    updateLocation
};