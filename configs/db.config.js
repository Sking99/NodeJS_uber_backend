const mongoose = require('mongoose');
const { serverConfig } = require('./index');

async function connectToDatabase() {
    try {
        await mongoose.connect(serverConfig.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

module.exports = { connectToDatabase };