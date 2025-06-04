const {FlightService} = require("../services");

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessReponse} = require('../utils/common');

/***
 * POST : /airport
 * body : {
 * flightNumber : 'Varanasi',
 * airplaneId : 1,
 * departureAirportId : null, 
 * arrivalAirportId : 'VRN",
 * departureTime : 'Varanasi',
 * arrivalTime : 1,
 * price : null, 
 * boardingGate : 'VRN",
 * totalSeats : 3
 * }
 */

async function createFlight(req, res){
    try{
        const response = await FlightService.createFlight({
           flightNumber : req.body.flightNumber,
           airplaneId : req.body.airplaneId,
           departureAirportId : req.body.departureAirportId,
           arrivalAirportId : req.body.arrivalAirportId,
           departureTime : req.body.departureTime,
           arrivalTime : req.body.arrivalTime,
           price : req.body.price,
           boardingGate : req.body.boardingGate,
           totalSeats : req.body.totalSeats
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

async function getFlights(req, res){
    try{
        let flights = await FlightService.getFlights(req.query);
        SuccessReponse.data = flights;
        console.log(flights);
        return res.json(SuccessReponse)
        .status(StatusCodes.OK);
    }catch(error){
        ErrorResponse.error = error;
        return res.json(ErrorResponse)
        .status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
    getFlights
}