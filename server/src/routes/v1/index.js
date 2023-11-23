const express = require('express');

const router = express.Router();
const planetsRouter = require('./Planets-Router');

const {InfoController} = require('../../controller')
router.get('/info',InfoController.info);

router.use('/planets',planetsRouter);


module.exports = router;