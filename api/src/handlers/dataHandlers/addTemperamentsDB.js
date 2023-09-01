const { Temperament } = require("../../db");
const {allDogsFromAPI} = require('../apiServices');
const mappingDataTemperament = require('../../helpers/mappingDataTemperament');
const Error = require('../errorHandler');
const addTemperamentsDB = async () => {
    try {

        const isTableContainData = await Temperament.count();

        if (isTableContainData === 0) {
   
            const allDogs = await allDogsFromAPI();

            const allTemperamentsApi = mappingDataTemperament(allDogs);

            const response = await Temperament.bulkCreate(allTemperamentsApi);

            if (!response.length) return { response: false };
        }

         return { response: true };
    } catch (error) {
        return { status: 500, response: false, error }
    }
}


module.exports = addTemperamentsDB;