const dotenv = require('dotenv');

function loadConfig() {
    dotenv.config();
    console.log('Environment variables loaded from .env file');
}

loadConfig();

const serverConfig = {
    port: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/uber_backend',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
    REDIS_URI: process.env.REDIS_URI || 'redis://localhost:6379',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    JWT_ISSUER: process.env.JWT_ISSUER || 'uber_backend',
    JWT_AUDIENCE: process.env.JWT_AUDIENCE || 'uber_users',
}

module.exports = { serverConfig };