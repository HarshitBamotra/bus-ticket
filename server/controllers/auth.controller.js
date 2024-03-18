require('dotenv').config();

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const authController = async(req, res, next)=>{
    try {
        if(!req.cookies){
            return res.json({
                status:402,
                msg:"Unauthorized"
            });
        }
        const token = req.cookies.token;
        const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({_id: verifyUser.id});

        return res.json({
            status:200,
            user
        });

    } catch (error) {
        console.log(error);
        return res.json({
            status: 500,
            msg:"INTERNAL ERROR"
        });
    }
    next();
}

module.exports = authController;