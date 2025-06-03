const { AirportRepository } = require('../repositories');

const airportRepository = new AirportRepository();

const { AppError } = require('../utils/error');

const { StatusCodes } = require('http-status-codes');

async function createAirport(data) {
    try{
        console.log(data);
         const airport = await airportRepository.create(data);
         return airport;
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
        throw new AppError('Cannot create a new airport object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAirports() {
    try{
         const airport = await airportRepository.getAll();
         return airport;
    }
    catch(error){
        throw new AppError('Cannot get all airport object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAirport(id) {
    try{
         const airport = await airportRepository.get(id);
         return airport;
    }
    catch(error){
        throw new AppError('Cannot get airport object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
async function destroyAirport(data) {
    try{
         const airport = await airportRepository.destroy(data);
         return airport;
    }
    catch(error){
        throw new AppError('Cannot destroy airport object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
};