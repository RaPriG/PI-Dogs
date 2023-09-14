
const mappingRespNewDog = (dogs, temperaments) => {
  
    dogs.temperament = temperaments.map(t => t.dataValues.name).join(', ');

    delete dogs.updatedAt;
    delete dogs.createdAt;

    return dogs;
}


module.exports = mappingRespNewDog;