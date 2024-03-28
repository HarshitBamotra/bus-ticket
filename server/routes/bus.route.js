const express = require('express');
const busFormValidation = require('../validation/addBusForm.validate');
const busController = require('../controllers/busForm.controller');

const busRouter = express.Router();

busRouter.get('/:id', (req, res)=>{
    res.json({
        msg: "bus route with id called"
    })
})

busRouter.get('/', (req, res)=>{
    res.json({
        msg:"bus route called"
    });
});

busRouter.post('/', busFormValidation, busController);

module.exports = busRouter;