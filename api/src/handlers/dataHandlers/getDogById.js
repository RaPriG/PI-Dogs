const { Dog, Temperament } = require('../../db');
const mappingArrayTemperaments = require('../../helpers/mappingArrayTemperament');

const getDogFromDB = async (id) => {
    try {
        // retorna un objeto porque la busqueda es de un registro
        const dogFromDB = await Dog.findOne({
            where: { id: id },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: Temperament,
                attributes: ["name"],
                through: { attributes: [] }
            }]
        });
 
        const dogsWithTemperaments = mappingArrayTemperaments([dogFromDB]); //rpg
        return dogsWithTemperaments;

    } catch (error) {
        return [];
    }
}

module.exports = getDogFromDB;