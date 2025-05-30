
const CrudRepository = require('./CRUD-Repogitory');

const {Airplane} = require('../models');

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;