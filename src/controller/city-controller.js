const {CityService} = require("../services");

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessReponse} = require('../utils/common');

/**
 * POST : /Airplane
 * req.body{modelNumber : 'airbus203', capacity : '300'}
 */

async function createCity(req, res){
    try{
        console.log("Control reaches in controller");
            const response = await CityService.createCity({
            name : req.body.name
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

async function getCities(req, res){
    try{
        const response = await CityService.getCitites();
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
async function getCity(req, res){
    try{
        const response = await CityService.getCity(req.params.id);
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

async function destroyCity(req, res){
    try{
        const response = await CityService.destroyCity(req.params.id);
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
   createCity,
   getCities,
   getCity,
   destroyCity
}