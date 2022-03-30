
/*cities.repository.js*/

const axios=require('axios')

async function getCityDataByZipCode(code){
    try{
        const result = await axios.get(`https://api.zippopotam.us/us/${code}`);  
        return result.data["places"][0]["place name"] +" ,"+result.data["places"][0]["state abbreviation"] + " ,"
            +result.data["country"];
    }
    catch(err){
        return false;
    
    }
}
module.exports={ getCityDataByZipCode};