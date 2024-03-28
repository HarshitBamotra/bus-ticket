const express = require('express');
const authRouter = require('./auth.route');
const profileRouter = require('./profile.route');
const busRouter = require('./bus.route');

const api = express.Router();

// /api/auth
api.use('/auth', authRouter);

// /api/profile
api.use('/profile', profileRouter);

// /api/bus
api.use('/bus', busRouter);


module.exports = api;