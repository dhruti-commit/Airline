const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

const { AppError } = require('../utils/error');

const { Op } = require('sequelize');
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

async function getFlights(query){
      var customFilters = {};
      if(query.trips){
        [ departureAirportId, arrivalAirportId ] = query.trips.split("-");
        if(departureAirportId === arrivalAirportId){
            return new AppError('No such flight available', StatusCodes.BAD_REQUEST);
        }
        customFilters.departureAirportId = departureAirportId;
        customFilters.arrivalAirportId = arrivalAirportId;

        if(query.price){
            [minPrice, maxPrice] = query.price.split("-");
            customFilters.price = {
                [Op.between] : [minPrice, maxPrice]
            }
        }
      }

      try{
        const flights = flightRepository.getFlights(customFilters);
        return flights;
      }catch(err) { 
          throw new AppError('Cannot get flights', StatusCodes.INTERNAL_SERVER_ERROR);
      }
}
module.exports = {
    createFlight,
    getFlights
};