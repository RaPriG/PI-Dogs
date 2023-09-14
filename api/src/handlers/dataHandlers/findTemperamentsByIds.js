const { Temperament } = require('../../db');

const findTemperamentsByIds = async (arrayTempId) => {

    const temperaments = await Temperament.findAll({
        where: {
            id: arrayTempId
        },
    });

    return temperaments;
}

module.exports = findTemperamentsByIds;