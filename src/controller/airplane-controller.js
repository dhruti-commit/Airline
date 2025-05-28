const {AirplaneService} = require("../services");

const { StatusCodes } = require("http-status-codes");

/**
 * POST : /Airplane
 * req.body{modelNumber : 'airbus203', capacity : '300'}
 */

async function createAirplane(req, res){
    console.log(req.body);
    try{
        const response = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });

        console.log("Airplane-controller");
        return res.status(StatusCodes.CREATED).
        json({
            success : true,
            message : "Successfully created an airplane",
            data : response,
            error : {} 
        });
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            success : false,
            message : "Something went wrong which not create airplane in controller",
            data : {},
            error : error
        });
    }
}

module.exports = {
    createAirplane
}