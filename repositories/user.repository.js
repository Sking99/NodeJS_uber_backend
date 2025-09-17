const User = require('../models/user.model');

async function createUser(userData) {
    const user = new User(userData);
    return await user.save();
}

async function getUserByEmail(email) {
    return await User.findOne({ email });
}

module.exports = {
    createUser,
    getUserByEmail,
};