const { Dog } = require('../../db');


const createDog = async ({
    name,
    weight_min,
    weight_max,
    height_min,
    height_max,
    life_span,
    image},respFindtemperaments) => {

    const dogs = await Dog.create({
        name,
        weight_min,
        weight_max,
        height_min,
        height_max,
        life_span,
        image,
    });
    console.log("respFindtemperaments2", respFindtemperaments);
    await dogs.addTemperaments(respFindtemperaments);

    return dogs;

}


module.exports = createDog;