
/*cities.service.js*/

const errorHandler = require('../middlewares/error_handler_middleware');
const NotFoundError= require('../errors/NotFoundError');
const citiesRepository=require('./cities.repository.js');
const express = require('express');
const route = express.Router();

async function getCityByZipCode(code){

        let res= await citiesRepository.getCityDataByZipCode(code);
        if(!res)
            throw new NotFoundError("No cities found!");
        else
            return res;
}

module.exports={
    getCityByZipCode: getCityByZipCode
}
route.use(errorHandler);