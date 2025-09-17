const userService = require('../services/user.service');

async function register(req, res) {
    try {
        const { user, token } = await userService.register(req.body);
        res.status(201).json({ user, token }, { message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { user, token } = await userService.login(req.body);
        res.status(200).json({ user, token }, { message: 'Login successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    register,
    login,
};