const {AirplaneService} = require("../services");

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessReponse} = require('../utils/common');

/**
 * POST : /Airplane
 * req.body{modelNumber : 'airbus203', capacity : '300'}
 */

async function createAirplane(req, res){
    try{
        const response = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessReponse.data = response;
        return res
               .status(StatusCodes.CREATED)
               .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
               .status(error.statusCode)
               .json(ErrorResponse);
    }
}

async function getAirplanes(req, res){
    try{
        const response = await AirplaneService.getAirplanes();
        SuccessReponse.data = response;
        return res
               .status(StatusCodes.OK)
               .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
               .status(error.statusCode)
               .json(ErrorResponse);
    }
}



/**
 * GET : /Airplane/:id
 * req.param.id
 * 
 */
async function getAirplane(req, res){
    try{
        const response = await AirplaneService.getAirplane(req.params.id);
        SuccessReponse.data = response;
        return res
               .status(StatusCodes.OK)
               .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
               .status(error.statusCode)
               .json(ErrorResponse);
    }
}

async function destroyAirplane(req, res){
    try{
        const response = await AirplaneService.destroyAirplane(req.params.id);
        SuccessReponse.data = response;
        return res
               .status(StatusCodes.CREATED)
               .json(SuccessReponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
               .status(error.statusCode)
               .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane, 
    getAirplane,
    getAirplanes, 
    destroyAirplane
}