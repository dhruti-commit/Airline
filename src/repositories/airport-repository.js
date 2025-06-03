
const CrudRepository = require('./CRUD-Repogitory');

const { Airport } = require('../models');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;