const express = require('express');

const router = express.Router();

const { AirplaneController } = require('../../controller');

const { AirplaneMiddleware } = require("../../middleware");

router.post('/',
    AirplaneMiddleware.validateRequest ,
     AirplaneController.createAirplane
    );

router.get('/:id', 
    AirplaneController.getAirplane
);

router.get('/',
    AirplaneController.getAirplanes
    );

router.delete('/:id', 
    AirplaneController.destroyAirplane
);

module.exports = router;