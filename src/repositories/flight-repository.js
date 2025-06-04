const CrudRepository = require('./CRUD-Repogitory');

const { flight } = require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(flight);
    }

    async getFlights(filters){
        const response = await flight.findAll({
            where : filters
        })
        return response;
    }
}

module.exports = FlightRepository;