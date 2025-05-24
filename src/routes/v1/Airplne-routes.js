const express = require('express');

const router = express.Router();

const { AirplaneController } = require('../../controller');

router.post('/', AirplaneController.createAirplane);

module.exports = router;