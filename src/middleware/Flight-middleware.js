const {StatusCodes} = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const { AppError } = require('../utils/error');
function validateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Flight number is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["AirplaneId is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Departure airport ID is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
     if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Arrival airport ID is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Departure time is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Arrival time is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
      if(!req.body.price){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Flight price is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while creating the flight";
        ErrorResponse.error = new AppError(["Flight available seats are not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    
    next();
}

module.exports = {validateRequest}