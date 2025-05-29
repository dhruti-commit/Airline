const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

const { AppError } = require('../utils/error');

const { StatusCodes } = require('http-status-codes');

async function createAirplane(data) {
    try{
         const airplane = await airplaneRepository.create(data);
         return airplane;
    }
    catch(error){
        if(error.name == "SequelizeValidationError")
        {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAirplanes() {
    try{
         const airplanes = await airplaneRepository.getAll();
         return airplanes;
    }
    catch(error){
        throw new AppError('Cannot get all airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAirplane(id) {
    try{
         const airplane = await airplaneRepository.get(id);
         return airplane;
    }
    catch(error){
        throw new AppError('Cannot get airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
async function destroyAirplane(data) {
    try{
         const airplane = await airplaneRepository.destroy(data);
         return airplane;
    }
    catch(error){
        throw new AppError('Cannot destroy airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
};