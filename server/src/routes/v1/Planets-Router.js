const express  =require('express');
const router = express.Router();

const {PlanetsController} = require('../../controller')
//This is technically reffering to /api/v1/planets which is a get request
router.get('/',PlanetsController.getAllPlanets);

module.exports = router;