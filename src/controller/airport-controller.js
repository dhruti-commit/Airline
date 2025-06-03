const {AirportService} = require("../services");

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessReponse} = require('../utils/common');

/***
 * POST : /airport
 * body : {name : 'Varanasi',cityID : 1,address : null, code : 'VRN"}
 */

async function createAirport(req, res){
    try{
        const response = await AirportService.createAirport({
           name : req.body.name,
           code : req.body.code,
           address : req.body.req,
           cityID : req.body.cityID
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

async function getAirports(req, res){
    try{
        const response = await AirportService.getAirports();
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
 * GET : /airport/:id
 * req.param.id
 * 
 */
async function getAirport(req, res){
    try{
        const response = await AirportService.getAirport(req.params.id);
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

async function destroyAirport(req, res){
    try{
        const response = await AirportService.destroyAirport(req.params.id);
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

module.exports = {
    createAirport, 
    getAirport,
    getAirports, 
    destroyAirport
}