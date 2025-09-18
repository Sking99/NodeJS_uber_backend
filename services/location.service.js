const {redisClient} = require('../configs/redis.config');

class locationService {
    async addDriverLocation(driverId, location) {
        
        try {
            await redisClient.sendCommand([
                'GEOADD',
                'drivers',
                location.longitude.toString(),
                location.latitude.toString(),
                driverId.toString()
            ])
        } catch (error) {
            console.error('Error adding driver location to Redis:', error);
        }

    }
}

module.exports = new locationService();