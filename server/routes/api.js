const express = require('express');
const authRouter = require('./auth.route');
const profileRouter = require('./profile.route');
const busRouter = require('./bus.route');

const api = express.Router();

api.use('/auth', authRouter);
api.use('/profile', profileRouter);
api.use('/bus', busRouter);


api.get('/', (req, res)=>{
    res.json({
        msg:"api route called"
    });
});


module.exports = api;