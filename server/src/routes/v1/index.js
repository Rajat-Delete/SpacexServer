const express = require('express');

const router = express.Router();
const planetsRouter = require('./Planets-Router');
const launchesRouter = require('./Launches-Router');
const { InfoController } = require('../../controller')


router.get('/info',InfoController.info);

router.use('/planets',planetsRouter);
router.use('/launches',launchesRouter);


module.exports = router;