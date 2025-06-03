const {StatusCodes} = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const { AppError } = require('../utils/error');
function validateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating the airplane";
        ErrorResponse.error = new AppError(["Airport name is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "Something went wrong while creating the airplane";
        ErrorResponse.error = new AppError(["Airport code is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    if(!req.body.cityID){
        ErrorResponse.message = "Something went wrong while creating the airplane";
        ErrorResponse.error = new AppError(["Airport city ID is not found in the incoming request"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {validateRequest}