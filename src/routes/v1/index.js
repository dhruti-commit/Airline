const express = require('express');

const router = express.Router();

const airplaneRotues = require('./Airplne-routes');

const cityRoutes = require('./City-routes')

router.use('/airplane', airplaneRotues);

router.use('/city', cityRoutes);

module.exports = router;