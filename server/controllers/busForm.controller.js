const Bus = require('../models/bus.model');

const busController = async (req, res)=>{
    try{
        const name = req.body.name;
        const source = req.body.source;
        const destination = req.body.destination;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;
        const price = req.body.price;
        const displayImage = req.body.displayImage;

        const newBus = new Bus({
            name: name,
            source: source,
            destination: destination,
            startTime: startTime,
            endTime: endTime,
            price: price,
            displayImage: displayImage
        });

        await newBus.save();
        return res.json({
            status: 200,
            newBus
        });
    }
    catch(error){
        console.log(error);
        return res.json({
            status:500,
            msg:"INTERNAL ERROR"
        });
    }
}

module.exports = busController;