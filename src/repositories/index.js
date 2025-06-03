const CityRepository = require("./airplane-Repository");
const AirplaneRepository = require("./airplane-Repository");
const AirportRepository = require("./airport-repository");

module.exports = {
    AirplaneRepository : require("./airplane-Repository"),
    CityRepository : require('./cities-repositories'),
    AirportRepository : require('./airport-repository')
}