const CrudRepository = require('./CRUD-Repogitory');

const { City } = require('../models');

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
}

module.exports = CityRepository;