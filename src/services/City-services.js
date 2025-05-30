const { CityRepository } = require('../repositories');

const cityRepository = new CityRepository();

const { AppError } = require('../utils/error');

const { StatusCodes } = require('http-status-codes');

async function createCity(data) {
    try{
        console.log("control reaches in service layer");
         const city = await cityRepository.create(data);
         return city;
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

async function getCitites() {
    try{
         const cities = await cityRepository.getAll();
         return cities;
    }
    catch(error){
        throw new AppError('Cannot get all airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getCity(id) {
    try{
         const city = await cityRepository.get(id);
         return city;
    }
    catch(error){
        throw new AppError('Cannot get airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
async function destroyCity(data) {
    try{
         const city = await cityRepository.destroy(data);
         return city;
    }
    catch(error){
        throw new AppError('Cannot destroy airplane object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}
module.exports = {
    createCity,
    getCitites,
    getCity,
    destroyCity
};