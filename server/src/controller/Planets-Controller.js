const {planets} = require('../models/planets');
const {StatusCodes} = require('http-status-codes');

function getAllPlanets(request,response){
    console.log('inside getAllplanets function');
    return response.status(StatusCodes.OK).json(planets);
}

module.exports = {
    getAllPlanets,
}