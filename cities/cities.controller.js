
/*cities.controller.js*/

const errorHandler = require('../middlewares/error_handler_middleware');
const asyncHandler = require('express-async-handler');
const express = require('express');
const citiesService = require('./cities.service.js');
const route = express.Router();


route.get('/:zipCode',  asyncHandler(async (req, res) => {
    
    return res.status(200).send(await citiesService.getCityByZipCode(req.params['zipCode']));

}))

module.exports=route;
route.use(errorHandler);