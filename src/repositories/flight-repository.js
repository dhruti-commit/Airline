const CrudRepository = require('./CRUD-Repogitory');

const { flight } = require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(flight);
    }
}

module.exports = FlightRepository;