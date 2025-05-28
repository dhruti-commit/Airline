const {StatusCodes} = require('http-status-codes');

function validateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST)
        .json({
             success : false,
            message : "Something went wrong which not create airplane in controller",
            data : {},
            error : {message : "Model number is not found"}
        });
    }
    next();
}

module.exports = {validateRequest}