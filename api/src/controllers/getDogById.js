const mappingDataDog = require('../helpers/mappingDataDog')
const {allDogsFromAPI} = require('../handlers/apiServices');
const getDogByIdFromDB = require('../handlers/dataHandlers/getDogById');
const { Error, ValidateError } = require('../handlers/errorHandler');

const getDogById = async (req, res) => {
    try {
        const { id } = req.params;
     
        const dogsFromAPI = await allDogsFromAPI();

        ValidateError(res, dogsFromAPI);

        const dogSelec = isNaN(id) ? [] : [dogsFromAPI.find(dog => dog.id === Number(id))];

        const dogFromApiMapped = mappingDataDog(dogSelec);
       
        const dogFromDB = await getDogByIdFromDB(id);

        const dogFromApiAndDB = [...dogFromApiMapped, ...dogFromDB]

        res.status(200).json(dogFromApiAndDB);

    } catch (error) {

        Error(res, 500, error)
    }
}



module.exports = getDogById;

