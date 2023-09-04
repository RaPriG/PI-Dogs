const mappingDataDog = require('../helpers/mappingDataDog')
const { dogsByNameFromAPI } = require('../handlers/apiServices');
const getDogByNameFromDB = require('../handlers/dataHandlers/getDogByName');
const { Error, ValidateError } = require('../handlers/errorHandler');
const getDogByName = async (req, res) => {

    try {

        const { value } = req.query;
  
        const allDogsFromApi = await dogsByNameFromAPI(value);

        const dogFromApiMapped = !allDogsFromApi?.length ? [] : mappingDataDog(allDogsFromApi);
   
        const dogFromDB = await getDogByNameFromDB(value);

        const dogFromApiAndDB = [...dogFromApiMapped, ...dogFromDB]

        res.status(200).json(dogFromApiAndDB);

    } catch (error) {

        Error(res, 500, error)
    }
}


module.exports = getDogByName;