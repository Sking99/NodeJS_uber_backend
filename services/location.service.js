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

    async findNearbyDrivers(longitude, latitude, radiusKm) {
        try {
            console.log('Finding nearby drivers for location:', { longitude, latitude, radiusKm });
            const drivers = await redisClient.sendCommand([
                'GEORADIUS',
                'drivers',
                longitude.toString(),
                latitude.toString(),
                radiusKm.toString(),
                'km',
                'WITHCOORD',
            ]);
            console.log('Nearby drivers from Redis:', drivers);
            return drivers;
        } catch (error) {
            console.error('Error fetching nearby drivers from Redis:', error);
            return [];
        }
    }
}

module.exports = new locationService();