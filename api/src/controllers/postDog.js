const createDog = require('../handlers/dataHandlers/postDog');
const findTemperamentsByIds = require('../handlers/dataHandlers/findTemperamentsByIds');
const mappingRespNewDog = require('../helpers/mappingRespNewDog');

const postDog = async (req, res) => {
    try {

        const arrayTempId = req.body.temperaments;

        const respFindtemperaments = await findTemperamentsByIds(arrayTempId);
        console.log("respFindtemperaments1",respFindtemperaments);
        const dogs = await createDog(req.body, respFindtemperaments);
      
        const respDogReg = mappingRespNewDog({ ...dogs.dataValues }, respFindtemperaments);

        res.status(201).json({ response: "Regitro realizado", dogReg: respDogReg });

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = postDog;