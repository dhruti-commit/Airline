const express = require('express');

const router = express.Router();

const airplaneRotes = require('./Airplne-routes');

router.use('/airplane', airplaneRotes);

module.exports = router;