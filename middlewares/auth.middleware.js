const jwt = require('jsonwebtoken');
const { serverConfig } = require('../configs');
const User = require('../models/user.model');

const authMidddleware = async (req, res, next) => {
    // Dummy authentication logic
    const token = req.header('Authorization').replace('Bearer ', '');

    if(!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const verified = jwt.verify(token, serverConfig.JWT_SECRET);
        req.user = await User.findById(verified.id);
        console.log(req.user);
        next();

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMidddleware;