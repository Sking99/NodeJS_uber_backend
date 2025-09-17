const jwt = require('jsonwebtoken');
const { serverConfig } = require('../configs/index');
const userRepository = require('../repositories/user.repository');

function signToken(userId) {
    return jwt.sign(
        { id: userId }, 
        serverConfig.JWT_SECRET, 
        { 
            expiresIn: serverConfig.JWT_EXPIRES_IN || '1h',
            issuer: serverConfig.JWT_ISSUER || 'uber_backend',
            audience: serverConfig.JWT_AUDIENCE || 'uber_users'
        }
    );
}

async function register(userData) {
    const user = await userRepository.createUser(userData);
    const token = signToken(user._id.toString());
    return { user, token };
}

async function login({ email, password }) {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = signToken(user._id.toString());
    return { user, token };
}

module.exports = {
    register,
    login,
};