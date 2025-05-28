const express = require('express');

const router = express.Router();

const { AirplaneController } = require('../../controller');

const { AirplaneMiddleware } = require("../../middleware");

router.post('/',
    AirplaneMiddleware.validateRequest ,
     AirplaneController.createAirplane);

module.exports = router;