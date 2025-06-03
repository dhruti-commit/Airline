const express = require('express');

const router = express.Router();

const { AirportController } = require('../../controller');

const { AirportMiddleware } = require("../../middleware");

router.post('/',
    AirportMiddleware.validateRequest ,
     AirportController.createAirport
    );

router.get('/:id', 
    AirportController.getAirport
);

router.get('/',
    AirportController.getAirports
    );

router.delete('/:id', 
    AirportController.destroyAirport
);

module.exports = router;