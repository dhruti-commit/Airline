const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

const { AppError } = require('../utils/error');

const { StatusCodes } = require('http-status-codes');

async function createFlight(data) {
    try{
        console.log(data);
         const airport = await flightRepository.create(data);
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
        throw new AppError('Cannot create a new flight object',  StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlights(){
      try{
        const flights = flightRepository.getAll();
        return flights;
      }catch(err) { 
          throw new AppError('Cannot get flights', StatusCodes.INTERNAL_SERVER_ERROR);
      }
}
module.exports = {
    createFlight,
    getFlights
};