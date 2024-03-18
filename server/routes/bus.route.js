const express = require('express');

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


module.exports = busRouter;