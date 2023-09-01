const { Temperament } = require('../../db');

const getAllTemperaments = async () => {
    try {
        const getTemperamentsDB = await Temperament.findAll();
        return getTemperamentsDB;
    } catch (error) {
        return { response: false, error: error }
    }
}

module.exports = getAllTemperaments;