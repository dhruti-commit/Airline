const express = require('express');

const router = express.Router();

const { FlightController } = require('../../controller');

const { FlightMiddleware } = require('../../middleware');

router.post('/',
    FlightMiddleware.validateRequest ,
     FlightController.createFlight
    );

// router.get('/:id', 
//     AirportController.getAirport
// );

router.get('/',
    FlightController.getFlights
    );

// router.delete('/:id', 
//     AirportController.destroyAirport
// );

module.exports = router;