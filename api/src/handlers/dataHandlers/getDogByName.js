const { Op } = require('sequelize');
const { Dog, Temperament } = require('../../db');
const mappingArrayTemperaments = require('../../helpers/mappingArrayTemperament');

const getDogFromDB = async (name) => {
    try {
        //retorna un array
        const dogsFromDB = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: Temperament,
                attributes: ["name"],
                through: { attributes: [] }
            }]
        });
     
        const dogsWithTemperaments = mappingArrayTemperaments(dogsFromDB);
        return dogsWithTemperaments;

    } catch (error) {
        return [];
    }
}

module.exports = getDogFromDB;