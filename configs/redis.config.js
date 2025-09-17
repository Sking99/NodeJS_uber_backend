const redis = require('redis');

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis server');
});

redisClient.connect();

module.exports = { redisClient };