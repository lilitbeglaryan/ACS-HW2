const sinon = require("sinon");
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");
const citiesRepository = require("../cities/cities.repository")
const axios = require('axios');
chai.use(chaiAsPromise);

const expect = chai.expect;

describe("Testing cities.repository.js file", function () {

    describe("Testing getCityDataByZipCode() function", function () {
        it("should call the function  once with correct parameters", async function () {
            const axiosGetStub = sinon.stub(axios, 'get');
            axiosGetStub.withArgs('https://api.zippopotam.us/us/10003')
            .returns(Promise.resolve({
                data: {
                    "post code": "10003",
                    "country": "United States",
                    "country abbreviation": "US",
                    "places": [
                        {
                        "place name": "New York City",
                        "longitude": "-73.9892",
                        "state": "New York",
                        "state abbreviation": "NY",
                        "latitude": "40.7313"
                        }
                    ]
                }    
            }));

          
            await expect(citiesRepository.getCityDataByZipCode('10003')).to.eventually.equal('New York City ,NY ,United States')
            expect(axiosGetStub.calledOnceWithExactly('https://api.zippopotam.us/us/10003')).to.be.true;
        });
    });    

});