const express = require('express');
const router =  express.Router();
const { LaunchesController } = require('../../controller');
const {launchesMiddleware} =  require('../../middleware');
console.log('Inside launches router');

//console.log('LaunchesController is',LaunchesController);
//this is reffering to /api/v1/launches which is a get request
router.get('/', LaunchesController.getAllLaunches);

//this is reffering to /api/v1/launches which is a post request
router.post('/',launchesMiddleware.validateRequest,LaunchesController.httpaddNewLaunch);

//this is reffering to /api/v1/launches/:id which is a delete request
router.delete('/:id',LaunchesController.deleteLaunch)

module.exports = router;