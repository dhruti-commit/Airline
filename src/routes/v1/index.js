const express = require('express');


const airplaneRotues = require('./Airplne-routes');
const cityRoutes = require('./City-routes');
const airportRoutes = require('./Airport-routes');
const flightRoutes = require('./Flight-routes');

const router = express.Router();

router.use('/airplane', airplaneRotues);
router.use('/city', cityRoutes);
router.use('/airport' , airportRoutes);
router.use('/flight' , flightRoutes);

module.exports = router;