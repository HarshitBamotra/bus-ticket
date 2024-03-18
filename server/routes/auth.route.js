const express = require('express');
const registerformValidation = require('../validation/registerform.validate');
const loginformValidation = require('../validation/loginform.validate');
const loginController = require('../controllers/login.controller');
const registerController = require('../controllers/register.controller');

const authRouter = express.Router();


authRouter.post('/login', loginformValidation, loginController);

authRouter.post('/register', registerformValidation, registerController);

authRouter.get('/', (req, res)=>{
    res.json({
        msg: "auth route called"
    });
});

authRouter.post('/', registerformValidation, (req, res)=>{
    res.json({
        msg:"post auth called"
    });
});

module.exports = authRouter;
